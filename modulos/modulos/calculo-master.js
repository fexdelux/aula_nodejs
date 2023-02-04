const Calculos = require('./calculos');

class CalculoMaster extends Calculos{
    multiplicacao(valor1, valor2) {
        return valor1 * valor2;
    }

    divisao(valor1, valor2) {
        return valor1 / valor2;
    }
    
}

module.exports = CalculoMaster;