const readline = require('readline-sync');

const CalculoMaster = require('./modulos/calculo-master');
const Interpretador = require('./modulos/interpretador');


let expressao = readline.question('Qual a conta quer que eu resolva?');
let resultado = 'Expressão inválida!';
let calc = new CalculoMaster();
let interpretador = new Interpretador(expressao);



if(interpretador.validarCalculo('+')) {
    resultado = calc.soma(interpretador.valor1,interpretador.valor2);
}

if(interpretador.validarCalculo('x')) {
    resultado = calc.multiplicacao(interpretador.valor1,interpretador.valor2);
}

if(interpretador.validarCalculo('-')) {
    resultado = calc.subtracao(interpretador.valor1,interpretador.valor2);
}

if(interpretador.validarCalculo('/')) {
    resultado = calc.divisao(interpretador.valor1,interpretador.valor2);
}

console.log('resultado é:',resultado);