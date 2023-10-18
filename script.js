function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/menu_icon_153999.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/x_thin_icon_171414.png";
    }
}