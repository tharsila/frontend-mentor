export default function initMenuMobile () {
  const menuHamburger = document.querySelector('[data-menu="hamburger"]');
  const navMenu = document.querySelector('[data-menu="navbar"]');
  
  function showMenu () {
    menuHamburger.classList.toggle('fa-times');
    navMenu.classList.toggle('active');
  }

  window.addEventListener('scroll', () => {
  menuHamburger.classList.remove('fa-times');
  navMenu.classList.remove('active');
  })
  
  menuHamburger.addEventListener('click', showMenu);
  
}
