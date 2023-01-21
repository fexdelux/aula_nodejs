const readlineSync = require('readline-sync');

let idade = readlineSync.questionInt('Qual a sua idade?');

if( idade < 16){
    console.log('Você não vota!');
} else if( (idade >= 16 && idade <=17) || idade > 70) {
    console.log('Voto não obrigatório');
} else {
    console.log('Voto Obrigatório');
}
