// links do menu
const nav = document.querySelectorAll(".header-menu a");

function barra(link) {
  const pag = link.href;
  const url = location.href;
  if (url.includes(pag)) {
    link.classList.add("ativo");
  }
}

nav.forEach(barra);

// orçamento

const parametros = new URLSearchParams(location.search);

function escolha(produto) {
  const elemento = document.getElementById(produto);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}

parametros.forEach(escolha);

// perguntas frequentes

const pergunta = document.querySelectorAll(".perguntas button");

function desce(event) {
  const abriu = event.currentTarget;
  const controls = abriu.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");
  const ativar = resposta.classList.contains("ativo");
  abriu.setAttribute("aria-expanded", ativar);
  if (resposta) console.log(resposta);
}

function abrir(abriu) {
  abriu.addEventListener("click", desce);
}

pergunta.forEach(abrir);

// galeria imagens bicicletas

const galeria = document.querySelectorAll(".bicicletas-conteudo img");
const fotos = document.querySelector(".bicicletas-conteudo");

function muda(item) {
  item.addEventListener("click", mudaFoto);
}

function mudaFoto(event) {
  const seleciona = event.currentTarget;
  const media = matchMedia("(min-width: 850px)").matches;
  if (media) {
    fotos.prepend(seleciona);
  } else {
    console.log("Não muda mais");
  }
}

galeria.forEach(muda);

// formulario

const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<h1 class'font-r-m' style='grid-column:1/-1; background: #f7f7f7;'>Mensagem enviada com sucesso</h1>";
  } else {
    formulario.innerHTML =
      "<h1 class'font-r-m' style='background: #e7e7e7; grid-column: 1/-1; padding: 10px; border-radius: 5px;'>Formulario <span style='color: red;'>não enviado</span> tente novamente</h1>";
  }
}

function ativaform(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "enviando...";
  console.log("desativou");

  const data = new FormData(formulario);
  console.log(data.get("nome"));
  console.log(data.get("telefone"));

  fetch("./enviar-teste.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

if (formulario) {
  formulario.addEventListener("submit", ativaform);
}

// animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
