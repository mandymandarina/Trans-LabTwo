// seccion login y menú
const btnLogin = document.getElementById('botonLogin');
const paperLogin = document.getElementById('sectionLogin');
const paperMenu = document.getElementById('seccionMenu')

btnLogin.addEventListener('click', () => {
  paperMenu.style.display = 'block';
  paperLogin.style.display = 'none';  
});
