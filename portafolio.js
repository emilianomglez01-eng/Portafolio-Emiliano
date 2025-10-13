
anime({
  targets: '.petal path',
  scale: [0, 1],
  opacity: [0, 1],
  delay: anime.stagger(200),
  duration: 1200,
  easing: 'easeOutElastic(1, .7)'
});

anime({
  targets: '.center-photo',
  scale: [0, 1],
  duration: 1500,
  easing: 'easeOutExpo'
});


anime({
  targets: '.lotus',
  rotate: '360deg',
  duration: 60000,
  easing: 'linear',
  loop: true
});


document.querySelectorAll('.petal').forEach(petal => {
  petal.addEventListener('click', () => {
    const link = petal.dataset.link;
    if (link) window.open(link, '_blank');
  });
});


anime({
  targets: 'header h1',
  opacity: [0, 1],      
  translateY: [-20, 0], 
  delay: anime.stagger(150), 
  duration: 5000,
  easing: 'easeOutExpo'
});

anime({
  targets: 'nav a',
  opacity: [0, 1],      
  translateY: [-20, 0],  
  delay: anime.stagger(150), 
  duration: 5000,
  easing: 'easeOutExpo'
});

anime({
  targets: '.lotus-text h2',
  opacity: [0, 1],
  translateY: [-30, 0],
  duration: 2000,
  easing: 'easeOutExpo'
});

anime({
  targets: '.lotus-text p',
  opacity: [0, 1],
  translateY: [-20, 0],
  delay: 500,
  duration: 2000,
  easing: 'easeOutExpo'
});

