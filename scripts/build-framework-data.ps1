# build-framework-data.ps1
# Bundles all framework/*.json files into site/assets/js/base100-framework.js
# so the data is accessible locally (file:// protocol) without fetch().
#
# Usage:
#   .\scripts\build-framework-data.ps1
#
# Output:
#   site/assets/js/base100-framework.js  →  window.BASE100_FRAMEWORK = { meta: {...}, schema: {...}, domains: { LD: {...}, ... } }

param(
    [string]$FrameworkDir = "framework",
    [string]$OutputFile   = "site/assets/js/base100-framework.js"
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

Set-Location $root

Write-Host "BASE-100 Framework bundler" -ForegroundColor Cyan
Write-Host "Reading JSON files from: $FrameworkDir" -ForegroundColor Gray

# ── Load meta ───────────────────────────────────────────────────────────────
$metaPath   = Join-Path $FrameworkDir "base100_2026_meta.json"
$schemaPath = Join-Path $FrameworkDir "base100_2026_schema.json"

if (-not (Test-Path $metaPath)) { Write-Error "Missing: $metaPath"; exit 1 }

$meta   = Get-Content $metaPath   -Raw -Encoding UTF8 | ConvertFrom-Json
$schema = if (Test-Path $schemaPath) { Get-Content $schemaPath -Raw -Encoding UTF8 | ConvertFrom-Json } else { $null }

# ── Load domain files (two-letter codes, e.g. base100_2026-ld.json) ─────────
$domainFiles = Get-ChildItem -Path $FrameworkDir -Filter "base100_2026-*.json" | Sort-Object Name

$domains = [ordered]@{}

foreach ($file in $domainFiles) {
    $code = $file.BaseName -replace "base100_2026-", "" | ForEach-Object { $_.ToUpper() }
    Write-Host "  + domain $code  ← $($file.Name)" -ForegroundColor DarkGray
    $domains[$code] = Get-Content $file.FullName -Raw -Encoding UTF8 | ConvertFrom-Json
}

# ── Assemble the bundle object ───────────────────────────────────────────────
$bundle = [ordered]@{
    _generated = (Get-Date -Format "yyyy-MM-ddTHH:mm:ss")
    meta       = $meta
    schema     = $schema
    domains    = $domains
}

$json = $bundle | ConvertTo-Json -Depth 50 -Compress:$false

# ── Write JS file ────────────────────────────────────────────────────────────
$header = @"
/**
 * BASE-100 Framework Data Bundle
 * AUTO-GENERATED - do not edit by hand.
 * Run: .\scripts\build-framework-data.ps1
 *
 * Generated: $((Get-Date -Format "yyyy-MM-dd HH:mm"))
 *
 * Usage in HTML:
 *   <script src="site/assets/js/base100-framework.js"></script>
 *   // window.BASE100_FRAMEWORK is then available globally.
 */
/* global window */
window.BASE100_FRAMEWORK = 
"@

$outputPath = Join-Path $root $OutputFile
New-Item -ItemType Directory -Force -Path (Split-Path $outputPath) | Out-Null

Set-Content -Path $outputPath -Value ($header + $json + ";") -Encoding UTF8

$kb = [math]::Round((Get-Item $outputPath).Length / 1KB, 1)
Write-Host ""
Write-Host "Done. Written to: $outputPath ($kb KB)" -ForegroundColor Green
Write-Host "Domains bundled:  $($domains.Keys -join ', ')" -ForegroundColor Green

