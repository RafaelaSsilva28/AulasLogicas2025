const prompt = require('prompt-sync')();

//Pergunte o ano de nascimento de uma pessoa e diga se ele é maior de idade
let ano = Number(prompt('Digite seu ano de nascimento'));
if (ano <= 2007) {
    console.log(`Voce é maior de idade`, ano);
} else {
    console.log(`Voce é menor de idade`, ano);
}