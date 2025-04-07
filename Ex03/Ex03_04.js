const prompt = require('prompt-sync')();

// Pede ao usuário para digitar o nome de um mês e imprime o número de dias naquele mês.
let mes = (prompt('Digite o nome de um mes '));
if (mes == 'janeiro' || mes == 'março' || mes == 'maio' || mes == 'julho' || mes == 'agosto' || mes == 'outubro' || mes == 'dezembro') {
    console.log('O mes tem 31 dias');
} else if (mes == 'abril' || mes == 'junho' || mes == 'setembro' || mes == 'novembro') {
    console.log('O mes tem 30 dias');
} else if (mes == 'fevereiro') {
    console.log('O mes tem 28 dias');
} else {
    console.log('Voce não escolheu nenhum nome de mes')
}