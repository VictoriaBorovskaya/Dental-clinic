
let isOpen = false;

function openMenu() {

    const mobileMenu = document.getElementById('mobile-menu');
    const button = document.getElementById('navigation-button');

    if (isOpen) {
        mobileMenu.style.display = 'none'; // закрыли меню
        button.innerHTML = '<img src="file/menu-icon.png" class="menu-icon"/>'

        isOpen = false;

    } else {
        mobileMenu.style.display = 'flex';
        button.innerHTML = '<img src="file/icons-close.png" class="menu-icon"/>'

        isOpen = true;
    }

}