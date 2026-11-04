// テロップ層（透明背景）を連番PNGに書き出す。build.sh から呼ばれる。
// 単体で確認する時: node render_overlay.js <template.html> <出力先> 0 0 1.5,6.2,12
// 透明背景でテロップ層を連番PNGに書き出す
// 使い方: node render3.js <html> <outdir> <開始フレーム> <終了フレーム(含まない)> [確認する秒,カンマ区切り]
const { chromium } = require('playwright');
const path = require('path'); const fs = require('fs');
(async () => {
  const [,, html, out, f0='0', f1='0', only=''] = process.argv;
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + path.resolve(html));
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(1500);
  const shot = async (t, file) => { await p.evaluate(x => seek(x), t); await p.screenshot({ path: file, omitBackground: true }); };
  if (only) for (const t of only.split(',')) await shot(+t, `${out}/check_${t}.png`);
  else for (let i = +f0; i < +f1; i++) await shot(i / 30, `${out}/o${String(i).padStart(4,'0')}.png`);
  await b.close();
})();
