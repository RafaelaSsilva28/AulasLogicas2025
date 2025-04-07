const prompt = require('prompt-sync')();

//Operadores relacionais 
// == quer dizer igual, igualdade
//!= quer dizer diferente
//> maior que
//< menor que 
//<= menor ou igual 
//>= maior ou igual

let a = 2;
let b = 3;
console.log(a > b); //false
console.log(a == b); //false
console.log(a != b); //true
console.log(a > 2); //false
console.log(a >= 2); //true

//BLOCO DE CÓDIGOS OU COMANDOS é um conjunto de instruções agrupadas entre {} onde recebe instruções 
//if quer dizer sim estrutura de condição muito utilizada na programação
let tenhoIngresso = true;
 if (tenhoIngresso == true){ //se a condição for verdadeira entra nesse bloco de comando
    console.log('Posso entrar no show');
 }

 let idade = prompt('Qual é a sua idade?');
 if (idade >= 18); {
    console.log('Maior de idade');
 }
 
 //else quer dizer se não estrutura utilizada como complemento de if onde a utilização dele ira fazer a execução apenas de um
 let tenhoingresso = false;
 if (tenhoingresso == true){ //se a condição for verdadeira entra nesse bloco de comando
    console.log('Posso entrar no show');
 } else { //se a primeira condição for false
    console.log('Estou barrado na portaria');
 } 


 

 