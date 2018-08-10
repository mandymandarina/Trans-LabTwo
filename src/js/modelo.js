window.calculationTaf = () => {
  let numTarjeta = numeroTarjetaTwo.value;
  let numListTarjeta = listaTarjeta.value;
  fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numTarjeta || numListTarjeta}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      infoData = data;
      console.log(infoData);

      // calculo de saldo menos tarifa
      const comando = /(\d+)/g;
      const saldoTa = infoData.saldoTarjeta.match(comando);     
      const saldoTar = parseInt(saldoTa[0] + saldoTa[1]);
      const selectorSal = listaTarifa.value;      
      const totalCalculo = saldoTar - selectorSal;
      verSalDes.innerHTML = `<div class="costototal">SALDO FINAL</div>$ `+totalCalculo;           
    })
    .catch(error => {
      console.error('respuesta incorrecta');
      console.error("ERROR > " + error.stack);
    });       
    
  };

  window.cashCardAp = () => {
    let id = document.getElementById('inputTarjeta').value;
    console.log(id);
    fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${id}`)
      .then(response => response.json())//si la respuesta es correcta va a dar la informacion como una promesa
      .then(data => {
        console.log(data);
        renderInfo(data);
      });
  }; 

  window.login = () => {
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
  };

  window.calculationTaf = (resultResta) => {
     const cost = 680;
     const saldoBip = 1000;
     if (saldoBip - cost === 320){
       return true;
     }       
  };

  