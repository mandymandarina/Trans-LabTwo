window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //Si estamos logueados

      console.log("User > " + JSON.stringify(user));
      const userLogued = firebase.auth().currentUser;
      const userData = userLogued.email; // acá sacamos el email del usuario logado
      let userId = userLogued.uid;
      // llamamos a la coleccion que tiene los usuarios
      const allUsersRegister = firebase.database().ref('users/');
      // revisamos la coleccion en ese momento
      allUsersRegister.once('value', function (snapshot) {
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
    } else {
      //No estamos logueados
      seccionMenu.style.display = 'none';
      sectionLogin.style.display = 'block';
    }
  });

};
function login() {
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;
  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
      console.log("Usuario con login exitoso");
      if (passwordValue == num || passwordValue.length <= 8  ){          
    }else{
      return alert("La contarseña tiene mas de 8 digitos")      
    }
    })
    .catch((error) => {
      console.log("Error de firebase > " + error.code);
      console.log("Error de firebase, mensaje > " + error.message);
    });
}

function registerLog() {
  const emailValue = email.value;
  const passwordValue = password.value;
  if (passwordValue.length <= 8 ){
    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
      console.log("Usuario registrado");
    })
    .catch((error) => {
      console.log("Error de firebase > " + error.code);
      console.log("Error de firebase, mensaje > " + error.message);
    });        
  }else{
    return alert("La contarseña tiene mas de 8 digitos")      
  }
};


function registerLog() {
  const emailValue = email.value;
  const passwordValue = password.value;
  firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
      console.log("Usuario registrado");
      if (passwordValue.length <= 8 ){          
      }else{
        return alert("La contarseña tiene mas de 8 digitos")      
      }
    })
    .catch((error) => {
      console.log("Error de firebase > " + error.code);
      console.log("Error de firebase, mensaje > " + error.message);
    });
};


function numberCard() {
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
  .limitToLast(3)
  .on('child_added', (newMessage) => {
    cardSee.innerHTML += `<div>${newMessage.val().Number}</div>`;
  });

firebase.database().ref('users')
  .limitToFirst(1)
  .on('child_added', (newMessage) => {
    agEmail.innerHTML += `${newMessage.val().EmailUser}`;
  });

  
// fetch de api para seccion ver saldo
const btnVer = document.getElementById('botonVer')
btnVer.addEventListener('click', (event) => {
  let id = document.getElementById('inputTarjeta').value;
  console.log(id);
  fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${id}`)
    .then(response => response.json())//si la respuesta es correcta va a dar la informacion como una promesa
    .then(data => {
      console.log(data);
      renderInfo(data);
    })
  btnVer.value = '';
});

const renderInfo = (data) => {
  agSaldo.innerHTML =  `<div class="costototal">SALDO</div>$${data.saldoTarjeta}`;
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

// funcion lista de tarifas para que se vean en el select

var select = document.getElementById('listaTarifa');
select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);
    //verTarifa.innerHTML = `${selectedOption.value + ': ' + selectedOption.text}`;
    verTarifa.innerHTML = `<div class="costototal">COSTO PASAJE</div>$${selectedOption.value}`;
    });

/*const listaTaf = document.getElementById("listaTarifa");
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
  

const tarifaVer = document.getElementById('botonTaf');
tarifaVer.addEventListener('click', (event) => {
  let btnSelect = document.getElementById('optionTarjetas');
  console.log(btnSelect);
    fetch('data/tarifas.json')
      .then(response => response.json())
      .then(data => {
        window.datos = data;
        console.log(data);
        renderCost(data);       
    });    
});

    const renderCost = (data) => {
      console.log(data[0].costo);
      const verTar = document.getElementById('verTarifa')
      verTar.innerHTML = data[0].costo;            
    }
    //calculationSal();
  }

// para ver tarifa en seccion calcular saldo en seccion tarifa
function calculationSal(){
  let tarifaCal = data[0].costo;
  console.log(tarifaCal);
  let saldoCal = data.saldoTarjeta;
  console.log(saldoCal);
  }
  
let select = document.getElementById('listaTarifa');
select.addEventListener('change',
  function selectTarifa(){
    let selectedOption = this.options[select.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);
  });
  */

 // llamar tarifa y numero de tarjeta

 function calculationTaf() {
  let numTarjeta = document.getElementById('numeroTarjetaTwo').value;
  let numListTarjeta = document.getElementById('listaTarjeta').value;
  fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numTarjeta || numListTarjeta}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      infoData = data;
      console.log(infoData);

      // calculo de saldo menos tarifa
      const comando = /(\d+)/g;
      const saldoTa = infoData.saldoTarjeta.match(comando)
      const saldoTar = parseInt(saldoTa[0] + saldoTa[1]);
      const selectorSal = document.getElementById('listaTarifa').value;      
      const totalCalculo = saldoTar - selectorSal;
      verSalDes.innerHTML = `<div class="costototal">SALDO FINAL</div>$ `+totalCalculo;           
    })
    .catch(error => {
      console.error('respuesta incorrecta');
      console.error("ERROR > " + error.stack);
    });       
    
}

    
  





