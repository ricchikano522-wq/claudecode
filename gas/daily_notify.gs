// ========== CONFIG - ここを必ず変更してください ==========
const CONFIG = {
  LINE_CHANNEL_ACCESS_TOKEN: 'YOUR_LINE_CHANNEL_ACCESS_TOKEN',
  LINE_USER_ID: 'YOUR_LINE_USER_ID',
  NOTION_API_TOKEN: 'YOUR_NOTION_INTEGRATION_TOKEN',
  NOTIFY_HOUR: 8, // 通知時刻（時）※トリガー設定時に使用

  // 月別スケジュールページID（毎月追加してください）
  SCHEDULE_PAGES: {
    6: '377a1a53c73b815b8468fdd0980af268',
    // 7: '新しいページIDをここに追加',
  }
};

// 稼働日（0=日, 1=月, 2=火, 3=水, 4=木, 5=金, 6=土）
const WORKING_DAYS = [0, 2, 3, 5, 6]; // 日・火・水・金・土

// ========== メイン関数（トリガーで毎朝実行）==========
function sendDailySchedule() {
  const now = new Date();
  const dayOfWeekNum = now.getDay();

  if (!WORKING_DAYS.includes(dayOfWeekNum)) {
    console.log('本日は休日のため通知をスキップ');
    return;
  }

  const month = now.getMonth() + 1;
  const day = now.getDate();
  const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][dayOfWeekNum];

  const pageId = CONFIG.SCHEDULE_PAGES[month];
  if (!pageId) {
    console.log(`${month}月のスケジュールページが未設定です`);
    return;
  }

  try {
    const blocks = getAllBlocks(pageId);
    const tasks = extractTodayTasks(blocks, month, day, dayOfWeek);
    const message = buildMessage(month, day, dayOfWeek, tasks);
    sendToLine(message);
    console.log('LINE通知送信完了:\n' + message);
  } catch (e) {
    console.error('エラー:', e.message);
  }
}

// ========== テスト用（手動実行で動作確認）==========
function testSend() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][now.getDay()];

  const pageId = CONFIG.SCHEDULE_PAGES[month];
  if (!pageId) {
    console.log(`${month}月のスケジュールページが未設定です`);
    return;
  }

  const blocks = getAllBlocks(pageId);
  const tasks = extractTodayTasks(blocks, month, day, dayOfWeek);
  const message = buildMessage(month, day, dayOfWeek, tasks);

  console.log('=== 送信予定メッセージ ===');
  console.log(message);
  console.log('========================');
  console.log('実際に送信するには sendDailySchedule() を実行してください');
}

// ========== Notion ブロック取得（ページネーション対応）==========
function getAllBlocks(pageId) {
  let allBlocks = [];
  let cursor = null;

  do {
    let url = `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`;
    if (cursor) url += `&start_cursor=${cursor}`;

    const res = UrlFetchApp.fetch(url, {
      headers: {
        'Authorization': `Bearer ${CONFIG.NOTION_API_TOKEN}`,
        'Notion-Version': '2022-06-28',
      },
      muteHttpExceptions: true
    });

    const data = JSON.parse(res.getContentText());
    if (res.getResponseCode() !== 200) {
      throw new Error(`Notion API error: ${data.message}`);
    }

    allBlocks = allBlocks.concat(data.results);
    cursor = data.has_more ? data.next_cursor : null;
  } while (cursor);

  return allBlocks;
}

// ========== ブロックからテキストを抽出 ==========
function getBlockText(block) {
  const richTexts = block[block.type]?.rich_text || [];
  return richTexts.map(rt => rt.plain_text).join('');
}

// ========== 今日のタスクを抽出 ==========
function extractTodayTasks(blocks, month, day, dayOfWeek) {
  const tasks = [];
  let inToday = false;

  // 今日の日付にマッチするパターン（例: "6/12（金）"）
  const todayPattern = new RegExp(`^${month}/${day}[（(]${dayOfWeek}[）)]`);
  // 別の日付にマッチするパターン
  const otherDayPattern = /^\d+\/\d+[（(][日月火水木金土][）)]/;

  for (const block of blocks) {
    const text = getBlockText(block);

    // 今日の日付セクション開始を検出
    if (todayPattern.test(text)) {
      inToday = true;
      continue;
    }

    if (inToday) {
      // 別の日付セクション・週見出し・区切りが来たら終了
      if (
        otherDayPattern.test(text) ||
        block.type === 'heading_2' ||
        block.type === 'heading_3' ||
        block.type === 'divider'
      ) {
        break;
      }

      if (block.type === 'to_do') {
        tasks.push({
          text: text,
          checked: block.to_do?.checked ?? false
        });
      }
    }
  }

  return tasks;
}

// ========== LINEメッセージを組み立て ==========
function buildMessage(month, day, dayOfWeek, tasks) {
  const dateStr = `${month}/${day}（${dayOfWeek}）`;

  if (tasks.length === 0) {
    return `📅 ${dateStr}\n\n本日のタスクはNotionに登録されていません。`;
  }

  const pending = tasks.filter(t => !t.checked);
  const done = tasks.filter(t => t.checked);
  const lines = [`📅 ${dateStr} の業務スケジュール\n`];

  if (pending.length > 0) {
    lines.push('▼ 本日のタスク');
    pending.forEach(t => lines.push(`□ ${t.text}`));
  }

  if (done.length > 0) {
    if (pending.length > 0) lines.push('');
    lines.push('▼ 完了済み');
    done.forEach(t => lines.push(`✅ ${t.text}`));
  }

  // 合計時間を集計（〇h の表記から抽出）
  const totalH = pending.reduce((sum, t) => {
    const match = t.text.match(/[（(](\d+\.?\d*)h[）)]/);
    return sum + (match ? parseFloat(match[1]) : 0);
  }, 0);

  if (totalH > 0) {
    lines.push(`\n⏱ 本日の合計: ${totalH}h`);
  }

  return lines.join('\n');
}

// ========== LINE Push Message 送信 ==========
function sendToLine(message) {
  const res = UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${CONFIG.LINE_CHANNEL_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    payload: JSON.stringify({
      to: CONFIG.LINE_USER_ID,
      messages: [{ type: 'text', text: message }]
    }),
    muteHttpExceptions: true
  });

  if (res.getResponseCode() !== 200) {
    throw new Error(`LINE API error: ${res.getContentText()}`);
  }
}

// ========== 毎朝トリガーを自動設定（初回1回だけ実行）==========
function setupDailyTrigger() {
  // 既存のトリガーを削除
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));

  // 毎朝8時に sendDailySchedule を実行
  ScriptApp.newTrigger('sendDailySchedule')
    .timeBased()
    .everyDays(1)
    .atHour(CONFIG.NOTIFY_HOUR)
    .create();

  console.log(`毎朝${CONFIG.NOTIFY_HOUR}時のトリガーを設定しました`);
}
