/**
 * HOME PAGE - Matrix Grid Generator
 * 10x10 Grid with Equalizer Hover Effect
 */

document.addEventListener('DOMContentLoaded', function() {
    generateMatrixGrid();
});

function generateMatrixGrid() {
    const domains = [
        {s:'Ld', n:'Leadership', color: '#3b82f6'},
        {s:'Pr', n:'Product', color: '#8b5cf6'},
        {s:'Br', n:'Brand', color: '#ec4899'},
        {s:'Rv', n:'Revenue', color: '#10b981'},
        {s:'Sc', n:'Success', color: '#06b6d4'},
        {s:'Tl', n:'Talent', color: '#f59e0b'},
        {s:'Op', n:'Operations', color: '#ef4444'},
        {s:'Tc', n:'Tech', color: '#6366f1'},
        {s:'Fn', n:'Finance', color: '#14b8a6'},
        {s:'As', n:'Assets', color: '#a855f7'}
    ];

    const matrixGrid = document.getElementById('matrix-grid');
    if (!matrixGrid) return;

    // Generate sample maturity levels for demo (random between 3-9)
    const sampleLevels = domains.map(() => Math.floor(Math.random() * 7) + 3);

    domains.forEach((domain, rowIndex) => {
        const row = document.createElement('div');
        row.className = 'flex gap-px domain-row';
        row.dataset.domain = domain.n;

        // Domain label
        const label = document.createElement('div');
        label.className = 'w-16 shrink-0 flex items-center justify-start pr-2';
        label.innerHTML = `
            <div class="text-right w-full">
                <div class="text-[9px] font-mono text-slate-400 leading-none mb-0.5">${String(rowIndex + 1).padStart(2, '0')}</div>
                <div class="text-[10px] font-bold text-slate-700 leading-none">${domain.s}</div>
            </div>
        `;
        row.appendChild(label);

        // Level cells container
        const cellsContainer = document.createElement('div');
        cellsContainer.className = 'flex-1 grid grid-cols-10 gap-px';

        // Create 10 level cells
        for (let level = 1; level <= 10; level++) {
            const cell = document.createElement('div');
            const isActive = level <= sampleLevels[rowIndex];

            cell.className = `
                matrix-cell aspect-square relative overflow-hidden cursor-pointer
                transition-all duration-300 ease-out
                ${isActive ? 'bg-slate-200' : 'bg-slate-50'}
            `;
            cell.dataset.row = rowIndex;
            cell.dataset.level = level;
            cell.dataset.color = domain.color;

            // Inner bar for equalizer effect
            const bar = document.createElement('div');
            bar.className = `
                matrix-bar absolute bottom-0 left-0 right-0
                transition-all duration-500 ease-out
                ${isActive ? 'bg-slate-400' : 'bg-slate-200'}
            `;
            bar.style.height = isActive ? '100%' : '20%';

            cell.appendChild(bar);

            // Hover effects
            cell.addEventListener('mouseenter', function() {
                // Animate this cell
                bar.style.height = '100%';
                bar.style.backgroundColor = domain.color;
                cell.style.backgroundColor = domain.color + '20'; // 20% opacity

                // Animate all cells in this row up to this level
                const cells = cellsContainer.querySelectorAll('.matrix-cell');
                cells.forEach((c, idx) => {
                    if (idx < level) {
                        const cBar = c.querySelector('.matrix-bar');
                        // Staggered animation
                        setTimeout(() => {
                            cBar.style.height = '100%';
                            cBar.style.backgroundColor = domain.color;
                            c.style.backgroundColor = domain.color + '20';
                        }, idx * 30);
                    }
                });
            });

            cell.addEventListener('mouseleave', function() {
                // Reset this cell
                bar.style.height = isActive ? '100%' : '20%';
                bar.style.backgroundColor = isActive ? '#94a3b8' : '#e2e8f0';
                cell.style.backgroundColor = isActive ? '#e2e8f0' : '#f8fafc';

                // Reset all cells in this row
                const cells = cellsContainer.querySelectorAll('.matrix-cell');
                cells.forEach((c, idx) => {
                    const cBar = c.querySelector('.matrix-bar');
                    const cIsActive = idx < sampleLevels[rowIndex];
                    cBar.style.height = cIsActive ? '100%' : '20%';
                    cBar.style.backgroundColor = cIsActive ? '#94a3b8' : '#e2e8f0';
                    c.style.backgroundColor = cIsActive ? '#e2e8f0' : '#f8fafc';
                });
            });

            cellsContainer.appendChild(cell);
        }

        row.appendChild(cellsContainer);
        matrixGrid.appendChild(row);
    });

    // Add row hover effect
    const rows = matrixGrid.querySelectorAll('.domain-row');
    rows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(2px)';
        });
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

