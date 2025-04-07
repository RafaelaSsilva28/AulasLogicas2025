const prompt = require('prompt-sync')();

//Ler dois números inteiros e informar se estes são iguais ou diferentes.
let numero = Number(prompt('Digite um numero'));
let numero2 = Number(prompt('Digite o egundo numero'));
if (numero == numero2){
    console.log(`Os numeros são iguais`)
} else {
    console.log(`Os numeros são diferentes`)
}