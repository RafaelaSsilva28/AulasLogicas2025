const prompt = require('prompt-sync')();

let venda = Number(prompt(`Quanto vendeu esse mes?`));
if(venda>=5000){
    let comissao1 = 5/100 * venda 
    console.log (`sua comissao sera de ${comissao1}`);
} else{
    let comissao2 = 3/100 * venda
    console.log(`sua comissao sera de ${comissao2}`);
}


//Professor
let vendas = Number(prompt('Quanto o vendedor vendeu'));
if (vendas > 5000) {
    let comissao = vendas * 0.05;
    console.log(`A comissão do vendedor sera de R$ ${comissao}`);
} else {
    let comissao = vendas * 0.02;
console.log(`A comissão do vendedor sera de R$ ${comissao}`);
} 



