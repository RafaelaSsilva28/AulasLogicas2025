const prompt = require('prompt-sync')();

let somaIDADEM = 0;
let somaIDADEF = 0;
let qtdeM = 5;
let qtdeF = 5
for (let x = 1; x <= 10; x++){
    let idade = Number(prompt('DIGITE SUA IDADE: '));
    let sexo = Number(prompt('DIGITE SEU SEXO M/F: '));

        if (sexo == 'M') {
            qtdeM++
            somaIDADEM = somaIDADEM + idade;
        } else if (sexo == 'F') {
            qtdeF++
            somaIDADEF = somaIDADEF + idade;
        }
   
}
console.log(`A MEDIA DOS SEXO M É DE ${somaIDADEM / 10}`)
console.log(`A MEDIA DO SEXO F É DE ${somaIDADEF / 10}`)
console.log(`A MEDIA DO GRUPO É DE ${(somaIDADEM + somaIDADEF) / 10}`)