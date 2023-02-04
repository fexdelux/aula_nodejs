const readline = require('readline-sync');

const Interpretador = require('./modulos/interpretador');


let resultado = 'Expressão inválida!';
let expressao = readline.question('Qual a conta quer que eu resolva?');
let interpretador = new Interpretador(expressao);

resultado = interpretador.resultado();



console.log('resultado é:',resultado);