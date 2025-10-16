
const svg = document.getElementById('triangles');
const numTriangles = 20;
const sunTriangles = [];
const moonTriangles = [];

const radius = 250; 
for (let i = 0; i < numTriangles; i++) {
  const angle = (i / numTriangles) * Math.PI * 2;
  const x1 = Math.cos(angle) * radius;
  const y1 = Math.sin(angle) * radius;
  const x2 = Math.cos(angle + 0.15) * (radius + 70);
  const y2 = Math.sin(angle + 0.15) * (radius + 70);
  const x3 = 0, y3 = 0;
  const points = `${x1},${y1} ${x2},${y2} ${x3},${y3}`;
  sunTriangles.push(points);


  const moonX = Math.cos(angle) * (radius / 1.3) - 80;
  const moonY = Math.sin(angle) * (radius / 1.3);
  const moonX2 = Math.cos(angle + 0.1) * (radius / 2) - 60;
  const moonY2 = Math.sin(angle + 0.1) * (radius / 2);
  const moonPoints = `${moonX},${moonY} ${moonX2},${moonY2} 0,0`;
  moonTriangles.push(moonPoints);

  const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  poly.setAttribute('points', points);
  poly.setAttribute('fill', `hsl(${i * 18}, 80%, 55%)`);
  poly.setAttribute('stroke', 'rgba(0,0,0,0.2)');
  poly.setAttribute('stroke-width', '1');
  svg.appendChild(poly);
}
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


const toggle = document.getElementById('darkModeToggle');
const body = document.body;

toggle.addEventListener('click', () => {
  const polys = document.querySelectorAll('polygon');
  const isDark = body.classList.toggle('dark-mode');

  polys.forEach((poly, i) => {
    anime({
      targets: poly,
      points: [{ value: isDark ? moonTriangles[i] : sunTriangles[i] }],
      fill: isDark
        ? `hsl(${200 + i * 5}, 20%, 70%)`
        : `hsl(${i * 18}, 80%, 55%)`,
      rotate: isDark ? i * -8 : i * 18,
      duration: 2000,
      easing: 'easeInOutCubic',
      delay: i * 30
    });
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

const pastelColors = [
  ['#ffd7a8', '#fff5b7'],
  ['#ffb3c1', '#d7faff'],
  ['#d7faff', '#ffe5a3'],
  ['#ffe5a3', '#ffc1e3']
];

let index = 0;
function changeGradient() {
  const nextIndex = (index + 1) % pastelColors.length;
  anime({
    targets: body,
    background: [
      `linear-gradient(120deg, ${pastelColors[index][0]}, ${pastelColors[index][1]})`,
      `linear-gradient(120deg, ${pastelColors[nextIndex][0]}, ${pastelColors[nextIndex][1]})`
    ],
    duration: 10000,
    easing: 'linear',
    complete: () => {
      index = nextIndex;
      if (!body.classList.contains('dark-mode')) { 
        changeGradient();
      }
    }
  });
}

changeGradient