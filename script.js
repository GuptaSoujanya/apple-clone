// CSS loading polyfill for older browsers
(function() {
    var links = document.querySelectorAll('link[rel="preload"][as="style"]');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('load', function() {
            this.rel = 'stylesheet';
        });
    }
})();

// Search functionality
const searchIcon = document.getElementById('searchIcon');
const searchDropdown = document.getElementById('searchDropdown');

if (searchIcon && searchDropdown) {
    searchIcon.addEventListener('click', function() {
        searchDropdown.style.display = searchDropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    // Close search dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchIcon.contains(event.target) && !searchDropdown.contains(event.target)) {
            searchDropdown.style.display = 'none';
        }
    });
}

// Performance: Defer non-critical JavaScript
window.addEventListener('load', function() {
    // Add any non-critical functionality here
    console.log('Page fully loaded');
});
