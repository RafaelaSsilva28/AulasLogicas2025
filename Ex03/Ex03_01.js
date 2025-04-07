const prompt = require('prompt-sync')();

//Pede ao usuario para digitar um numero de 1 a 7 e imprime o dia da semana correspondente
let numero = (prompt('Digite um numero de 1 a 7: '));
switch (numero) {
 case '1':
        console.log('Hoje é domingo');
    break;
 case '2':
        console.log('Hoje é segunda');
    break;
 case '3':
        console.log('Hoje é terça');
    break;
 case '4':
        console.log('Hoje é quarta');
    break;
 case '5':
        console.log('Hoje é quinta');
    break;
 case '6':
        console.log('Hoje é sexta');
    break; 
 case '7':
        console.log('Hoje é sabado');
    break;
    default:
        console.log('Voce não escolheu um numero de 1 a 7')
}