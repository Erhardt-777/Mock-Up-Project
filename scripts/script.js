const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.topnav_menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});