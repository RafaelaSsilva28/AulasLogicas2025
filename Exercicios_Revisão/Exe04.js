const prompt = require('prompt-sync')();
//Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule em uma nova variável e mostre o total do seu salário no referido mês
let horas = (prompt('Digite quantos vc ganha por horas: '));
let num = (prompt('Digite o numero de horas trabalhadas no mes: '));
let salario = horas*num
console.log('O valor do salario total é de', salario, '😎')