const prompt = require('prompt-sync')();

//Operações com variaveis 
let nr1 = 123
let nr2 = 234
let soma = nr1 + nr2
console.log('Mostre a soma', soma);

//SUBTRAÇÃO
let numero1 = 23
let numero2 = 22
let menos = numero1 - numero2
console.log('Mostre a subtração', menos);
//MULTIPLICAÇÃO
let num1 = 56
let num2 = 12
let vezes = num1 * num2
console.log('Mostre a multiplicação', vezes);
//DIVISÃO
let numn1 = 15
let numn2 = 2
let dividir = numn1 / numn2
console.log('Mostre a divisão', dividir);
//EXPONENCIAÇÃO
let numer1 = 16
let numer2 = 18
let exponenciacao = numer1 ** numer2
console.log('Mostre a exponenciação', exponenciacao);

//EXERCICIO 1
let valor = 123.34
let desconto = 20.00
valor = valor - desconto 
console.log(`Promoção do celular com R$ ${desconto} de desconto, por apenas R$ ${valor}`)

// EXERCICIO 2 PORCENTAGEM e por PROMPT 
let = Number(prompt('Qual é o valor do celular?'));
let = Number(prompt('Qual é o desconto em %?'));
valor = valor - (valor * desconto / 100);
console.log(`Promoção do celular com R$ ${desconto} de desconto, por apenas R$ ${valor}`);

//Alterando o valor da variavel (reatribuiçãp)
var numero = 4 / 2
numero = numero **2 
numero = numero * (50-20);
console.log('O valor é', numero);
console.log(`O valor é: ${numero}`);

//EXERCICIO DO FLUXOGRAMA calculando a metade e o dobro de um numero
let number = 12;
let dobro = number*2;
let metade = number/2;
console.log('O resultado do dobro é', dobro, 'e a metade do valor é', metade);

//EXERCICIO 
let horasDias = 8*15
let custo = 100*horas
console.log(`O custo do projeto é de, ${custo}`);