const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const [,, html, out, qs=''] = process.argv;
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + path.resolve(html) + (qs ? '?' + qs : ''));
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(800);
  await p.screenshot({ path: out }); await b.close();
})();
