/**
 *  Lista de compras
 * 
 *  Nome
 *  quantidade
 *  preço
 * 
 */

var produto = {
    nome: "", 
    quantidade: 0, 
    preco: 0.0
} 
var produtos = [];
let posicaoAtual = 1;

function titulo(posicao) {
    switch(posicao) {
        case 1:
            console.log('Digite o nome do produto:');
            break;
        case 2:
            console.log('Digite a quantidade:');
            break;
        case 3:
            console.log('Digite o preço:');
            break;
    }
}

function carregarVariaveis(posicao, valor) {
    switch(posicao) {
        case 1:
            produto.nome = valor;
            break;
        case 2:
            produto.quantidade = parseInt(valor);
            break;
        case 3:
            produto.preco = parseFloat(valor);
            break;
        case 4:
            email = valor;
            break;
       
    }

}

function resutado() {
    console.log(' ==========LISTA DE PRODUTO=========' );
    console.log("Nome \t\tQuantidade \t\tpreço");
    let total = 0.0;
    for( var i = 0; i < produtos.length; i++){
        let prod = produtos[i];
        total = total + prod.preco;
        console.log(prod.nome+"\t\t"+prod.quantidade+"\t\t\t"+prod.preco);
    }
    console.log(' =======================' );
    console.log(' total da compra: '+ total );

}

console.log('Lista de compras: ');

titulo(posicaoAtual);
process.stdin.on("data", data => {
    
    let info = (new String(data)).replace(/(\r\n|\n|\r)/gm, "" );
    
    if(posicaoAtual == 4 && info.toUpperCase() == 'S') {
        posicaoAtual = 1;  
        titulo(posicaoAtual);  
    } else {

        if(posicaoAtual == 4 && info.toUpperCase() == 'N') {
            resutado();
            process.exit();
        }

        carregarVariaveis(posicaoAtual, info);
        posicaoAtual = posicaoAtual + 1;
        if(posicaoAtual == 4 ){
            produtos.push({...produto});
            resutado();
            console.log('Gostaria de cadastrar mais um produto(S,N)?');
        } else {
            titulo(posicaoAtual);
        }
    
    }
});





