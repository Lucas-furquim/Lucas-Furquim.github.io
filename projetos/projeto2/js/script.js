import BtnHome from "./modulos/BtnHome.js";
import ImgTela from "./modulos/ImgTela.js";
import Scroll from "./modulos/Scroll.js";

Scroll();
const btnHome = new BtnHome(".fa-bars", ".nav-about-btn", "#titansDigital");
btnHome.init();

const imgTela = new ImgTela(".bg-main");
imgTela.init();
