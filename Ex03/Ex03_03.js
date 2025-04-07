const prompt = require('prompt-sync')();

//Pede ao usuário para digitar o número de um mês e imprime o seu nome
let mes = (prompt('Digite um numero de um mês '));
switch (mes) {
    case '1':
           console.log('O mes é janeiro');
       break;
    case '2':
           console.log('O mes é fevereiro');
       break;
    case '3':
           console.log('O mes é março');
       break;
    case '4':
           console.log('O mes é abril');
       break;
    case '5':
        console.log('O mes é maio');
    break;
    case '6':
           console.log('O mes é junho');
       break;
    case '7':
           console.log('O mes é julho');
       break; 
    case '8':
           console.log('O mes é agosto');
       break;
       case '9':
           console.log('O mes é setembro');
       break;
    case '10':
           console.log('O mes é outubro');
       break; 
    case '11':
           console.log('O mes é novembro');
       break;
    case '12':
           console.log('O mes é dezembro');
       break;
       default:
        console.log('Voce não escolheu nenhum numero de meses')
       
   }