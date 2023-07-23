export default function endereco() {
  const mapa = document.querySelector(".contato-mapa");
  const div = document.createElement("div");
  const corpo = document.querySelector("body");
  div.innerHTML = "<p>Proximo ao estacionamento</p>";

  mapa.addEventListener("mouseenter", (e) => {
    div.classList.add("lugar");
    corpo.appendChild(div);
  });
  mapa.addEventListener("mouseleave", (e) => {
    div.classList.remove("lugar");
    corpo.removeChild(div);
  });

  window.addEventListener("mousemove", (e) => {
    div.style.top = e.pageY + 15 + "px";
    div.style.left = e.pageX + 15 + "px";
  });
}
