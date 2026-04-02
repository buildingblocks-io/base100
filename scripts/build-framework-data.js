#!/usr/bin/env node
/**
 * BASE-100 Framework Data Bundler
 * Reads all framework/*.json files and bundles them into
 * site/assets/js/base100-framework.js as window.BASE100_FRAMEWORK.
 *
 * Usage (from repository root):
 *   node scripts/build-framework-data.js
 *
 * Works on Windows, macOS, and Linux. Requires only built-in Node.js modules.
 * This script is safe to version-control and is NOT deployed to the server —
 * only its output (base100-framework.js) is deployed.
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ── Paths ────────────────────────────────────────────────────────────────────
const ROOT         = path.resolve(__dirname, '..');
const FRAMEWORK    = path.join(ROOT, 'framework');
const OUTPUT       = path.join(ROOT, 'site', 'assets', 'js', 'base100-framework.js');

// ── Load meta + schema ───────────────────────────────────────────────────────
const metaPath   = path.join(FRAMEWORK, 'base100_2026_meta.json');
const schemaPath = path.join(FRAMEWORK, 'base100_2026_schema.json');

if (!fs.existsSync(metaPath)) {
    console.error('ERROR: Missing ' + metaPath);
    process.exit(1);
}

const meta   = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
const schema = fs.existsSync(schemaPath)
    ? JSON.parse(fs.readFileSync(schemaPath, 'utf8'))
    : null;

// ── Load domain files ────────────────────────────────────────────────────────
// Match pattern: base100_2026-XX.json where XX is a 2-letter domain code.
const domainFiles = fs.readdirSync(FRAMEWORK)
    .filter(f => /^base100_2026-[a-z]{2}\.json$/.test(f))
    .sort();

const domains = {};

for (const filename of domainFiles) {
    const filePath = path.join(FRAMEWORK, filename);
    const domain   = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const key      = domain.id;   // Use the id declared inside the JSON as key

    if (!key) {
        console.warn('WARN: No "id" field in ' + filename + ' — skipping');
        continue;
    }
    domains[key] = domain;
    console.log('  + ' + key + '  ←  ' + filename + '  (' + (domain.levels || []).length + ' levels)');
}

// ── Assemble bundle ──────────────────────────────────────────────────────────
const bundle = {
    _generated : new Date().toISOString(),
    meta,
    schema,
    domains
};

// ── Write output file ────────────────────────────────────────────────────────
const now    = new Date().toISOString().slice(0, 16).replace('T', ' ');
const header = [
    '/**',
    ' * BASE-100 Framework Data Bundle',
    ' * AUTO-GENERATED — do not edit by hand.',
    ' * Run: node scripts/build-framework-data.js',
    ' *',
    ' * Generated: ' + now,
    ' *',
    ' * Usage in HTML:',
    ' *   <script src="site/assets/js/base100-framework.js"></script>',
    ' *   // window.BASE100_FRAMEWORK is then available globally.',
    ' */',
    '/* global window */',
    'window.BASE100_FRAMEWORK = '
].join('\n');

const outputDir = path.dirname(OUTPUT);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(OUTPUT, header + JSON.stringify(bundle, null, 2) + ';\n', 'utf8');

const kb = (fs.statSync(OUTPUT).size / 1024).toFixed(1);
console.log('');
console.log('Done.  Written to: ' + OUTPUT + '  (' + kb + ' KB)');
console.log('Domains bundled: ' + Object.keys(domains).join(', '));

