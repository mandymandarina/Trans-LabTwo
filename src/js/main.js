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
