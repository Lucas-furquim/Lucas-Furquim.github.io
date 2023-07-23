export default function Accordion() {
  const btn = document.querySelectorAll(".js-faq-lista dt");
  btn[0].classList.add("ativo");
  btn[0].nextElementSibling.classList.add("ativo");

  if (btn.length) {
    btn.forEach((item) => {
      item.addEventListener("click", (e) => {
        const dd = e.currentTarget.nextElementSibling;
        const at = dd.classList.contains("ativo");
        if (at) {
          e.currentTarget.classList.remove("ativo");
          dd.classList.remove("ativo");
        } else {
          e.currentTarget.classList.add("ativo");
          dd.classList.add("ativo");
        }
      });
    });
  }
}
