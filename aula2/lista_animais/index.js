const readlineSync = require('readline-sync');
const animals = require('./animais');

let index = readlineSync.keyInSelect(animals, 'Qual  animal vai escolher?');
console.log('Ok, ' + animals[index] + ' agora ele esta em sua sala.');