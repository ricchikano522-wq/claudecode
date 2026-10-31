// 使い方: node render2.js <html> <outdir> [fps] [秒] [確認する秒,カンマ区切り] [transparent]
const { chromium } = require('playwright');
const path = require('path'); const fs = require('fs');
(async () => {
  const [,, html, out, fps='30', dur='30', only='', transparent=''] = process.argv;
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + path.resolve(html) + (transparent ? '?transparent=1' : ''));
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(1500);
  const shot = async (t, file) => { await p.evaluate(x => seek(x), t); await p.screenshot({ path: file, omitBackground: !!transparent }); };
  if (only) for (const t of only.split(',')) await shot(+t, `${out}/check_${t}.png`);
  else for (let i = 0; i < Math.round(+fps * +dur); i++) await shot(i / +fps, `${out}/f${String(i).padStart(4,'0')}.png`);
  await b.close();
})();
