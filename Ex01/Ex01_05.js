const prompt = require('prompt-sync')();

//Crie um programa que leia o valor em metros e o exiba convertido em centímetros, milímetros e km
let metros = 120;
let centimetros = 120*100;
let milimetros = 120*1000;
let km = 120/1000;
console.log ('O numero em centimetros é ', centimetros, 'E seu valor em km é ', km, 'Ja o seu valor em milimetros é ', milimetros);

//Usando o prompt-professor
let metros1 = Number(prompt('Digite uma medida em metros: '));
//convertendo em cm
let cm1 = metros1 * 100;
//convertendoem mm
let mm1 = metros1 * 1000;
//convertendo em km
let km1 = metros1 / 1000;
//exiba o valor
console.log(`${metros1}m é ${cm1}cm, ${mm}mm e ${km1}km`);