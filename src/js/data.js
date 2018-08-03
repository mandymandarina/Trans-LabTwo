window.onload = ()=>{
  firebase.auth().onAuthStateChanged((user)=>{
      if(user){
          //Si estamos logueados
         
          console.log("User > "+JSON.stringify(user));
          const userLogued = firebase.auth().currentUser;
          const userData = userLogued.email; // acá sacamos el email del usuario logado
          let userId = userLogued.uid;
          // llamamos a la coleccion que tiene los usuarios
          const allUsersRegister = firebase.database().ref('users/');
          // revisamos la coleccion en ese momento
          allUsersRegister.once('value', function(snapshot) {            
            let result;
            if (result) {
              console.log('usuario ya añadido anteriormente ' + userId);
            } else {
              console.log('añadiendo usuario  ' + userId);
              const newUserKey = firebase.database().ref().child('users').push().key;
              firebase.database().ref(`users/${newUserKey}`).set({
                idUser: userLogued.uid,
                NameUser: userLogued.displayName,
                EmailUser: userLogued.email
              });
            }   
           
          });
      }else{
          //No estamos logueados
          seccionMenu.style.display = 'none';
          sectionLogin.style.display = 'block';
      }
  });
  
};
function login(){
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;
  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
      .then(()=>{
          console.log("Usuario con login exitoso");
      })
      .catch((error)=>{
          console.log("Error de firebase > "+error.code);
          console.log("Error de firebase, mensaje > "+error.message);
      });
}

function register(){
  const emailValue = email.value;
  const passwordValue = password.value; 
  firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
      .then(()=>{
          console.log("Usuario registrado");
      })
      .catch((error)=>{
          console.log("Error de firebase > "+error.code);
          console.log("Error de firebase, mensaje > "+error.message);
      });
};

function numberCard(){
  const cardText = agCard.value;
  if (cardText === '') {    
    errorNumber.innerHTML = '<div class="alert alert-danger alertConteiner" role="alert" id="errorTxt"> Error: Debes ingresar un numero </div>';
  } else {
    const currentUser = firebase.auth().currentUser;
    const cardText = agCard.value;
    const newMessageKey = firebase.database().ref().child('Cards').push().key;
    firebase.database().ref(`Cards/${newMessageKey}`).set({ 
      creator: currentUser.uid,          
      Number: cardText,      
    });
    // Limpiar el textarea
    document.getElementById('agCard').value = '';
    // newFunction();
    // otherFunction();
  }
};