const prompt = require('prompt-sync')();

//ESTRUTURAS DE LAÇOS DE REPETIÇÃO - WHILE

//ESTRUTURA 1
let resposta = 'S';
while (resposta == 'S') {
    console.log('Voce esta dentro do bloco');
    resposta = prompt('Deseja continuar/ S/N')
}
console.log('FIM')


//ESTRUTURA 2
let senhaSecreta = 'SENAI'
let senhaDigitada
while (senhaSecreta != senhaDigitada) {
    console.log('Descubra a senha secreta')
    senhaDigitada = prompt('Qual é a senha?: ')
}
console.log('FIM')

//ESTRUTURA 3 -  EXECUTANDO UM NUMERO DETERMINADO DE VEZES
let contador = 1;
while (contador <= 5) {
    console.log(`O contador esta no n° ${contador}`);
    contador++;   // contador = contador + 1;
}
 
//ESTRUTURA 4 - POSSO DEIXAR MEU LADO EXECUTANDO SEM UMA CONDIÇÃO ESPECIFICA, APENAS COM WHILE (TRUE) E ENCERRAR O LOOP COM O COMANDO BREAK
let total = 0;
let qtde = 0;
while (true) {
    let valor = Number(prompt('Digite o valor do produto (0 para encerrar): '));
    if (valor == 0) {
        break;
    } else {
        total = valor + total;
        qtde++;
    }
}
console.log (`Voce comprou no total ${qtde} produtos `);
console.log(`Valor total da compra R${total}`)