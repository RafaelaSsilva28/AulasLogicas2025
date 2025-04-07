const prompt = require('prompt-sync')();

//Crie um programa que leia quanto dinheiro a pessoa tem na carteira e mostre quantos dólares ela pode contar.
let dinheiro = 200;
let dolar = dinheiro / 5.78;
console.log('O valor em dolares sera de ', dolar);

let reais = Number(prompt('Quantos vc tem nacarteira em R$? '));
let dolares = reais / 5.78;
console.log(`Voce tem R$ ${reais} convertendo tem ${dolares.toFixed(2)}`);