export default function numeros() {
  const numero = document.querySelectorAll("[data-numero]");
  const secNumero = document.querySelector("[data-secNumero]");

  let start = 0;
  function aumentaNumero() {
    numero.forEach((item) => {
      const valor = +item.innerText;
      let intervalo = setInterval(() => {
        let divide = Math.floor(valor / 100);
        start = start + divide;
        item.innerText = start;
        if (start > valor) {
          item.innerText = item.innerHTML;
          clearInterval(intervalo);
        }
      }, 45 * Math.random());
    });
  }

  function mudou(mutacao) {
    const veja = mutacao[0].target.classList.contains("ativo");
    if (veja) {
      muda.disconnect();
      aumentaNumero();
    }
  }

  const muda = new MutationObserver(mudou);

  muda.observe(secNumero, { attributes: true });
}
