export default class BtnHome {
  constructor(btn, lista, titulo) {
    this.btn = document.querySelector(btn);
    this.lista = document.querySelector(lista);
    this.titulo = document.querySelector(titulo);
    this.realBtn = document.querySelector(".btn-mobile");
  }

  eventoClique() {
    this.btn.addEventListener("click", () => {
      this.addAtivo();
    });
  }

  addAtivo() {
    this.lista.classList.toggle("ativo");
    this.titulo.classList.toggle("ativo");
    this.titulo.classList.contains("ativo")
      ? this.btn.setAttribute("aria-hidden", "false")
      : this.btn.setAttribute("aria-hidden", "true");
    this.titulo.classList.contains("ativo")
      ? this.realBtn.setAttribute("aria-expanded", "true")
      : this.realBtn.setAttribute("aria-expanded", "false");
  }

  init() {
    this.eventoClique();
  }
}
