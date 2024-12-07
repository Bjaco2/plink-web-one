document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu when clicking the button
    mobileMenuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        updateMenuButtonStyle();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navLinks.classList.remove('active');
            updateMenuButtonStyle();
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            updateMenuButtonStyle();
        });
    });

    // Update menu button appearance
    function updateMenuButtonStyle() {
        const isActive = navLinks.classList.contains('active');
        mobileMenuButton.innerHTML = isActive ? '×' : '☰';
        mobileMenuButton.style.transform = isActive ? 'rotate(90deg)' : 'none';
    }

    // Navbar transparency on scroll
    let prevScrollPos = window.pageYOffset;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset;
        
        // Add more transparency when scrolling down
        if (currentScrollPos > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            navbar.style.backdropFilter = 'blur(10px)';
        }

        prevScrollPos = currentScrollPos;
    });
});
