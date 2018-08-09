/*
const assert = require('chai').assert;
global.window = global;
require('../src/js/data'); //Sólo enlaza el archivo, parecido al script de html

describe('Validar contreseña', ()=>{ //Describe lo que habrá dentro de cada función
    describe('Debería verificar formas correctas de la contraseña', ()=>{
        it('Debería verificar máximo 8 caracteres en la contraseña', ()=>{ //Caso de prueba
            assert.equal(validatePass("1234"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro  2
            assert.equal(validatePass("12345678"), true);
            assert.equal(validatePass("123456789"), false);
        });
        it('Debería verificar si existen solo números en la contraseña', ()=>{
            assert.equal(validateEmail("Qwrt%124"), false);
            assert.equal(validateEmail("23456789"), true);
            assert.equal(validateEmail("ASDFGHJK"), false);
        });
    });
});

describe('Validar Email', ()=>{ 
    describe('Debería verificar formas correctas del Email', ()=>{
        it('Debería verificar que contenga un @', ()=>{ 
            assert.equal(validatePass("hola@hola.com"), true); 
            assert.equal(validatePass("hola.com"), false);
            assert.equal(validatePass("hola@@hola.com"), false);
        });
        it('Debería el correo tener un arroba antes del dominio', ()=>{
            assert.equal(validateEmail(".hola@hola"), false);
            assert.equal(validateEmail("holan@hola.com"), true);
        });
    });
});

describe('Validar calculo de saldo', () => {
    describe('Deberia usar funcion calculationTaf', () => {
      it('debería ser una función', () => {
        assert.equal(typeof calculationTaf, 'function');
      });
      it('Debería retornar "$240" para un saldo de "$1000" en tarifa alta', () => {
        assert.equal(calculationTaf(1000, 760), 240);
      });
      it('Debería retornar "$320" para un saldo de "$1000" en tarifa media"', () => {
        assert.equal(calculationTaf(1000, 689), 320);
      });
      it('Debería retornar "$370" para un saldo de "$1000" en tarifa baja', () => {
        assert.equal(calculationTaf(1000, 630), 370);
      });
    });
  });
  */