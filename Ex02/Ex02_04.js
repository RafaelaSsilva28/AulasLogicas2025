const prompt = require('prompt-sync')();

//Receba um número inteiro e diga se é positivo ou negativo
let numero = Number(prompt('Digite um numero inteiro'));
if (numero > 0){
    console.log(`O numero sera positivo`, numero);
} else {
    console.log(`O numero sera negativo`, numero);
}