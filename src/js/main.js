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
const btnHomer = document.getElementById('iconhome');
const papeHomer = document.getElementById('botonesMenu');
const papeTarifa = document.getElementById('seccionTarifa')

btnHomer.addEventListener('click', () => {  
  papeTarifa.style.display = 'none'; 
  papeHomer.style.display = 'block';
});


