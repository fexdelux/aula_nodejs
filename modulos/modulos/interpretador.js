
class Interpretador {

    constructor(expressao) {
        this.expressao = expressao;
        this.valor1 = 0;
        this.valor2 = 0;
    }

    validarCalculo(identificador) {
        let resultado = this.expressao.indexOf(identificador) > -1;
        let valores = this.expressao.split(identificador);
        this.valor1 = parseInt(valores[0]);
        this.valor2 = parseInt(valores[1]);
        return resultado;
    }
}

module.exports = Interpretador;