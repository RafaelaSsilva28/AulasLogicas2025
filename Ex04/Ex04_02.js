const prompt = require('prompt-sync')();

//UTILIZANDO O COMANDO WHILE, EXIBA TODOS OS NUMEROS PARES DE 1 A 20
let par = 1;
while (par <= 20) {
  let numeros = Number(prompt('Digite um numero de 1 a 20: '));
  if (numeros > 20) {
  console.log('DIGITE UM NUMERO DE 1 A 20')
    
  } else if (numeros % 2 == 0) {
    console.log('O numero é par ')
} else {
    console.log('DIGITE UM NUMERO PAR ESSE NUMERO É IMPAR : ')
} 
}

