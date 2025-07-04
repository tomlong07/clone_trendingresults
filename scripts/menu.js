document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon.Header_menu-icon');
    const container = document.getElementById('Menu_menu_container');
    const menu = document.getElementById('Menu_menu');
    const overlay = document.getElementById('Menu_menu-overlay');

    const headerLogos = document.querySelectorAll('.Header_logo');

    headerLogos.forEach(function (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function () {
            window.location.href = '/clone_trendingresults/';
        });
    });

    function openMenu() {
        overlay.style.display = 'block';
        container.classList.remove('Menu_menu-hidden');
    }

    function closeMenu() {
        overlay.style.display = 'none';
        container.classList.add('Menu_menu-hidden');
    }

    function isMenuOpen() {
        return !container.classList.contains('Menu_menu-hidden');
    }

    if (menuIcon && container && menu && overlay) {
        menuIcon.addEventListener('click', function (e) {
            e.stopPropagation();
            if (isMenuOpen()) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        document.addEventListener('click', function (e) {
            const isClickInsideMenu = menu.contains(e.target) || menuIcon.contains(e.target);
            if (!isClickInsideMenu && isMenuOpen()) {
                closeMenu();
            }
        });
    } else {
    }
});
