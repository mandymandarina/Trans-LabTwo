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

function registerLog(){
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
  }
};

firebase.database().ref('Cards') 
  .limitToLast(4)
  .on('child_added', (newMessage) => {  
    cardSee.innerHTML += `<div class="row">${newMessage.val().Number}</div>`;
  });

  firebase.database().ref('users') 
  .limitToFirst(1)
  .on('child_added', (newMessage) => {  
    agEmail.innerHTML += `<div class="row">${newMessage.val().EmailUser}</div>`;
  });

  const btnVer= document.getElementById('botonVer')
  btnVer.addEventListener('click', (event) => {    
    btnVer.value = '';
    const id = document.getElementById('inputTarjeta');
      fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=02139318`)
      .then(response => response.json())//si la respuesta es correcta va a dar la informacion como una promesa
      .then(data => {
        console.log(data);
        renderInfo(data);
      })    
  });

  const renderInfo = (data) => {
    agSaldo.innerHTML = data.saldoTarjeta;   
  }

  // funcion lista tarjetas en seccion ver saldo
  firebase.database().ref('Cards') 
  .limitToLast(2)
  .on('child_added', (newMessage) => { 
    const lista = document.getElementById("listaTarjetas");
    let optionTarjetas = document.createElement('option');
    optionTarjetas.text = newMessage.val().Number;
    lista.add(optionTarjetas);    
  });

  // funcion lista de tarjetas en seccion calcular tarifa
  firebase.database().ref('Cards') 
  .limitToLast(2)
  .on('child_added', (newMessage) => { 
    const list = document.getElementById("listaTarjeta");
    let optionTarjeta = document.createElement('option');
    optionTarjeta.text = newMessage.val().Number;
    list.add(optionTarjeta);    
  });

  // funcion lista de tarifas
  const listaTaf = document.getElementById("listaTarifa");    
  fetch('data/tarifas.json')
    .then(response => response.json())
    .then(data => {
      window.datos = data;
      console.log(data);
      data.forEach(element => {
        let optionTarifa = document.createElement('option');
        optionTarifa.text = element.tarifa;
        listaTaf.add(optionTarifa);      
      });   
    });

    /*
    let tarifaVer = document.getElementById('verTrifa');
    const btnSelect = document.getElementById('option');
    fetch('data/tarifas.json')
    .then(response => response.json())
    .then(data => {
    data.forEach(element => {
    btnSelect.addEventListener('click', ()=>{
      tarifaVer.innerHTML = element.costo;
    })    
  });
});
*/

  
