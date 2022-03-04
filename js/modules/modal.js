export default function initModal () {
  const openButton = document.querySelector('[data-modal="open"]');
  const closeButton = document.querySelector('[data-modal="close"]');
  const container = document.querySelector('[data-modal="container"]');
  
  if(openButton && closeButton && container) {
  
    function toggleModal (event) {
      event.preventDefault();
      container.classList.toggle('active');
    }
    
    function clickOutModal (event) {
      if(event.target === this) {
        toggleModal(event);
      }
    }

    window.addEventListener('scroll', () => {
      container.classList.remove('active');
    })
    
    openButton.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    container.addEventListener('click', clickOutModal);
  }
}

