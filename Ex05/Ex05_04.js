const prompt = require('prompt-sync')();

let inicio = Number(prompt('DIGITE O INICCIO: '));
let fim = Number(prompt('DIGITE O FIM: '));
let passo = Number(prompt('DIGITE O PASSO: '));

for (let x = inicio; x <= fim; x+= passo){
    console.log(x)
}