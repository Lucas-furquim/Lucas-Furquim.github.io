export default function horario() {
  const funcionamento = document.querySelector(".contato-lista .horario");
  const dia = new Date().getDay();
  const hora = new Date().getHours();

  if (dia >= 1 && dia <= 5 && hora >= 8 && hora < 18) {
    funcionamento.classList.add("ativo");
  } else {
    funcionamento.classList.remove("ativo");
  }
}
