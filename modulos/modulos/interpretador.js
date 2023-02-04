const CalculoMaster = require('./calculo-master');
class Interpretador {

    constructor(expressao) {
        this.expressao = expressao;
        this.valor1 = 0;
        this.valor2 = 0;
        this.identificador = [
            {sinal: '+', metodo: 'soma'},
            {sinal: '-', metodo: 'subtracao'},
            {sinal: 'x', metodo: 'multiplicacao'},
            {sinal: '/', metodo: 'divisao'}
        ];
        this.metodo = null;
        this.identificarModulo();
    }

    resultado(){
        let calc = new CalculoMaster();
        return  calc[this.metodo](this.valor1, this.valor2);
    }
    preencherValores(identificador) {
        let valores = this.expressao.split(identificador);
        this.valor1 = parseInt(valores[0]);
        this.valor2 = parseInt(valores[1]);
    }

    identificarModulo() {
        this.identificador.forEach( (value) => {
            if(this.expressao.indexOf(value.sinal) > -1) {
                this.metodo = value.metodo;
                this.preencherValores(value.sinal);
            }
        })
    }
}

module.exports = Interpretador;