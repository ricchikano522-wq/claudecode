# Claude スキル（バックアップ／編集用）

claude.ai に登録しているカスタムスキルのソースをここで管理する。
セッションのコンテナは使い捨てなので、**編集はこのリポジトリで行い、claude.ai 側に上げ直す**。

## youtube-trend-planner

YouTubeの企画リサーチ〜台本作成まで。

| ファイル | 内容 |
|---|---|
| `SKILL.md` | 全体の手順（STEP❶〜❻・納品フォーマット・台本ログ） |
| `references/research-criteria.md` | **企画リサーチの5基準**（STEP❷の判断基準） |
| `references/profile.md` | プロフィール・受講生実績・例え話・CTA |
| `references/titles.md` | タイトルの型・NG・サムネのトンマナ |
| `references/script-format.md` | 台本の構成・文体ルール |
| `scripts/check_style.py` | 台本の機械チェック |

### 企画リサーチの5基準（要約）

> リサーチは「伸びた企画」を探す作業ではなく、「**伸びた理由**」を見つけて自分の企画に変換する作業。

1. **「再生数」ではなく異常値を見る** — 再生数 ÷ 登録者数 ≧ 3倍（直近1年以内）
2. **伸びた動画をそのまま真似しない** — 「なぜ見られたのか」を分解して需要を取り出す
3. **コメント欄を見る** — 視聴者の「次に知りたいこと」がそのまま企画になる
4. **関連動画まで見る** — 似たテーマが複数伸びているか＝テーマ自体の需要を確認する
5. **自分ならどうズラすか** — ターゲット／悩みの深さ／実体験／切り口 のうち最低2つ

詳細は `youtube-trend-planner/references/research-criteria.md`。

### claude.ai への反映手順

1. このリポジトリで `skills/youtube-trend-planner/` を編集してコミットする
2. `youtube-trend-planner` フォルダを zip にする
3. claude.ai の設定 → スキル → `youtube-trend-planner` を開いて、zip をアップロードして更新する

※ セッション中に `~/.claude/skills/synced/` を直接書き換えても、そのセッション限りで消える。
