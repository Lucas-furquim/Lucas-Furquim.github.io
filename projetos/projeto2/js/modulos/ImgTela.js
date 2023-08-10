export default class ImgTela {
  constructor(tela) {
    this.tela = document.querySelector(tela);
  }

  telaCheia() {
    this.tela.style.height = window.innerHeight - 64 + "px";
  }

  init() {
    this.telaCheia();
  }
}
