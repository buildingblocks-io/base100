# BASE-100 HTML book

This project builds an HTML-first book from Markdown chapters and framework JSON, then exports a PDF using **Node.js** and **Puppeteer** (Chromium). There is no Python in the pipeline.

## Structure

- `assets/covergrid.png` — cover graphic (embedded into `book.html` as data URI)
- `chapters/` — Part I (Markdown): `00-` foreword, `01–06` core, `07-` copyright & revisions; Part II is domains from framework JSON; `08-afterword` is appended **last** (after all domains)
- `build.js` — compiles sources to a single self-contained `book.html` (embedded CSS + layout script)
- `export-pdf.cjs` — prints `book.html` to PDF via headless Chromium
- `dist/` — output `book.html` and `BASE100_Premium_HTML_Book.pdf`

## Build

Install dependencies once (from this folder):

```bash
npm install
```

Generate HTML and PDF:

```bash
npm run build
```

HTML only (no PDF):

```bash
npm run build:html
```

The layout engine uses fixed A4 pages with zero PDF margins; padding and breaks are controlled in CSS and the pagination script.
