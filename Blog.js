window.addEventListener('load', () => {
  const posts = document.querySelectorAll('.post');

  anime({
    targets: posts,
    opacity: [0, 1],
    translateY: [30, 0],
    delay: anime.stagger(200),
    duration: 1000,
    easing: 'easeOutExpo'
  });
});
