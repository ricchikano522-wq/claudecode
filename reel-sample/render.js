const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const [,, fps='30', dur='30', only] = process.argv;
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + path.resolve('reel.html'));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(1500);
  if (only) {
    for (const t of only.split(',')) { await p.evaluate(x => seek(x), +t); await p.screenshot({ path: `check_${t}.png` }); }
  } else {
    const n = Math.round(+fps * +dur);
    for (let i = 0; i < n; i++) {
      await p.evaluate(x => seek(x), i / +fps);
      await p.screenshot({ path: `frames/f${String(i).padStart(4,'0')}.png` });
    }
  }
  await b.close();
})();
