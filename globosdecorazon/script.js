const escena = document.getElementById("escena");
const frase = ["T", "E", "A", "M", "O"];
const btnCarta = document.getElementById("btnCarta");

const posiciones = [
  { x: -70, y: "56%" },
  { x: 70, y: "56%" },
  { x: -120, y: "41%" },
  { x: 0, y: "41%" },
  { x: 120, y: "41%" }
];

frase.forEach((letra, index) => {
  const globo = document.createElement("div");
  globo.classList.add("globo");

  const hilo = document.createElement("div");
  hilo.classList.add("hilo");

  const span = document.createElement("span");
  span.classList.add("letra");
  span.textContent = letra;

  globo.appendChild(hilo);
  globo.appendChild(span);
  escena.appendChild(globo);

  const delay = index * 0.4;
  const { x, y } = posiciones[index];
  globo.style.left = `calc(50% + ${x}px)`;
  globo.style.setProperty("--destino", y);
  globo.style.animationDelay = `${delay}s, ${delay + 3}s`;
});

// Mostrar botón cuando termina de formarse el texto
const ultimoDelay = (frase.length - 1) * 0.4;
const tiempoFormacion = 3000;
setTimeout(() => {
  btnCarta.classList.add("visible");
}, (ultimoDelay * 1000) + tiempoFormacion + 200);

// Carta
const carta = document.getElementById("carta");
const cerrar = document.getElementById("cerrar");

btnCarta.addEventListener("click", () => {
  carta.classList.remove("oculto");
});

cerrar.addEventListener("click", () => {
  carta.classList.add("oculto");
});