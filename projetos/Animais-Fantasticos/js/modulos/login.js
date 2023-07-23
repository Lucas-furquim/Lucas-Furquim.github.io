export default function login() {
  const login = document.querySelector("[data-login]");
  const entrar = document.querySelector(".container-login");
  const fechar = document.querySelector(".fechar");
  const corpo = document.documentElement;

  login.addEventListener("click", (e) => {
    e.preventDefault();
    entrar.classList.add("ativo");
  });

  fechar.addEventListener("click", (e) => {
    e.preventDefault();
    entrar.classList.remove("ativo");
  });

  corpo.addEventListener("click", (e) => {
    if (e.target === entrar) {
      entrar.classList.remove("ativo");
    }
  });
}
