/**
 * DOMAINS PAGE - Domain Cards Generator
 */

document.addEventListener('DOMContentLoaded', function() {
    generateDomainCards();
});

function generateDomainCards() {
    const domains = Array.isArray(window.BASE100_DATA?.departments)
        ? window.BASE100_DATA.departments.map((domain, index) => ({
            id: index + 1,
            name: domain.name,
            symbol: domain.symbol,
            desc: domain.summary || domain.desc
        }))
        : [
            {id:1, name:"Leadership", symbol:"Ld", desc:"Strategy & Direction"},
            {id:2, name:"Product", symbol:"Pr", desc:"Offer & Innovation"},
            {id:3, name:"Brand", symbol:"Br", desc:"Market Position"},
            {id:4, name:"Revenue", symbol:"Rv", desc:"Sales & Cash"},
            {id:5, name:"Success", symbol:"Sc", desc:"Retention & LTV"},
            {id:6, name:"Talent", symbol:"Tl", desc:"People & Culture"},
            {id:7, name:"Operations", symbol:"Op", desc:"Delivery & Logistics"},
            {id:8, name:"Technology", symbol:"Tc", desc:"Data & Automation"},
            {id:9, name:"Finance", symbol:"Fn", desc:"Risk & Capital"},
            {id:10, name:"Assets", symbol:"As", desc:"Knowledge & IP"}
        ];
    
    const domainsGrid = document.getElementById('domains-grid');
    if (!domainsGrid) return;
    
    domains.forEach((d, i) => {
        const card = document.createElement('div');
        card.className = 'hover-card bg-white p-6 rounded-none relative group fade-in';
        card.style.animationDelay = `${i * 0.05}s`;
        
        card.innerHTML = `
            <div class="text-[10px] font-mono text-slate-400 absolute top-4 right-4">0${d.id}</div>
            <div class="text-4xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#ff4d00] transition-colors">${d.symbol}</div>
            <h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">${d.name}</h3>
            <p class="text-xs text-slate-500 leading-relaxed">${d.desc}</p>
        `;
        
        domainsGrid.appendChild(card);
    });
}

