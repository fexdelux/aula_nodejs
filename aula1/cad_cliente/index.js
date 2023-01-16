/**
 *  Cadastro de cliente
 * 
 *  Nome
 *  Sobrenome
 *  telefone
 *  email
 * 
 */
let nome, sobrenome ,telefone ,email;
let posicaoAtual = 1;

function titulo(posicao) {
    switch(posicao) {
        case 1:
            console.log('Digite o seu nome:');
            break;
        case 2:
            console.log('Digite o seu sobrenome:');
            break;
        case 3:
            console.log('Digite o seu telefone:');
            break;
        case 4:
            console.log('Digite o seu email:');
            break;
       
    }
}

function carregarVariaveis(posicao, valor) {
    switch(posicao) {
        case 1:
            nome = valor;
            break;
        case 2:
            sobrenome = valor;
            break;
        case 3:
            telefone = valor;
            break;
        case 4:
            email = valor;
            break;
       
    }

}

function resutado() {
    console.log(' ==========DADOS=========' );
    console.log('Nome:' + nome);
    console.log('Sobrenome:' + sobrenome);
    console.log('Telefone:' + telefone);
    console.log('E-mail:' + email);
    console.log(' =======================' );

}

console.log('Cadastro de Cliente: ');
titulo(posicaoAtual);
process.stdin.on("data", data => {
    carregarVariaveis(posicaoAtual, data);
    posicaoAtual = posicaoAtual + 1;
    if(posicaoAtual > 4 ){
        resutado();
        process.exit();
    } else {
        titulo(posicaoAtual);
    }
        
   
});





