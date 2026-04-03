const fs = require('fs');
const path = require('path');
const cp = require('child_process');

function parseArgs(argv) {
  const args = { framework: '../../framework', out: 'dist', noPdf: false };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--framework') args.framework = argv[++i];
    else if (a === '--out') args.out = argv[++i];
    else if (a === '--no-pdf') args.noPdf = true;
  }
  return args;
}

function esc(s='') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inlineMd(s='') {
  let t = esc(s);
  t = t.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  t = t.replace(/\*(.+?)\*/g, '<em>$1</em>');
  return t;
}

function mdToBlocks(md) {
  const lines = md.replace(/\r/g, '').split('\n');
  const blocks = [];
  let para = [];
  let list = [];
  function flushPara() {
    if (!para.length) return;
    blocks.push({ type: 'p', html: inlineMd(para.join(' ')) });
    para = [];
  }
  function flushList() {
    if (!list.length) return;
    blocks.push({ type: 'ul', items: list.map(inlineMd) });
    list = [];
  }
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { flushPara(); flushList(); continue; }
    if (/^#\s+/.test(line)) { flushPara(); flushList(); blocks.push({ type: 'h1', text: line.replace(/^#\s+/, '') }); continue; }
    if (/^##\s+/.test(line)) { flushPara(); flushList(); blocks.push({ type: 'h2', text: line.replace(/^##\s+/, '') }); continue; }
    if (/^###\s+/.test(line)) { flushPara(); flushList(); blocks.push({ type: 'h3', text: line.replace(/^###\s+/, '') }); continue; }
    if (/^-\s+/.test(line)) { flushPara(); list.push(line.replace(/^-\s+/, '')); continue; }
    if (/^\d+\.\s+/.test(line)) { flushPara(); list.push(line.replace(/^\d+\.\s+/, '')); continue; }
    para.push(line);
  }
  flushPara(); flushList();
  return blocks;
}

function readMarkdownChapters(chapterDir) {
  const files = fs.readdirSync(chapterDir).filter(f => f.endsWith('.md')).sort();
  return files.map((file, idx) => ({
    slug: file.replace(/\.md$/, ''),
    order: idx + 1,
    blocks: mdToBlocks(fs.readFileSync(path.join(chapterDir, file), 'utf8')),
  }));
}

function readFramework(frameworkDir) {
  const metaFile = path.join(frameworkDir, 'base100_2026_meta.json');
  const files = fs.readdirSync(frameworkDir)
    .filter(f => /^base100_2026-.*\.json$/.test(f) && !f.includes('meta') && !f.includes('schema'))
    .sort();
  const meta = JSON.parse(fs.readFileSync(metaFile, 'utf8'));
  const domains = files.map(f => JSON.parse(fs.readFileSync(path.join(frameworkDir, f), 'utf8')));
  domains.sort((a,b) => a.id.localeCompare(b.id));
  const desired = ['LD','PI','BM','RS','CS','TC','OD','TI','FR','AI'];
  domains.sort((a,b) => desired.indexOf(a.id) - desired.indexOf(b.id));
  return { meta, domains };
}

function reviewLabel(n) {
  const map = { 1:'Reviewed annually.', 2:'Reviewed twice per year.', 4:'Reviewed quarterly.', 12:'Reviewed monthly.', 52:'Reviewed weekly.', 250:'Reviewed on a daily working rhythm.' };
  return map[n] || `Reviewed ${n} times per year.`;
}

/** Book-style labels: snake_case → "Marketing lead", preserves CEO-style tokens */
function humanizeToken(s) {
  return String(s)
    .trim()
    .split(/[_\s]+/)
    .filter(Boolean)
    .map((w) => {
      if (/^[A-Z]{2,}$/.test(w)) return w;
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    })
    .join(' ');
}

function createLogoSvg() {
  return `<svg viewBox="0 0 260 76" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="76" height="76" rx="8" fill="#2a2a2f"/>
    <rect width="76" height="76" rx="8" fill="#ff6b2c"/>
    <text x="38" y="49" text-anchor="middle" font-family="Plus Jakarta Sans, system-ui, sans-serif" font-size="28" font-weight="800" fill="#ffffff">B1</text>
    <text x="96" y="34" font-family="Plus Jakarta Sans, system-ui, sans-serif" font-size="24" font-weight="700" fill="#f4f4f5">BASE-100</text>
    <text x="96" y="56" font-family="Plus Jakarta Sans, system-ui, sans-serif" font-size="14.5" fill="#a8a8b0" letter-spacing="0.06em">INSTITUTE</text>
  </svg>`;
}

function titleCaseWords(s) {
  return String(s || '')
    .trim()
    .split(/\s+/)
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(' ');
}

function loadCoverGridDataUri(projectDir) {
  const p = path.join(projectDir, 'assets', 'covergrid.png');
  if (!fs.existsSync(p)) {
    console.warn('book: assets/covergrid.png missing — cover shows no grid image.');
    return null;
  }
  const buf = fs.readFileSync(p);
  return `data:image/png;base64,${buf.toString('base64')}`;
}

/** Cover: title on top; grid = raster asset embedded as data URI (portable HTML/PDF). */
function buildCoverHtml({ meta, revision, coverGridDataUri }) {
  const fw = meta.framework || {};
  const pos = meta.positioning || {};
  const kickerRaw =
    pos.category && String(pos.category).trim()
      ? titleCaseWords(pos.category)
      : 'Open Business Maturity Standard';
  const tagline = fw.about || 'The Open Standard for Business Maturity';
  const logo = createLogoSvg();
  const metaLine = `${esc(kickerRaw)} · ${esc(revision)}`;
  const gridBlock = coverGridDataUri
    ? `<div class="cover__grid-wrap" aria-hidden="true"><img class="cover__grid-img" src="${coverGridDataUri}" alt="" /></div>`
    : '';
  return `<div class="cover">
  <div class="cover__accent"></div>
  <div class="cover__grain"></div>
  <div class="cover__main">
    <p class="cover__meta">${metaLine}</p>
    <div class="cover__logo">${logo}</div>
    <h1 class="cover__title" aria-label="BASE-100"><span class="cover__title-base">BASE-</span><span class="cover__title-100">100</span></h1>
    <p class="cover__tagline">${esc(tagline)}</p>
    ${gridBlock}
  </div>
  <div class="cover__footer">
    <div class="cover__footer-left"><strong>The BASE-100 Institute</strong><span>Open Standard Revision ${esc(revision)}</span></div>
    <div class="cover__badge">Open standard</div>
  </div>
</div>`;
}

function narrativeChapterTag(slug) {
  if (/^00-/.test(slug)) return 'Foreword';
  if (/^07-/.test(slug)) return 'Reference';
  if (/^08-/.test(slug)) return 'Closing';
  return 'Part I · Narrative';
}

function renderNarrativeBlocks(chapters) {
  let html = '';
  for (const ch of chapters) {
    const title = ch.blocks.find(b => b.type === 'h1')?.text || ch.slug;
    const openerIndex = ch.displayOrder != null ? ch.displayOrder : ch.order;
    html += `<div class="flow-block chapter-opener" data-force-page="always" data-toc-title="${esc(title)}" data-running="${esc(title)}" data-toc-id="ch-${ch.slug}">
      <div class="chapter-opener__number">${openerIndex}</div>
      <div class="chapter-opener__tag">${narrativeChapterTag(ch.slug)}</div>
      <h1 class="chapter-opener__title">${esc(title)}</h1>
    </div>`;
    for (const block of ch.blocks.slice(1)) {
      if (block.type === 'h2') html += `<div class="flow-block h2-block" data-running="${esc(title)}"><h2>${esc(block.text)}</h2></div>`;
      else if (block.type === 'h3') html += `<div class="flow-block h3-block" data-running="${esc(title)}"><h3>${esc(block.text)}</h3></div>`;
      else if (block.type === 'p') html += `<div class="flow-block p-block" data-running="${esc(title)}"><p>${block.html}</p></div>`;
      else if (block.type === 'ul') html += `<div class="flow-block list-block" data-running="${esc(title)}"><ul>${block.items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`;
    }
  }
  return html;
}

function renderDomainBlocks(domains) {
  let html = '';
  let domainIndex = 1;
  for (const d of domains) {
    const running = `${d.id} · ${d.name}`;
    html += `<div class="flow-block domain-opener" data-force-page="always" data-toc-title="${esc(d.name)}" data-running="${esc(running)}" data-toc-id="domain-${esc(d.id)}">
      <div class="domain-opener__motif">
        <div class="domain-opener__block domain-opener__block--dark">${esc(d.id)}</div>
      </div>
      <div class="domain-opener__eyebrow">Part II · Domains · ${domainIndex.toString().padStart(2,'0')}</div>
      <h1 class="domain-opener__title">${esc(d.name)}</h1>
      <p class="domain-opener__purpose">${esc(d.purpose)}</p>
      <div class="domain-opener__rule"></div>
      <p class="domain-opener__summary">${esc(d.description)}</p>
    </div>`;

    html += `<div class="flow-block section-label" data-running="${esc(running)}"><div class="section-label__text">Direction</div></div>`;
    html += `<div class="flow-block p-block" data-running="${esc(running)}"><p>${esc(d.direction.name)}. ${esc(d.direction.purpose)}</p></div>`;
    {
      const owner = humanizeToken(d.direction.primary_owner);
      const contrib = (d.direction.contributors || []).map(humanizeToken).join(', ');
      html += `<div class="flow-block meta-block" data-running="${esc(running)}"><div class="meta-block__inner">`;
      html += `<div class="meta-block__item"><span class="meta-block__label">Primary owner</span><span class="meta-block__value">${esc(owner)}</span></div>`;
      if (d.direction.contributors?.length) {
        html += `<div class="meta-block__item"><span class="meta-block__label">Contributors</span><span class="meta-block__value">${esc(contrib)}</span></div>`;
      }
      html += `</div></div>`;
    }
    html += `<div class="flow-block list-block" data-running="${esc(running)}"><div class="mini-heading">Required outputs</div><ul>${d.direction.required_outputs.map(i=>`<li>${esc(i).replace(/_/g,' ')}</li>`).join('')}</ul></div>`;
    html += `<div class="flow-block list-block" data-running="${esc(running)}"><div class="mini-heading">Questions to answer</div><ul>${d.direction.questions_to_answer.map(i=>`<li>${esc(i)}</li>`).join('')}</ul></div>`;

    for (const level of d.levels) {
      html += `<div class="flow-block level-kicker" data-running="${esc(running)}"><div class="level-kicker__num">Level ${level.level}</div><h2 class="level-kicker__title">${esc(level.headline)}</h2><p class="level-kicker__plain">${esc(level.plain_english)}</p></div>`;
      html += `<div class="flow-block field-block" data-running="${esc(running)}"><div class="field-block__label">Observation</div><p>${esc(level.observation)}</p></div>`;
      html += `<div class="flow-block field-block" data-running="${esc(running)}"><div class="field-block__label">Why it matters</div><p>${esc(level.why_it_matters)}</p></div>`;
      html += `<div class="flow-block field-block field-block--audit" data-running="${esc(running)}"><div class="field-block__label">Audit question</div><p>${esc(level.audit_binary)}</p></div>`;
      html += `<div class="flow-block field-block" data-running="${esc(running)}"><div class="field-block__label">Evidence</div><p><strong>${esc(level.evidence)}</strong> ${esc(level.evidence_example)}</p></div>`;
      html += `<div class="flow-block field-block" data-running="${esc(running)}"><div class="field-block__label">Example</div><p>${esc(level.example)}</p></div>`;
      html += `<div class="flow-block list-block" data-running="${esc(running)}"><div class="mini-heading">False positive signals</div><ul>${level.false_positive_signals.map(i=>`<li>${esc(i)}</li>`).join('')}</ul></div>`;
      html += `<div class="flow-block list-block" data-running="${esc(running)}"><div class="mini-heading">Failure signals</div><ul>${level.failure_signals.map(i=>`<li>${esc(i)}</li>`).join('')}</ul></div>`;
      {
        const prereq = level.prerequisite
          ? `<div class="level-meta__metric level-meta__metric--wide"><span class="level-meta__k">Prerequisite</span><span class="level-meta__v">${esc(level.prerequisite)}</span></div>`
          : '';
        html += `<div class="flow-block level-meta" data-running="${esc(running)}">`;
        html += `<p class="level-meta__lead">${esc(reviewLabel(level.review_frequency))}</p>`;
        html += `<div class="level-meta__metrics">`;
        html += `<div class="level-meta__metric"><span class="level-meta__k">Impact</span><span class="level-meta__v">${esc(String(level.weights.impact))}</span></div>`;
        html += `<div class="level-meta__metric"><span class="level-meta__k">Complexity</span><span class="level-meta__v">${esc(String(level.weights.complexity))}</span></div>`;
        html += `<div class="level-meta__metric"><span class="level-meta__k">Time</span><span class="level-meta__v">${esc(String(level.weights.time_to_implement))}</span></div>`;
        html += `<div class="level-meta__metric"><span class="level-meta__k">Cost</span><span class="level-meta__v">${esc(String(level.weights.direct_cost))}</span></div>`;
        html += prereq;
        html += `</div></div>`;
      }
    }
    domainIndex += 1;
  }
  return html;
}

function createHtml({ meta, chapters, domains, afterword, coverGridDataUri }) {
  const title = meta.framework.full_name || meta.framework.name;
  const revision = meta.framework.revision;
  const css = `
    :root {
      --page-w: 210mm;
      --page-h: 297mm;
      --ink: #1e1e24;
      --ink-soft: #3d3d45;
      --muted: #5c5c66;
      --rule: #d8d8df;
      --accent: #ff6b2c;
      --accent-dim: #e85a24;
      --paper-print: #ffffff;
      --block: #2a2a2f;
      --lightblock: #ebebef;
      --font-display: "Plus Jakarta Sans", system-ui, sans-serif;
      --font-body: "Source Serif 4", Georgia, "Times New Roman", serif;
      --font-ui: "Plus Jakarta Sans", system-ui, sans-serif;
      --text-body: 12pt;
      --text-ui: 8pt;
      --text-small: 9pt;
      --leading-body: 1.48;
      --leading-tight: 1.35;
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; background: #c8c8d0; }
    body { font-family: var(--font-body); font-size: var(--text-body); font-weight: 450; color: var(--ink); -webkit-font-smoothing: antialiased; }
    #source { display: none; }
    #pages { width: var(--page-w); margin: 0 auto; }
    .page {
      width: var(--page-w);
      height: var(--page-h);
      background: var(--paper-print);
      position: relative;
      overflow: hidden;
      break-after: page;
      page-break-after: always;
    }
    .page--cover {
      background: var(--block);
      color: #f5f5f6;
    }
    .page__header, .page__footer { position: absolute; left: 0; right: 0; }
    .page__header {
      top: 9mm;
      padding: 0 20mm;
      height: 9mm;
      font-family: var(--font-ui);
      font-size: 7.5pt;
      font-weight: 600;
      letter-spacing: .14em;
      text-transform: uppercase;
      color: var(--muted);
    }
    .page__footer {
      bottom: 8mm;
      padding: 0 20mm;
      height: 7mm;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-family: var(--font-ui);
      font-size: 7.5pt;
      color: var(--muted);
    }
    .page__content {
      position: absolute;
      top: 22mm;
      left: 20mm;
      right: 20mm;
      bottom: 20mm;
      overflow: hidden;
    }
    .page--cover .page__content { top: 0; left: 0; right: 0; bottom: 0; }

    .cover {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      background: #1e1e22;
      color: #f4f4f5;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 100%;
    }
    .cover__accent {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 6mm;
      background: var(--accent);
    }
    .cover__grain {
      position: absolute;
      inset: 0;
      opacity: 0.025;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      pointer-events: none;
    }
    .cover__main {
      position: relative;
      z-index: 2;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 22mm 22mm 6mm 28mm;
      box-sizing: border-box;
      width: 100%;
    }
    .cover__meta {
      margin: 0;
      font-family: var(--font-ui);
      font-size: 6.75pt;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.42);
    }
    .cover__logo { width: 48mm; margin-top: 8mm; }
    .cover__title {
      margin: 7mm 0 0;
      padding: 0;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: baseline;
      gap: 0;
      font-family: var(--font-display);
      font-size: 40pt;
      font-weight: 800;
      line-height: 1;
      letter-spacing: -0.045em;
    }
    .cover__title-base {
      color: #ffffff;
    }
    .cover__title-100 {
      color: var(--accent);
    }
    .cover__tagline {
      margin: 5mm 0 0;
      font-family: var(--font-body);
      font-size: 11pt;
      font-weight: 500;
      line-height: 1.45;
      color: rgba(255,255,255,0.78);
      max-width: 132mm;
    }
    .cover__grid-wrap {
      width: 96mm;
      height: 96mm;
      margin-top: 26mm;
      margin-left: auto;
      margin-right: auto;
      flex-shrink: 0;
      align-self: center;
      border: 0.25mm solid rgba(255,255,255,0.16);
      border-radius: 2mm;
      overflow: hidden;
      background: #0a0a0d;
    }
    .cover__grid-img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
    }
    .cover__footer {
      position: relative;
      z-index: 2;
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 8mm;
      padding: 8mm 20mm 16mm 26mm;
    }
    .cover__footer-left { font-family: var(--font-ui); }
    .cover__footer-left strong {
      display: block;
      font-size: 12pt;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
    .cover__footer-left span {
      display: block;
      margin-top: 3mm;
      font-size: 9.5pt;
      color: rgba(255,255,255,0.65);
      letter-spacing: 0.02em;
    }
    .cover__badge {
      font-family: var(--font-ui);
      font-size: 8pt;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
      border: 0.35mm solid rgba(255,255,255,0.22);
      padding: 3mm 4mm;
      border-radius: 1mm;
    }

    .toc-page .page__header, .toc-page .page__footer { color: var(--muted); }
    .toc { padding-top: 6mm; }
    .toc__eyebrow {
      font-family: var(--font-ui);
      font-size: 7.5pt;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .16em;
      color: var(--accent);
    }
    .toc__title {
      margin: 3mm 0 10mm;
      font-family: var(--font-display);
      font-size: 26pt;
      font-weight: 800;
      letter-spacing: -0.04em;
      color: var(--ink);
    }
    .toc__list { margin-top: 4mm; }
    .toc__item {
      display: flex;
      align-items: flex-end;
      gap: 3mm;
      margin: 0 0 3.8mm;
      font-size: 12.5pt;
    }
    .toc__item span:first-child {
      font-family: var(--font-ui);
      font-size: 9pt;
      font-weight: 700;
      color: var(--accent);
      width: 11mm;
      flex: 0 0 auto;
    }
    .toc__item .toc__label { flex: 0 1 auto; min-width: 0; }
    .toc__link {
      font-family: var(--font-body);
      font-size: 12.8pt;
      line-height: 1.2;
      color: var(--ink);
      text-decoration: none;
      border-bottom: 0.25mm solid transparent;
    }
    .toc__link:hover { color: var(--accent-dim); border-bottom-color: rgba(255,107,44,0.35); }
    .toc__item .toc__dots {
      flex: 1 1 auto;
      border-bottom: 0.35mm solid var(--rule);
      transform: translateY(-1.8mm);
      min-width: 6mm;
    }
    .toc__item .toc__page {
      font-family: var(--font-ui);
      font-size: 9.5pt;
      font-weight: 600;
      color: var(--ink-soft);
      min-width: 9mm;
      text-align: right;
    }

    .flow-block { margin: 0 0 5mm; }
    .chapter-opener {
      margin-top: 8mm;
      padding: 16mm 0 0 4mm;
      position: relative;
      min-height: 58mm;
      border-left: 1.2mm solid var(--accent);
      padding-left: 6mm;
      overflow: visible;
    }
    .chapter-opener__number {
      position: absolute;
      right: 0;
      top: -2mm;
      min-width: 22mm;
      padding-left: 2mm;
      text-align: right;
      font-family: var(--font-display);
      font-size: 36pt;
      font-weight: 800;
      letter-spacing: -0.06em;
      font-variant-numeric: tabular-nums;
      color: rgba(42, 42, 47, 0.08);
      z-index: 0;
      box-sizing: border-box;
    }
    .chapter-opener__tag {
      position: relative;
      z-index: 2;
      font-family: var(--font-ui);
      font-size: 8pt;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .18em;
      color: var(--accent);
    }
    .chapter-opener__title {
      position: relative;
      z-index: 2;
      margin: 6mm 0 0;
      max-width: 128mm;
      font-family: var(--font-display);
      font-size: 24pt;
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -0.04em;
      color: var(--ink);
    }

    .domain-opener {
      padding: 12mm 0 0;
      min-height: 112mm;
      position: relative;
    }
    .domain-opener__motif { position: relative; height: 26mm; margin-bottom: 12mm; }
    .domain-opener__block--dark {
      position: absolute;
      left: 0;
      top: 0;
      width: 26mm;
      height: 26mm;
      border-radius: 2.5mm;
      background: var(--block);
      color: #fff;
      font-family: var(--font-ui);
      font-size: 17pt;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .domain-opener__eyebrow {
      font-family: var(--font-ui);
      font-size: 8pt;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .18em;
      color: var(--muted);
    }
    .domain-opener__title {
      margin: 6mm 0 0;
      font-family: var(--font-display);
      font-size: 28pt;
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -0.04em;
      max-width: 142mm;
      color: var(--ink);
    }
    .domain-opener__purpose {
      margin: 7mm 0 0;
      max-width: 132mm;
      font-family: var(--font-body);
      font-size: 15pt;
      font-weight: 600;
      line-height: 1.28;
      color: var(--ink-soft);
    }
    .domain-opener__rule {
      margin: 12mm 0 9mm;
      width: 100%;
      height: 0.35mm;
      background: var(--rule);
    }
    .domain-opener__summary {
      margin: 0;
      max-width: 148mm;
      font-size: 13.5pt;
      line-height: 1.42;
      color: var(--ink);
    }

    .h2-block h2, .level-kicker__title { font-family: var(--font-display); letter-spacing: -0.03em; }
    .h2-block h2 { margin: 6mm 0 0; font-size: 16.5pt; font-weight: 700; color: var(--ink); }
    .h3-block h3 {
      margin: 3mm 0 0;
      font-family: var(--font-ui);
      font-size: var(--text-small);
      font-weight: 700;
      color: var(--ink-soft);
      letter-spacing: -0.02em;
    }
    .p-block p, .field-block p {
      margin: 0;
      font-size: var(--text-body);
      line-height: var(--leading-body);
    }
    .p-block p { max-width: 148mm; }
    .meta-block {
      margin: 5mm 0 6mm;
    }
    .meta-block__inner {
      display: grid;
      grid-template-columns: 1fr;
      gap: 4mm;
      max-width: 148mm;
      padding: 5mm 6mm;
      background: var(--block);
      color: #f2f2f4;
      border-radius: 1.5mm;
      border-left: 1mm solid var(--accent);
    }
    .meta-block__item {
      display: grid;
      grid-template-columns: 34mm 1fr;
      gap: 4mm;
      align-items: start;
    }
    .meta-block__label {
      font-family: var(--font-ui);
      font-size: var(--text-ui);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: rgba(255,255,255,0.55);
      line-height: var(--leading-tight);
      padding-top: 0.4mm;
    }
    .meta-block__value {
      font-family: var(--font-body);
      font-size: var(--text-small);
      line-height: var(--leading-body);
      color: #fff;
      font-weight: 500;
    }
    .section-label { margin-top: 9mm; }
    .section-label__text {
      display: inline-block;
      font-family: var(--font-ui);
      font-size: 8pt;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .16em;
      color: var(--muted);
      padding-top: 2mm;
      border-top: 0.4mm solid var(--rule);
    }
    .list-block { max-width: 148mm; }
    .list-block ul {
      margin: 2mm 0 0 6mm;
      padding: 0;
      font-size: var(--text-body);
      line-height: var(--leading-body);
    }
    .list-block li { margin: 0 0 1.6mm; }
    .list-block li::marker { color: var(--muted); }
    .mini-heading {
      font-family: var(--font-ui);
      font-size: var(--text-ui);
      font-weight: 700;
      letter-spacing: 0.08em;
      color: var(--ink);
      text-transform: uppercase;
      margin-bottom: 1mm;
    }

    .level-kicker {
      margin-top: 7mm;
      padding-top: 4mm;
      border-top: 0.4mm solid var(--rule);
    }
    .level-kicker__num {
      display: inline-block;
      background: var(--ink);
      color: #fff;
      font-family: var(--font-ui);
      font-size: 8pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .12em;
      padding: 1.8mm 3.5mm;
      border-radius: 999px;
    }
    .level-kicker__title { margin: 3.5mm 0 0; font-size: 18pt; font-weight: 800; }
    .level-kicker__plain {
      margin: 2.5mm 0 0;
      max-width: 145mm;
      font-family: var(--font-body);
      font-size: 14.5pt;
      font-weight: 600;
      line-height: 1.28;
      color: var(--ink-soft);
    }
    .field-block { max-width: 148mm; }
    .field-block__label {
      margin-bottom: 1.2mm;
      font-family: var(--font-ui);
      font-size: 8pt;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .12em;
      color: var(--muted);
    }
    .field-block--audit {
      padding: 4mm 0 4mm 5mm;
      border-left: 1mm solid var(--accent);
      background: #fafafa;
    }
    .level-meta {
      margin: 6mm 0 4mm;
      padding: 5mm 6mm 6mm;
      max-width: 148mm;
      border: 0.25mm solid var(--rule);
      border-radius: 1.5mm;
      background: #fafafa;
    }
    .level-meta__lead {
      margin: 0 0 4mm;
      font-family: var(--font-body);
      font-size: var(--text-small);
      line-height: var(--leading-body);
      color: var(--ink);
      font-weight: 600;
    }
    .level-meta__metrics {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3.5mm 8mm;
    }
    .level-meta__metric {
      display: flex;
      flex-direction: column;
      gap: 1mm;
      min-width: 0;
    }
    .level-meta__metric--wide {
      grid-column: 1 / -1;
      flex-direction: row;
      align-items: baseline;
      gap: 4mm;
      padding-top: 3mm;
      margin-top: 1mm;
      border-top: 0.25mm solid var(--rule);
    }
    .level-meta__metric--wide .level-meta__k { min-width: 22mm; }
    .level-meta__k {
      font-family: var(--font-ui);
      font-size: var(--text-ui);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
    }
    .level-meta__v {
      font-family: var(--font-ui);
      font-size: 11pt;
      font-weight: 800;
      color: var(--ink);
      letter-spacing: -0.02em;
    }
    .level-meta__metric--wide .level-meta__v {
      font-family: var(--font-body);
      font-size: var(--text-body);
      font-weight: 600;
    }

    @page { size: A4; margin: 0; }
    @media print {
      html, body { background: white; }
      #pages { margin: 0; width: auto; }
      .page { margin: 0; }
      .toc__link { color: var(--ink); }
    }
  `;

  const sourceHtml = `
    <div id="source">
      ${renderNarrativeBlocks(chapters)}
      ${renderDomainBlocks(domains)}
      ${afterword ? renderNarrativeBlocks([afterword]) : ''}
    </div>`;

  const coverHtml = buildCoverHtml({ meta, revision, coverGridDataUri });

  const script = `
    const BOOK_META = ${JSON.stringify({ title, revision, standard: meta.framework.name || 'BASE-100' })};
    const COVER_HTML = ${JSON.stringify(coverHtml)};
    function makePage(type='body', running='BASE-100') {
      const page = document.createElement('section');
      page.className = 'page' + (type === 'cover' ? ' page--cover' : '') + (type === 'toc' ? ' toc-page' : '');
      if (type === 'cover') {
        page.innerHTML = '<div class="page__content"></div>';
        return { page, content: page.querySelector('.page__content') };
      }
      page.innerHTML = '<div class="page__header"></div><div class="page__content"></div><div class="page__footer"><span class="page__meta"></span><span class="page__num"></span></div>';
      page.querySelector('.page__header').textContent = running;
      page.querySelector('.page__meta').textContent = BOOK_META.standard + ' · Open Standard Revision ' + BOOK_META.revision;
      return { page, content: page.querySelector('.page__content') };
    }

    function buildCover(pagesEl) {
      const { page, content } = makePage('cover');
      content.innerHTML = COVER_HTML;
      pagesEl.appendChild(page);
    }

    function buildTocPage(pagesEl) {
      const { page, content } = makePage('toc', 'Contents');
      content.innerHTML = '<div class="toc"><div class="toc__eyebrow">Contents</div><h1 class="toc__title">Table of contents</h1><div class="toc__list" id="toc-list"></div></div>';
      pagesEl.appendChild(page);
      return page;
    }

    function paginateFlow(pagesEl) {
      const source = document.getElementById('source');
      const blocks = Array.from(source.children);
      let currentRunning = 'BASE-100';
      let current = makePage('body', currentRunning);
      pagesEl.appendChild(current.page);
      const tocEntries = [];

      function startNewPage(running) {
        currentRunning = running || currentRunning;
        current = makePage('body', currentRunning);
        pagesEl.appendChild(current.page);
      }

      for (const block of blocks) {
        const running = block.dataset.running || currentRunning;
        const forcePage = block.dataset.forcePage === 'always';
        if (forcePage && current.content.childNodes.length) startNewPage(running);
        current.page.querySelector('.page__header').textContent = running;
        const clone = block.cloneNode(true);
        current.content.appendChild(clone);
        if (current.content.scrollHeight > current.content.clientHeight + 1) {
          current.content.removeChild(clone);
          startNewPage(running);
          current.content.appendChild(clone);
        }
        if (current.content.scrollHeight > current.content.clientHeight + 1) {
          const children = Array.from(clone.children);
          if (children.length > 1) {
            current.content.removeChild(clone);
            const wrapper = document.createElement('div');
            wrapper.className = clone.className;
            for (const child of children) {
              const test = child.cloneNode(true);
              wrapper.appendChild(test);
              current.content.appendChild(wrapper);
              if (current.content.scrollHeight > current.content.clientHeight + 1) {
                wrapper.removeChild(test);
                current.content.removeChild(wrapper);
                if (wrapper.childNodes.length) {
                  current.content.appendChild(wrapper.cloneNode(true));
                }
                startNewPage(running);
                const fresh = document.createElement('div'); fresh.className = clone.className;
                fresh.appendChild(test);
                current.content.appendChild(fresh);
              } else {
                current.content.removeChild(wrapper);
              }
            }
          }
        }
        if (block.dataset.tocTitle) {
          tocEntries.push({
            title: block.dataset.tocTitle,
            page: pagesEl.querySelectorAll('.page').length,
            running,
            anchorId: block.dataset.tocId || '',
          });
        }
      }
      return tocEntries;
    }

    function assignTocAnchors(pagesEl) {
      const seen = new Set();
      for (const el of pagesEl.querySelectorAll('[data-toc-id]')) {
        const tid = el.dataset.tocId;
        if (!tid || seen.has(tid)) continue;
        seen.add(tid);
        el.id = tid;
      }
    }

    function finalizePages(pagesEl) {
      const pages = Array.from(pagesEl.querySelectorAll('.page'));
      pages.forEach((page, idx) => {
        const num = page.querySelector('.page__num');
        if (num) num.textContent = idx + 1;
      });
    }

    function escHtml(s) {
      return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    function fillToc(entries) {
      const toc = document.getElementById('toc-list');
      toc.innerHTML = entries.map((e, i) => {
        const label = escHtml(e.title);
        const href = e.anchorId ? '#' + e.anchorId : '#';
        return '<div class="toc__item"><span>' + String(i + 1).padStart(2, '0') + '</span><a class="toc__link toc__label" href="' + href + '">' + label + '</a><div class="toc__dots"></div><div class="toc__page">' + e.page + '</div></div>';
      }).join('');
    }

    function build() {
      const pagesEl = document.getElementById('pages');
      buildCover(pagesEl);
      buildTocPage(pagesEl);
      const entries = paginateFlow(pagesEl);
      assignTocAnchors(pagesEl);
      fillToc(entries);
      finalizePages(pagesEl);
      document.documentElement.classList.add('ready');
    }
    window.addEventListener('load', () => setTimeout(build, 100));
  `;

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;500;600;700&display=swap" rel="stylesheet" />
  <style>${css}</style>
</head>
<body>
  <div id="pages"></div>
  ${sourceHtml}
  <script>${script}</script>
</body>
</html>`;
}

function printPdf(htmlPath, pdfPath) {
  const exporter = path.join(__dirname, 'export-pdf.cjs');
  cp.execFileSync(process.execPath, [exporter, htmlPath, pdfPath], {
    stdio: 'inherit',
    cwd: __dirname,
  });
}

function main() {
  const args = parseArgs(process.argv);
  const projectDir = __dirname;
  const frameworkDir = path.resolve(projectDir, args.framework);
  const outDir = path.resolve(projectDir, args.out);
  fs.mkdirSync(outDir, { recursive: true });
  const allChapters = readMarkdownChapters(path.join(projectDir, 'chapters'));
  const AFTERWORD_SLUG = '08-afterword';
  const chapters = allChapters.filter((c) => c.slug !== AFTERWORD_SLUG);
  const afterword = allChapters.find((c) => c.slug === AFTERWORD_SLUG);
  chapters.forEach((c, i) => {
    c.displayOrder = i + 1;
  });
  const { meta, domains } = readFramework(frameworkDir);
  if (afterword) {
    afterword.displayOrder = chapters.length + domains.length + 1;
  }
  const coverGridDataUri = loadCoverGridDataUri(projectDir);
  const html = createHtml({ meta, chapters, domains, afterword, coverGridDataUri });
  const htmlPath = path.join(outDir, 'book.html');
  fs.writeFileSync(htmlPath, html, 'utf8');
  if (!args.noPdf) {
    const pdfPath = path.join(outDir, 'BASE100_Premium_HTML_Book.pdf');
    printPdf(htmlPath, pdfPath);
  }
}

main();
