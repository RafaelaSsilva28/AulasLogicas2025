const prompt = require('prompt-sync')();

//Crie um programa que leia um número inteiro e mostre na tela o seu sucessor e antecessor.
let numero = 5;
let sucessor = 6;
let antecessor = 4;
console.log ('O numero escolhido é ', numero, 'seu sucessor é ', sucessor, 'e seu antecessor é ', antecessor);
  
//Usando o prompt
let num = prompt('Digite um numero ');
let suc = prompt('Digite o numero sucessor');
let ant = prompt('Digite seu antecessor');
console.log('O meu numero escolhido é', num, 'seu sucessor sera ', suc, 'ja o seu antecessor sera', ant);
