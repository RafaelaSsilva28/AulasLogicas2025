const prompt = require('prompt-sync')();

//Pede ao usuário para digitar 2 notas e calcule sua média, e considere a média acima de 
// 7 aprovado, entre 5 e 7, em recuperação, abaixo de 5 reprovado.
let nota = Number(prompt('Digite uma de suas notas '));
let nota2 = Number(prompt('Digite outra nota sua '));
let media = (nota + nota2) / 2
if (media >= 7){
    console.log('Voce foi aprovado');
} else if (media >= 5 && media < 7) {
    console.log('Voce esta em recuperação');
} else if (media < 5) {
    console.log('Voce esta reprovado')
}