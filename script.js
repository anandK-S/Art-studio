/**
 * THE ART STUDIO — OPTIONAL PROGRESSIVE ENHANCEMENT SCRIPT
 * 
 * Note: The core Art Studio user interface operates 100% on Pure HTML5 & CSS3
 * using modern CSS :has(), radio state controllers, details/summary accordions,
 * and :target modals without requiring any JavaScript.
 * 
 * This file is provided as an optional progressive enhancement for instant live
 * search filtering, keyboard escape shortcuts for modals, and legacy fallbacks.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Live Instant Search Filtering (Enhancement over CSS)
    const searchInput = document.querySelector('.search-archive-input');
    const artCards = document.querySelectorAll('.art-card');

    if (searchInput && artCards.length > 0) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            
            artCards.forEach(card => {
                const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
                const desc = card.querySelector('.card-desc')?.textContent.toLowerCase() || '';
                const category = card.querySelector('.card-category-name')?.textContent.toLowerCase() || '';
                const specs = card.querySelector('.card-spec-box')?.textContent.toLowerCase() || '';

                const matches = title.includes(query) || 
                                desc.includes(query) || 
                                category.includes(query) || 
                                specs.includes(query);

                if (!matches && query.length > 0) {
                    card.style.display = 'none';
                } else {
                    card.style.removeProperty('display');
                }
            });
        });
    }

    // 2. Keyboard Accessibility (Escape key closes modals)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (window.location.hash) {
                window.location.hash = '';
            }
            const drawerCheckbox = document.getElementById('sidebar-toggle');
            if (drawerCheckbox && drawerCheckbox.checked) {
                drawerCheckbox.checked = false;
            }
        }
    });
});

/**
 * Legacy filter fallback function
 * Allows direct JavaScript category filtering if invoked
 */
function filterArt(categoryName) {
    const radioMap = {
        'Mirror Art': 'filter-mirror',
        'Mosaic': 'filter-mosaic',
        'Folk': 'filter-folk',
        'Glass': 'filter-glass',
        'All': 'filter-all'
    };

    const targetId = radioMap[categoryName] || 'filter-all';
    const radio = document.getElementById(targetId);
    if (radio) {
        radio.checked = true;
    }
}

window.filterArt = filterArt;
