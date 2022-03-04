export default function initColorLink () {
  const links = document.querySelectorAll('[data-nav="link"');
  
  function colorLink () {
    links.forEach((link) => {
      link.classList.remove('active');
      this.classList.add('active');
    })
  }
  
  links.forEach((link) => {
    link.addEventListener('click', colorLink);
  })
}
