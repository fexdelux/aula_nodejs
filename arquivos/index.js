const fs = require('fs');

function SomaCallback (valor) {
    console.log(`Total é ${valor}`);
}

function soma(v1, v2, callback) {
    setTimeout(() => {
        let total = v1 + v2;
        callback(total);
        console.log('executando o async');
        }, 5000);
        
}
function subtracao(v1, v2) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            try {
                let total = parseInt(v1 - v2) ;
                if(total){
                    resolve(total);
                } else {
                    reject('erro no calculo');
                }
            }catch(exception) {
            }
            console.log('executando o async promise');
            }, 5000);
    
    })
        
}

soma(1,1,SomaCallback); 
soma(1,1,(valor) => {
    console.log(`Total é ${valor} forma 2`);
}); 
subtracao(1,2).then( (resultado) => {
    console.log('Resultado :' + resultado);
}).catch( (erro) => {
    console.log('ERROR - mensagem:' +erro);
});

async function subtracaoSync(v1,v2){
    let total  = await subtracao(v1,v2);
    return total ;
}

let tt = subtracaoSync(4,3);
console.log('valor do sync: '+ tt);


console.log('forada da função line 1');
console.log('forada da função line 2');
console.log('forada da função line 3');
console.log('forada da função line 4');
console.log('forada da função line 5');
