const prompt = require('prompt-sync')();

//ESTRUTURAS CONDICIONAIS composta e encadeada
//OPERADORES LOGICOS
// ! NEGAÇÃO (NÃO)
// && CONJUNÇÃO (E) 
// || DISJUNÇÃO (OU)

let a = 2;
let b = 3;
let c = 5;
//UTILIZANDO &&
console.log(a > 1 && b < 2); //False pq apenas 1 condição é vendadeira
console.log(a > 2 && b < 2); //False pq apenas 2 condição é falsa
console.log(a > 1 && b < 4); //True pq 2 condições são verdadeiras
console.log(a > 1 && b < 4 && c > 4); //True todas as condições são verdadeira
console.log(a > 1 && b < 4 && c > 4 && c > 5); //false

//UTILIZANDO ||
console.log(a > 2 || b < 2); //False nenhuma condição é verdadeira
console.log(a > 1 || b < 2); //True pelo menos 1 é verdadeiro
console.log(a > 1 || b < 4); //True pelo menos 1 verdadeiro
console.log(a > 1 && b < 4 || c > 4); //True pelo menos 1 verdadeiro

//ESTRUTURA ENCADEADA
let altura = Number (prompt('Digite sua altura'))
let peso = Number (prompt('Digite seu peso'))
let imc = peso / (altura ** 2);
if (imc < 18.5) {
    console.log(`Voce esta abaixo do peso ideal`);
} else if (imc > 18.5 && imc < 24.5) {  //Pode utilizar else if tanto como pode utilizar so o else para adição de bloco
    console.log('Voce esta no peso ideal');
} else if (imc > 25 && imc < 29.9) {
    console.log('Voce esta sobrepeso');
} else if (imc > 30) {
    console.log('Voce esta com obsidade')
}


//Praticando EXERCICIOS
let lado1 = Number (prompt('Digite um numero do lado'));
let lado2 = Number (prompt('Digite o segundo numero do lado'));
let lado3 = Number (prompt('Digite o terceiro numero do lado'));
if (lado1 == lado2 && lado2 == lado3) {
    console.log('O triangulo é equilatero');
} else if (lado1 != lado2 && lado2 != lado3){
    console.log('O triangulo é escaleno');
} else {
    console.log('Seu triangulo é isósceles');
}

//EXERCICIO UTILIZANDO || (ou)
let vendas = Number (prompt('Digite o valor das vendas de um vendedor'));
let horas = Number (prompt('Digite o valor de horas semanais'));
if (vendas > 5000 || horas > 40){
    console.log('O vendedor tem direito a bonus da empresa');
} else {
    console.log('O vendedor não tem direito a bonus da empresa');
}

//Crie um algoritmo que receba um caractere e verifique se ele é vogal ou cosoante
let letra = (prompt('Digite uma letra: '));
if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
    console.log('A letra é vogal');
} else {
    console.log('A letra é cosoante');
}