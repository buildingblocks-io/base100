'use strict';

const fs = require('fs');
const puppeteer = require('puppeteer');
const path = require('path');

async function main() {
  const htmlPath = path.resolve(process.argv[2]);
  const pdfPath = path.resolve(process.argv[3]);
  const html = fs.readFileSync(htmlPath, 'utf8');

  if (fs.existsSync(pdfPath)) {
    try {
      fs.unlinkSync(pdfPath);
    } catch (_) {
      /* ignore */
    }
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });
    // Inline HTML avoids stale file:// caching; Google Fonts still load over HTTPS.
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 120000 });
    await page.waitForSelector('html.ready', { timeout: 60000 });
    await new Promise((r) => setTimeout(r, 500));
    await page.pdf({
      path: pdfPath,
      printBackground: true,
      width: '210mm',
      height: '297mm',
      margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
      preferCSSPageSize: true,
    });
    const st = fs.statSync(pdfPath);
    console.error(`PDF: ${pdfPath} (${st.size} bytes)`);
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
