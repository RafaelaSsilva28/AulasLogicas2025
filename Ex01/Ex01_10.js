const prompt = require('prompt-sync')();
//- Faça um algoritmo que pergunte a quantidade de km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0.15 por km rodado
let km = 50;
let dias = 7;
let valorDias = 60*7;
let valorKm = 50*0.15;
let valorTotal = valorDias + valorKm;

km = prompt('Quantos km o carro ira andar?');
dias = prompt('Quantos dias o carro vai ser alugado?');
valorTotal = valorDias + valorKm;
console.log('Irei alugar meu carro por', dias, 'dias', 'e vou andar com meu carro por', km, 'o valor dele alugado ficara por', valorTotal);