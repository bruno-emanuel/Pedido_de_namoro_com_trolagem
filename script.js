const sim = document.getElementById("sim");
const nao = document.getElementById("nao");
const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador");
const reiniciar = document.getElementById("reiniciar");
const card = document.querySelector(".card");

let tentativas = 0;

function fugirDoMouse() {
  tentativas++;
  contador.textContent = `Tentativas no Sim: ${tentativas}`;

  const cardRect = card.getBoundingClientRect();
  const btnRect = sim.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width - 20;
  const maxY = 135;

  const novoX = Math.max(10, Math.random() * maxX);
  const novoY = Math.max(8, Math.random() * maxY);

  sim.style.left = `${novoX}px`;
  sim.style.top = `${novoY}px`;

  if (tentativas >= 5) {
    sim.textContent = "Desiste kkkkk 😭";
  }

  if (tentativas >= 10) {
    sim.textContent = "NUNCA! 🤣";
  }
}

sim.addEventListener("mouseenter", fugirDoMouse);
sim.addEventListener("click", fugirDoMouse);
sim.addEventListener("touchstart", (event) => {
  event.preventDefault();
  fugirDoMouse();
});

nao.addEventListener("click", () => {
  mensagem.classList.remove("hidden");
  contador.textContent = "Você caiu na trolagem oficial 😂";
});

reiniciar.addEventListener("click", () => {
  tentativas = 0;
  contador.textContent = "Tentativas no Sim: 0";
  sim.textContent = "Sim 😍";
  sim.style.left = "60px";
  sim.style.top = "32px";
  mensagem.classList.add("hidden");
});
