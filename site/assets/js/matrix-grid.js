/**
 * BASE-100 Matrix Grid Component
 * Clean, snappy 10x10 interactive grid
 *
 * Concept: Hover shows maturity progression with instant visual feedback
 */

class MatrixGrid {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.domains = MatrixGrid.getDomains();

        this.maturityLevels = this.generateRandomLevels();
        this._rowState = new Map(); // rowEl -> { lastLevel }
        this._scoreEl = null;
        this._resetBtn = null;
        this._hasInteracted = false;
        this.init();
    }

    static getDomains() {
        if (Array.isArray(window.BASE100_DATA?.departments) && window.BASE100_DATA.departments.length) {
            return window.BASE100_DATA.departments.map((domain) => ({
                short: domain.symbol,
                full: domain.name,
                color: domain.color || '#64748b'
            }));
        }

        return [
            { short: 'Ld', full: 'Leadership', color: '#3b82f6' },
            { short: 'Pr', full: 'Product & Innovation', color: '#8b5cf6' },
            { short: 'Br', full: 'Brand & Marketing', color: '#ec4899' },
            { short: 'Rv', full: 'Revenue & Sales', color: '#10b981' },
            { short: 'Sc', full: 'Customer Success', color: '#06b6d4' },
            { short: 'Tl', full: 'Talent & Culture', color: '#f59e0b' },
            { short: 'Op', full: 'Operations', color: '#ef4444' },
            { short: 'Tc', full: 'Technology', color: '#6366f1' },
            { short: 'Fn', full: 'Finance & Legal', color: '#14b8a6' },
            { short: 'As', full: 'Assets & IP', color: '#a855f7' }
        ];
    }



    generateRandomLevels() {
        // Subtle demo values (4–7). Reads as “realistic” without looking random-noisy.
        return this.domains.map(() => Math.floor(Math.random() * 4) + 4);
    }

    init() {
        this.render();
        this.attachEventListeners();
    }

    render() {
        this.container.innerHTML = '';
        this.container.className = 'matrix-grid-container';

        const gridWrapper = document.createElement('div');
        gridWrapper.className = 'matrix-grid-wrapper';

        this.domains.forEach((domain, rowIndex) => {
            const row = this.createRow(domain, rowIndex);
            gridWrapper.appendChild(row);
        });

        this.container.appendChild(gridWrapper);

        // Optional score target (keeps component reusable)
        const scoreTargetId = this.container.getAttribute('data-matrix-score-target');
        this._scoreEl = scoreTargetId ? document.getElementById(scoreTargetId) : null;

        // Optional reset button target
        const resetBtnId = this.container.getAttribute('data-matrix-reset-btn');
        this._resetBtn = resetBtnId ? document.getElementById(resetBtnId) : null;

        // Attach reset button click handler
        if (this._resetBtn) {
            this._resetBtn.addEventListener('click', () => this.resetToBaseline());
        }

        this._updateScore();
    }

    createRow(domain, rowIndex) {
        const row = document.createElement('div');
        row.className = 'matrix-row';
        row.dataset.row = rowIndex;

        const maturityLevel = this.maturityLevels[rowIndex];

        // Create 10 cells
        for (let level = 1; level <= 10; level++) {
            const cell = document.createElement('div');
            cell.className = 'matrix-cell';
            cell.dataset.row = rowIndex;
            cell.dataset.level = level;
            cell.dataset.maturity = maturityLevel;

            // Equalizer bar
            const bar = document.createElement('div');
            bar.className = 'matrix-bar';
            cell.appendChild(bar);

            const levelColor = MatrixGrid.levelColor(level);
            cell.style.setProperty('--cell-color', levelColor);

            // Baseline state: show maturity as a faint, more institutional gradient.
            const isActive = level <= maturityLevel;
            if (isActive) {
                cell.style.backgroundColor = MatrixGrid.rgba(levelColor, 0.08);
                cell.style.setProperty('--bar', '1');
                cell.style.setProperty('--bar-a', '0.22');
            } else {
                cell.style.backgroundColor = '#e2e8f0';
                cell.style.setProperty('--bar', '0');
                cell.style.setProperty('--bar-a', '0');
            }

            row.appendChild(cell);
        }

        return row;
    }

    attachEventListeners() {
        const rows = this.container.querySelectorAll('.matrix-row');

        rows.forEach((row) => {
            const cells = Array.from(row.querySelectorAll('.matrix-cell'));
            const maturityLevel = parseInt(cells[0].dataset.maturity, 10);

            const state = { lastLevel: null, maturityLevel };
            this._rowState.set(row, state);

            // Continuous pointer tracking across gaps (no inconsistent "mouse position" color)
            row.addEventListener('pointerenter', (e) => {
                row.classList.add('is-active');
                this._applyPointer(row, cells, e);
            });

            row.addEventListener('pointermove', (e) => {
                this._applyPointer(row, cells, e);
            });

            row.addEventListener('pointerleave', () => {
                row.classList.remove('is-active');
            });
        });
    }

    _applyPointer(row, cells, e) {
        const state = this._rowState.get(row);
        if (!state) return;

        const hoveredLevel = this._levelFromPointer(row, e);
        if (hoveredLevel === state.lastLevel) {
            return;
        }
        state.lastLevel = hoveredLevel;

        // snappy interaction mode
        row.classList.add('is-active');

        this._renderHover(row, cells, hoveredLevel);
        this._updateScore();

        // Show reset button on first interaction
        if (!this._hasInteracted) {
            this._hasInteracted = true;
            this._showResetButton();
        }
    }

    _levelFromPointer(row, e) {
        const rect = row.getBoundingClientRect();
        const styles = window.getComputedStyle(row);
        const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
        const cols = 10;
        const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
        const cellW = (rect.width - gap * (cols - 1)) / cols;
        const step = cellW + gap;
        const idx = Math.floor(x / step);
        return Math.min(Math.max(idx + 1, 1), 10);
    }

    _renderHover(row, cells, hoveredLevel) {
        // Clear cursor
        cells.forEach(c => c.classList.remove('is-cursor'));

        // Add cursor outline at hovered position
        const cursorCell = cells[hoveredLevel - 1];
        if (cursorCell) cursorCell.classList.add('is-cursor');

        // Selection: cells up to hovered level are "on"; everything to the right goes neutral grey.
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            const level = i + 1;
            const levelColor = MatrixGrid.levelColor(level);

            if (level <= hoveredLevel) {
                cell.style.setProperty('--cell-color', levelColor);
                cell.style.backgroundColor = MatrixGrid.rgba(levelColor, 0.12);
                cell.style.setProperty('--bar', '1');
                cell.style.setProperty('--bar-a', '0.88');
            } else {
                // Neutral (not tinted)
                cell.style.backgroundColor = '#e2e8f0';
                cell.style.setProperty('--bar', '0');
                cell.style.setProperty('--bar-a', '0');
            }
        }
    }

    _showResetButton() {
        if (this._resetBtn) {
            this._resetBtn.style.opacity = '1';
            this._resetBtn.style.pointerEvents = 'auto';
        }
    }

    _hideResetButton() {
        if (this._resetBtn) {
            this._resetBtn.style.opacity = '0';
            this._resetBtn.style.pointerEvents = 'none';
        }
    }

    resetToBaseline() {
        const rows = this.container.querySelectorAll('.matrix-row');
        rows.forEach((row) => {
            const cells = Array.from(row.querySelectorAll('.matrix-cell'));
            const state = this._rowState.get(row);
            if (!state) return;

            state.lastLevel = null;
            row.classList.remove('is-active');
            this._restoreBaseline(row, cells, state.maturityLevel);
        });

        this._updateScore();
        this._hasInteracted = false;
        this._hideResetButton();
    }

    _updateScore() {
        if (!this._scoreEl) return;

		// Score = number of colored blocks (cells that are "on") across all 10 rows.
		// Baseline is maturityLevel; while hovering a row, lastLevel becomes the temporary "selected" value.
		// Note: render() may call this before listeners populate _rowState, so fall back to maturityLevels.
		let total = 0;
		if (this._rowState.size > 0) {
			for (const [, state] of this._rowState) {
				total += (state.lastLevel == null ? state.maturityLevel : state.lastLevel);
			}
		} else {
			total = this.maturityLevels.reduce((a, b) => a + b, 0);
		}
	        this._scoreEl.textContent = `${total}/100`;
    }

    _restoreBaseline(row, cells, maturityLevel) {
        // Fade back to the "company baseline" for this row
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            const level = i + 1;
            const levelColor = MatrixGrid.levelColor(level);
            cell.classList.remove('is-cursor');

            if (level <= maturityLevel) {
                cell.style.setProperty('--cell-color', levelColor);
                cell.style.backgroundColor = MatrixGrid.rgba(levelColor, 0.08);
                cell.style.setProperty('--bar', '1');
                cell.style.setProperty('--bar-a', '0.22');
            } else {
                cell.style.backgroundColor = '#e2e8f0';
                cell.style.setProperty('--bar', '0');
                cell.style.setProperty('--bar-a', '0');
            }
        }
    }

    static levelColor(level) {
        // Vibrant red-to-green gradient aligned with accent color
        const palette = [
            '#ef4444', '#f97316', '#eab308', '#84cc16', '#22c55e',
            '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6'
        ];

        return palette[Math.min(Math.max(level, 1), 10) - 1];
    }

    static rgba(hex, a) {
        // Accept '#rrggbb'
        const h = (hex || '').trim();
        if (!h.startsWith('#') || (h.length !== 7)) return `rgba(100, 116, 139, ${a})`;
        const r = parseInt(h.slice(1, 3), 16);
        const g = parseInt(h.slice(3, 5), 16);
        const b = parseInt(h.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => {
    const autoInit = document.querySelectorAll('[data-matrix-grid]');
    autoInit.forEach(el => {
        new MatrixGrid(el.id);
    });
});

