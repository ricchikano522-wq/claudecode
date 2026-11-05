// 「化ける人の共通点」（元動画 406×720・51.15秒・縦書き字幕は元のまま残す）
window.TIMELINE = {
  duration: 51.15,
  srcWidth: 406,
  // 元の縦書き字幕（高さ210〜1700px付近）を避けて、見出しは上の細い帯、パネルと強調は右下に置く
  css: `
    .title{top:84px;min-width:0;padding:14px 50px 18px}
    .title .lab{font-size:20px;letter-spacing:.3em}
    .title .lab i{max-width:70px}
    .title .kick{display:none}
    .title .ttl{margin-top:4px;font-size:58px}
    .punch{top:1140px;left:430px;right:0;height:520px}
    .punch .orb{width:460px;height:460px;margin-left:-230px}
    .punch .t{top:120px}
    .punch .s{font-size:36px}
    .punch .b{font-size:120px}
    .punch .stars{transform-origin:50% 0}
  `,
  caps: [],
  titles: [
    [0.00, 14.75, 'FREELANCE', '', '<em>化ける人</em>の共通点'],
    [14.75, 25.50, 'COMMON POINTS', '', '成功する人の<em>3つの共通点</em>'],
    [25.50, 37.50, 'MINDSET', '', '最初は<em>腑に落ちない</em>もの'],
    [37.50, 47.90, 'KEY POINT', '', 'アレンジより<em>徹底模倣</em>'],
    [47.90, 51.15, 'ACTION', '', 'プロの助言を<em>即行動</em>に'],
  ],
  cards: [],
  // ❶〜❸を話している間、右下に3つを並べて順に点灯
  panels: [
    [20.40, [20.45, 21.40, 22.95], 25.40, '成功する人の共通点',
      ['アドバイスは即実行', '行動したら<br>フィードバックをもらう', '腑に落ちなくても<br>疑わず行動'],
      'left:330px;right:40px;top:1130px;min-height:0;padding:30px 36px 32px'],
  ],
  punches: [
    [6.45, 7.45, 'こういう人が化ける', '素直'],
    [45.95, 47.60, '自己流のアレンジは', '99<small>%</small>失敗'],
  ],
};
