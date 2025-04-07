const prompt = require('prompt-sync')();

//Peça dois números ao usuário e mostre qual o maior e qual o menor
let numero = Number(prompt('Digite um numero'));
let numero2 = Number(prompt('Digite o segundo numero'));
if (numero > numero2){
    console.log(`O numero que sera maior`, numero);
} else {
    console.log(`O numero que sera menor`, numero);
}