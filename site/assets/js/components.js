// BASE-100 Institute - Shared Components
// Injects header + footer without fetch() so file:// protocol works locally.
// Each page must set window.BASE_URL before loading this script:
//   root index.html        ->  window.BASE_URL = './'
//   site/[page]/index.html ->  window.BASE_URL = '../../'
//   site/legal/[page].html ->  window.BASE_URL = '../../'
(function () {
    'use strict';
    const B = (typeof window.BASE_URL === 'string') ? window.BASE_URL : './';

    /* ── FOOTER ─────────────────────────────────────────────────────── */
    function buildFooter() {
        return `
<footer class="bg-slate-900 text-white pt-20 pb-10 px-6 border-t-4 border-[#ff4d00]">
  <div class="max-w-7xl mx-auto">
    <div class="grid md:grid-cols-4 gap-12 mb-16">
      <div class="col-span-1 md:col-span-2">
        <h2 class="text-3xl font-bold mb-6" style="font-family:'Space Grotesk',sans-serif">Engineering for Business.</h2>
        <p class="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">The BASE-100 Institute provides the universal operating language for modern companies. We replace "gut feeling" with engineering standards.</p>
        <div class="flex gap-4">
          <div class="px-3 py-1 border border-slate-700 text-[10px] font-mono uppercase text-slate-400">Rev. 2026</div>
          <div class="px-3 py-1 border border-slate-700 text-[10px] font-mono uppercase text-slate-400">Open Standard</div>
        </div>
      </div>
      <div>
        <h4 class="text-xs font-mono text-[#ff4d00] uppercase mb-6 tracking-widest">The Framework</h4>
        <ul class="space-y-4 text-sm text-slate-300 font-medium">
          <li><a href="${B}site/grid/" class="hover:text-white transition-colors">The BASE-100 Grid</a></li>
          <li><a href="${B}site/domains/" class="hover:text-white transition-colors">10 Domains</a></li>
          <li><a href="${B}site/discovery/" class="hover:text-white transition-colors">Self-Assessment</a></li>
          <li><a href="${B}publications/whitepaper/BASE100_EBOOK-rev2026.pdf" target="_blank" class="hover:text-white transition-colors">Download Whitepaper</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-xs font-mono text-[#ff4d00] uppercase mb-6 tracking-widest">The Institute</h4>
        <ul class="space-y-4 text-sm text-slate-300 font-medium">
          <li><a href="${B}site/institute/" class="hover:text-white transition-colors">About the Institute</a></li>
          <li><a href="${B}site/contact/" class="hover:text-white transition-colors">Contact the Institute</a></li>
        </ul>
      </div>
    </div>
    <div class="pt-8 border-t border-slate-800">
      <div class="flex flex-wrap gap-4 text-xs text-slate-400 mb-4">
        <a href="${B}site/legal/privacy.html" class="hover:text-white transition-colors">Privacy Policy</a>
        <a href="${B}site/legal/terms.html" class="hover:text-white transition-colors">Terms of Service</a>
        <a href="${B}site/legal/disclaimer.html" class="hover:text-white transition-colors">Disclaimer</a>
        <a href="${B}site/legal/cookies.html" class="hover:text-white transition-colors">Cookie Policy</a>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-slate-500 uppercase tracking-wide">
        <div>&copy; 2026 BASE-100 Institute. Flanders, BE.</div>
        <div class="mt-4 md:mt-0">Part of the Marqui Research Group</div>
      </div>
    </div>
  </div>
</footer>
<div id="cookie-banner" class="hidden fixed bottom-0 left-0 right-0 bg-slate-900 text-white border-t-2 border-[#ff4d00] z-50">
  <div class="max-w-7xl mx-auto px-6 py-4">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <p class="text-sm text-slate-300 flex-1">We use cookies to improve your experience and analyse site usage.
        <a href="${B}site/legal/cookies.html" class="text-[#ff4d00] hover:underline">Learn more</a>
      </p>
      <div class="flex gap-3">
        <button onclick="BASE100.declineCookies()" class="px-4 py-2 text-xs font-bold text-slate-300 border border-slate-700 hover:border-slate-500 transition-colors uppercase tracking-wide">Decline</button>
        <button onclick="BASE100.acceptCookies()" class="px-4 py-2 text-xs font-bold text-white bg-[#ff4d00] hover:bg-[#ff6a2e] transition-colors uppercase tracking-wide">Accept</button>
      </div>
    </div>
  </div>
</div>
<div class="subscribe-overlay" data-subscribe="popup" aria-hidden="true">
  <div class="subscribe-modal">
    <button class="subscribe-popup-close" aria-label="Close">&times;</button>
    <div class="text-xs font-mono text-[#ff4d00] uppercase tracking-widest mb-4">BASE-100 Institute</div>
    <h3 class="text-2xl font-bold text-slate-900 mb-2" style="font-family:'Space Grotesk',sans-serif">Stay Ahead of the Standard</h3>
    <p class="text-slate-500 text-sm mb-6">Receive revision notes, governance updates, and framework releases.</p>
    <form novalidate>
      <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">
      <div class="space-y-3">
        <input type="text" name="name" placeholder="Full Name" required class="w-full px-4 py-3 border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-colors">
        <input type="email" name="email" placeholder="Work Email" required class="w-full px-4 py-3 border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-colors">
      </div>
      <div class="subscribe-message mt-3 text-sm"></div>
      <button type="submit" disabled class="mt-4 w-full px-6 py-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-wide hover:bg-[#ff4d00] transition-colors disabled:opacity-40 disabled:cursor-not-allowed">Subscribe</button>
    </form>
  </div>
</div>`;
    }

    /* ── INJECT ──────────────────────────────────────────────────────── */
    function inject() {
        var h = document.getElementById('header-container');
        if (h) h.innerHTML = buildHeader();
        var f = document.getElementById('footer-container');
        if (f) f.innerHTML = buildFooter();
        // Subscribe popup container (grid page uses a separate div)
        var sp = document.getElementById('subscribe-popup-container');
        if (sp) sp.remove(); // moved into footer output; avoid duplicates

        // Run active nav highlight after header is in the DOM
        if (typeof window.setActiveNav === 'function') {
            window.setActiveNav();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inject);
    } else {
        inject();
    }

    /* ── HEADER ─────────────────────────────────────────────────────── */
    function buildHeader() {
        return `
<nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
  <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    <a href="${B}index.html" class="flex items-center gap-4 group">
      <div class="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-bold text-lg tracking-tighter group-hover:bg-[#ff4d00] transition-colors">B1</div>
      <div class="flex flex-col">
        <span class="font-bold text-slate-900 leading-none tracking-tight">BASE-100</span>
        <span class="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Institute</span>
      </div>
    </a>
    <div class="hidden md:flex gap-10 text-sm font-medium text-slate-500">
      <a href="${B}site/grid/" class="nav-link hover:text-[#ff4d00] transition-colors" data-section="grid">The Framework</a>
      <a href="${B}site/institute/" class="nav-link hover:text-[#ff4d00] transition-colors" data-section="institute">The Institute</a>
    </div>
    <div class="flex items-center gap-3">
      <a href="${B}site/discovery/" class="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-[#ff4d00] border-2 border-[#ff4d00] uppercase tracking-wide hover:bg-[#ff4d00] hover:text-white transition-colors">
        <i class="fa-solid fa-magnifying-glass mr-2"></i>Self-Assessment
      </a>
      <a href="${B}site/grid/" class="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-slate-900 uppercase tracking-wide hover:bg-[#ff4d00] transition-colors">
        Explore the Grid
      </a>
      <button id="mobile-menu-btn" onclick="BASE100.toggleMobileMenu()" class="md:hidden text-slate-900 hover:text-[#ff4d00] transition-colors" aria-label="Toggle menu" aria-expanded="false">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>
  <div id="mobile-menu" class="hidden md:hidden border-t border-slate-200 bg-white">
    <div class="px-6 py-4 space-y-3">
      <a href="${B}site/grid/" class="block text-sm font-medium text-slate-700 hover:text-[#ff4d00] transition-colors py-2">The Framework</a>
      <a href="${B}site/institute/" class="block text-sm font-medium text-slate-700 hover:text-[#ff4d00] transition-colors py-2">The Institute</a>
      <a href="${B}site/discovery/" class="block w-full text-center px-6 py-3 text-xs font-bold text-[#ff4d00] border-2 border-[#ff4d00] uppercase tracking-wide hover:bg-[#ff4d00] hover:text-white transition-colors mt-4">
        <i class="fa-solid fa-magnifying-glass mr-2"></i>Self-Assessment
      </a>
      <a href="${B}site/grid/" class="block w-full text-center px-6 py-3 text-xs font-bold text-white bg-slate-900 uppercase tracking-wide hover:bg-[#ff4d00] transition-colors">
        Explore the Grid
      </a>
    </div>
  </div>
</nav>`;
    }


})();
