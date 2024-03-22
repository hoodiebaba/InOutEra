document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split('/').pop(); // Get current page
    
    var navLinks = document.querySelectorAll('.navbar ul li a.nav-link'); // Get all navbar links
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) { // Check if link matches current page
            link.classList.add('active'); // Add active class if match found
        }
    });
});
