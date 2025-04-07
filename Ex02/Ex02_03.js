const prompt = require('prompt-sync')();

//Receba um inteiro e diga se é par ou ímpar.
let numero = Number(prompt('Digite um numero inteiro'));
if (numero % 2 ==0){
    console.log(`O numero sera par`, numero);
} else {
    console.log(`O numero sera impar`, numero);
}