export default function initScroolSmooth () {
  
  const link = document.querySelector('[data-menu="smooth"] a[href^="#"]');
  
  function anchorActive (event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const home = document.querySelector(href);
  
    home.scrollIntoView({
      behavior:'smooth',
      block:'start',
    })
  }
  
  link.addEventListener('click', anchorActive);
}
