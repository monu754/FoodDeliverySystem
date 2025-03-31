// search.js
document.addEventListener('DOMContentLoaded', function() {
    // Handle search in index.html
    const indexSearchBar = document.querySelector('.hero .search-bar');
    if (indexSearchBar) {
        const indexSearchInput = indexSearchBar.querySelector('input');
        const indexSearchButton = indexSearchBar.querySelector('button');
        
        indexSearchButton.addEventListener('click', function() {
            performIndexSearch(indexSearchInput.value);
        });
        
        indexSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performIndexSearch(indexSearchInput.value);
            }
        });
    }

    // Handle search in menu.html
    const menuSearchBar = document.querySelector('.search-container .search-bar');
    if (menuSearchBar) {
        const menuSearchInput = menuSearchBar.querySelector('input');
        const menuSearchButton = menuSearchBar.querySelector('button');
        
        menuSearchButton.addEventListener('click', function() {
            performMenuSearch(menuSearchInput.value);
        });
        
        menuSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performMenuSearch(menuSearchInput.value);
            }
        });
    }

    // Update the performIndexSearch function in search.js
function performIndexSearch(query) {
    const foodCards = document.querySelectorAll('.food-card');
    const lowerQuery = query.toLowerCase().trim();
    
    foodCards.forEach(card => {
        const cardName = card.querySelector('h3').textContent.toLowerCase();
        const cardDesc = card.querySelector('p').textContent.toLowerCase();
        
        if (lowerQuery === '' || cardName.includes(lowerQuery) || cardDesc.includes(lowerQuery)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Update the performMenuSearch function in search.js
function performMenuSearch(query) {
    const menuItems = document.querySelectorAll('.menu-item');
    const lowerQuery = query.toLowerCase().trim();
    
    menuItems.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        const itemDesc = item.querySelector('p').textContent.toLowerCase();
        
        if (lowerQuery === '' || itemName.includes(lowerQuery) || itemDesc.includes(lowerQuery)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}
});