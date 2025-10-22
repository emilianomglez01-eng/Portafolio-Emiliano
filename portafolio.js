const svg = document.getElementById('triangles');
const numTriangles = 20;

// Tonos azul hielo / cristalinos
for (let i = 0; i < numTriangles; i++) {
  const angle = (i / numTriangles) * Math.PI * 2;
  const radius = 250;
  const x1 = Math.cos(angle) * radius;
  const y1 = Math.sin(angle) * radius;
  const x2 = Math.cos(angle + 0.15) * (radius + 70);
  const y2 = Math.sin(angle + 0.15) * (radius + 70);
  const points = `${x1},${y1} ${x2},${y2} 0,0`;

  const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  poly.setAttribute('points', points);

  // ❄️ Colores árticos: azul hielo con transparencia
  const hue = 195 + (i * 6) % 20; // azules fríos
  const lightness = 75 + (i % 5) * 3;
  poly.setAttribute('fill', `hsla(${hue}, 60%, ${lightness}%, 0.75)`); 
  poly.setAttribute('stroke', 'rgba(255, 255, 255, 0.3)');
  poly.setAttribute('stroke-width', '1');
  svg.appendChild(poly);
}

// Animación inicial
anime({
  targets: 'polygon',
  scale: [0, 1],
  rotate: anime.stagger(18, { start: 0 }),
  duration: 1500,
  delay: anime.stagger(80),
  easing: 'easeOutElastic(1, .7)'
});

anime({
  targets: '#geometricSun',
  rotate: 360,
  duration: 30000,
  easing: 'linear',
  loop: true
});

// Toggle modo oscuro
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

toggle.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-mode');
  const polys = document.querySelectorAll('polygon');

  polys.forEach((poly, i) => {
    anime({
      targets: poly,
      fill: isDark
        ? `hsla(0, 0%, ${90 - i * 1.5}%, 1)` // blanco hielo en modo oscuro
        : `hsla(${195 + (i * 6) % 20}, 60%, ${75 + (i % 5) * 3}%, 0.75)`, // azul cristal en modo claro
      duration: 1200,
      easing: 'easeInOutCubic',
      delay: i * 25
    });
  });

  anime({
    targets: '#geometricSun',
    rotate: '+=360',
    duration: 2500,
    easing: 'easeInOutQuad'
  });
});

anime({
  targets: '.lotus-text',
  opacity: [0, 1],
  scale: [0.8, 1],
  duration: 2000,
  easing: 'easeOutExpo',
  delay: 1000
});
