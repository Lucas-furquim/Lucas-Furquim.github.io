export default function dropMenu() {
  function ativaSobre() {
    const dataSobre = document.querySelector("[data-sobre]");
    const sobre = document.querySelector("[data-sobre] a");
    const drop = document.querySelector("[data-sobre] .mais");
    const corpo = document.documentElement;

    function desce(e) {
      e.preventDefault();
      drop.classList.toggle("ativo");
      dataSobre.classList.toggle("ativo");
    }

    corpo.addEventListener("click", (e) => {
      if (e.target != sobre) {
        drop.classList.remove("ativo");
      }
    });

    sobre.addEventListener("click", desce);
  }
  ativaSobre();

  const btn = document.querySelector("[data-drop]");
  const drop = document.querySelector(".js-menu");
  const corpo = document.documentElement;
  const dropVe = drop.getAttribute("aria-expanded");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    drop.classList.toggle("ativo");
  });

  corpo.addEventListener("click", (e) => {
    if (e.target === btn) {
      btn.classList.toggle("ativo");
      if (btn.classList.contains("ativo")) {
        drop.setAttribute("aria-expanded", "true");
      } else {
        drop.setAttribute("aria-expanded", "false");
      }
    } else {
      btn.classList.remove("ativo");
      drop.classList.remove("ativo");
      drop.setAttribute("aria-expanded", "false");
    }
  });
}
