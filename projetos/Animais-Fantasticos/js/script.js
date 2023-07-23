import imagens from "./modulos/imagens.js";
import Accordion from "./modulos/accordion.js";
import anima from "./modulos/anima.js";
import desc from "./modulos/anima-desc.js";
import endereco from "./modulos/endereco.js";
import horario from "./modulos/horario.js";
import dropMenu from "./modulos/dropMenu.js";
import numeros from "./modulos/numeros.js";
import login from "./modulos/login.js";
import Slide from "./modulos/slide.js";

imagens();
Accordion();
anima();
desc();
endereco();
horario();
dropMenu();
numeros();
login();

window.addEventListener("load", () => {
  const desliza = new Slide(".slide", ".container", ".btnNav");
  desliza.init();
  desliza.addControl(".customControls");
});
