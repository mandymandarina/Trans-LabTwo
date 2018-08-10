const assert = require('chai').assert;
global.window = global;
require('../src/js/modelo');

describe('Validar calculo de saldo menos tarifa', () => {  
    it('debería exponer función calculationTaf', () => {
      assert.isFunction(calculationTaf);
    });
  });
  
  describe('Validar calculo de saldo', () => {
    it('Debería exponer funcion cashCardAp', () => {
      assert.isFunction(cashCardAp);
    });
  });
  describe('Validar login', () => {
    it('Debería exponer funcion login', () => {
      assert.isFunction(login);
    });
  });

  describe('calculationTaf', () => {
    it('Debería retornar "$320" para un saldo de "$1000" en tarifa media"', () => {
      assert.equal(calculationTaf(1000 - 680 === 320), true);
    });

    it('Debería retornar "$370" para un saldo de "$1000" en tarifa baja', () => {
      assert.equal(calculationTaf(1000 - 630 === 370), true);
    });
  });

