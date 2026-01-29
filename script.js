document.addEventListener('DOMContentLoaded', () => {
    // Get the current page filename (e.g., "index.html" or "data-prep.html")
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // Select all links in the nav
    const navLinks = document.querySelectorAll('nav a');

    // Loop through links to find the match
    navLinks.forEach(link => {
        // Get the href attribute of the link
        const linkPage = link.getAttribute('href');

        // If the link matches the current page, add the 'active' class
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});