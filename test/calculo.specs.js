const assert = require('chai').assert;
global.window = {};
require('../src/js/data');

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