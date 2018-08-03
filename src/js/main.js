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

// Login con mail y password

btnLogin.addEventListener('click', () => {
  const email = document.getElementById('inputEmail').value;
  const password = document.getElementById('inputPassword').value;
  firebase.auth().signInWithEmailAndPassword(email, password)

    .catch((error) => {
      const inputEmailUser = document.getElementById('inputEmail');
      inputEmailUser.value = '';
      const inputPasswordUser = document.getElementById('inputPassword');
      inputPasswordUser.value = '';
      const alertLogin = document.getElementById('alertPassword');
      const msjErrorFirebase = error.message;
      if (msjErrorFirebase === 'The email address is badly formatted.') {
        alertLogin.innerHTML = '<div class="alert alert-danger alertConteiner" role="alert"> Error: Por favor ingresa un correo eléctronico válido</div>';
      } else if (msjErrorFirebase === 'The password is invalid or the user does not have a password.') {
        alertLogin.innerHTML = '<div class="alert alert-danger alertConteiner" role="alert"> Error: Password Invalido, Ingrese un password de 6 o más caracteres </div>';
      }
      console.log('Error de Firebase > ' + error.code);
      console.log('Error de Firebase > mensaje' + error.message);
    });
}); 
// fin evento click del boton login normal
