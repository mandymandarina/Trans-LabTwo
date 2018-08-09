// seccion login y menú
const btnLogin = document.getElementById('botonLogin');
const paperLogin = document.getElementById('sectionLogin');
const paperMenu = document.getElementById('seccionMenu')

btnLogin.addEventListener('click', () => {
  paperMenu.style.display = 'block';
  paperLogin.style.display = 'none';  
});

// seccion menu y perfil

const btnPerfil = document.getElementById('threebPerfil');
const paperBotons = document.getElementById('botonesMenu');
const paperPerfil = document.getElementById('seccionPerfil')

btnPerfil.addEventListener('click', () => {
  paperPerfil.style.display = 'block';
  paperBotons.style.display = 'none';  
});

// seccion menu y ver saldo

const btnVerSaldo = document.getElementById('firstbSaldo');
const paperBot = document.getElementById('botonesMenu');
const paperCard = document.getElementById('seccionCard')

btnVerSaldo.addEventListener('click', () => {
  paperCard.style.display = 'block';
  paperBot.style.display = 'none';  
});

// ir a menu desde perfil
const arrowHome = document.getElementById('iconHome');
const paperHome = document.getElementById('botonesMenu');
const papeCard = document.getElementById('seccionCard')

arrowHome.addEventListener('click', () => {  
  papeCard.style.display = 'none'; 
  paperHome.style.display = 'block';
});

// ir a menu desde ver saldo
const pesoHome = document.getElementById('iconhome');
const papeHome = document.getElementById('botonesMenu');
const papePerfil = document.getElementById('seccionPerfil')

arrowHome.addEventListener('click', () => {  
  papePerfil.style.display = 'none'; 
  papeHome.style.display = 'block';
});

// ir a seccion calcular tarifa
const btnTarifa = document.getElementById('secondbTarifa');
const paperTarifa = document.getElementById('seccionTarifa');
const paperBtn = document.getElementById('botonesMenu')

btnTarifa.addEventListener('click', () => {  
  paperBtn.style.display = 'none'; 
  paperTarifa.style.display = 'block';
});

// de tarifa a menu
const btnHomer = document.getElementById('iconHome');
const papeHomer = document.getElementById('botonesMenu');
const papeTarifa = document.getElementById('seccionTarifa')

btnHomer.addEventListener('click', () => {  
  papeTarifa.style.display = 'none'; 
  papeHomer.style.display = 'block';
});

// del menu a ver saldo
const btnPeso = document.getElementById('iconPeso');
const botonesSec = document.getElementById('botonesMenu');
const paperVerSaldo = document.getElementById('seccionCard')

btnPeso.addEventListener('click', () => {  
  botonesSec.style.display = 'none'; 
  paperVerSaldo.style.display = 'block';
});

// del menu a calcular 
const btnCalcu = document.getElementById('iconCalcu');
const botonesSecu = document.getElementById('botonesMenu');
const paperCalcuTar = document.getElementById('seccionTarifa')

btnCalcu.addEventListener('click', () => {  
  botonesSecu.style.display = 'none'; 
  paperCalcuTar.style.display = 'block';
});

// del menu a perfil
const iconPerBtn = document.getElementById('iconPerfil');
const botonesSeco = document.getElementById('botonesMenu');
const secPerPa = document.getElementById('seccionPerfil')
iconPerBtn.addEventListener('click', () => {  
  botonesSeco.style.display = 'none'; 
  secPerPa.style.display = 'block';
});

// de login a registro
const btnReg = document.getElementById('reg');
const sctLog = document.getElementById('sectionLogin');
const sctReg = document.getElementById('registerSec');

btnReg.addEventListener('click', () => {  
  sctLog.style.display = 'none'; 
  sctReg.style.display = 'block';
});

// de registro a menu 
const btnRegi = document.getElementById('register');
const sctRegi = document.getElementById('registerSec');
const sctMenu = document.getElementById('seccionMenu');

btnRegi.addEventListener('click', () => {  
  sctRegi.style.display = 'none'; 
  sctMenu.style.display = 'block';
});

// de login a preguntas

const btnQuestHoja = document.getElementById('fourbHoja');
const secBtnHoja = document.getElementById('botonesMenu');
const sctMenuQuest = document.getElementById('sectionQuest');

btnQuestHoja.addEventListener('click', () => {  
  secBtnHoja.style.display = 'none'; 
  sctMenuQuest.style.display = 'block';
});



