// Seleccionamos los elementos de la tarjeta
const nameEl = document.getElementById("name");
const whoEl = document.getElementById("who");
const whatEl = document.getElementById("what");
const whyEl = document.getElementById("why");
const card = document.getElementById("profileCard");

// Animación inicial al cargar
window.addEventListener("load", () => {
  anime.timeline({ easing: 'easeOutExpo', duration: 800 })
    .add({
      targets: nameEl,
      translateY: [-50, 0],
      opacity: [0, 1]
    })
    .add({
      targets: whoEl,
      translateX: [-100, 0],
      opacity: [0, 1]
    })
    .add({
      targets: whatEl,
      translateX: [100, 0],
      opacity: [0, 1]
    })
    .add({
      targets: whyEl,
      translateY: [50, 0],
      opacity: [0, 1]
    });
});

// Interacción al pasar el mouse sobre la card
card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * 10;

  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
});
