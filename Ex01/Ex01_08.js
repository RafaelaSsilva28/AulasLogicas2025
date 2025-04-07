const prompt = require('prompt-sync')();

//Crie um programa que leia a largura e a altura de uma parede em metros, calcule a sua área e a quantidade de tinta necessária para pintá-lo, sabendo que cada litro de tinta pinta uma área de 2m2.
let largura = 36;
let altura = 25;
let area = 25*36
let tinta = 2
let litro = area / tinta
console.log('sua area sera de ', area, 'e o valor que ira precisar de litros de tinta vai ser ', litro);

