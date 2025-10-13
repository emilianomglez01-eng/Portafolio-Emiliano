
const acercaSection = document.querySelector('.acerca-seccion');
const iconos = document.querySelectorAll('.conocimiento');

function animateAcerca() {
  const sectionTop = acercaSection.getBoundingClientRect().top;
  const trigger = window.innerHeight - 100;

  if (sectionTop < trigger) {
    
    anime({
      targets: '.acerca-seccion',
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1500,
      easing: 'easeOutExpo'
    });


    anime({
      targets: '.conocimiento',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(150),
      duration: 1000,
      easing: 'easeOutExpo'
    });


    window.removeEventListener('scroll', animateAcerca);
  }
}

window.addEventListener('load', animateAcerca);
