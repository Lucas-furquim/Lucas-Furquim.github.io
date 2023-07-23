export default function imagens() {
  const imgs = document.querySelectorAll(".js-tabmenu li");
  const desc = document.querySelectorAll("[data-desc='desc'] section");

  if (imgs.length && desc.length) {
    function ativa(index) {
      desc.forEach((item) => {
        item.classList.remove("ativo");
      });
      desc[index].classList.add("ativo");
    }
    ativa(0);

    imgs.forEach((item, index) => {
      item.addEventListener("click", () => {
        ativa(index);
      });
    });
  }
}
