const prompt = require('prompt-sync')();

let qtdepar = 0;
let qtdeimpar = 0;
let somapar = 0;
let somaimpar = 0;

while (true) {
    let num = Number(prompt('Digite um numero: '));
    if(num == 0) {
     break;
    }
    if (num % 2 == 0) {   //par
        qtdepar++
        somapar = somapar + num;  //soma += num
    } else {
        qtdeimpar++;
        somaimpar = somaimpar + num;
    }
}
console.log('Voce digitou ', qtdepar, 'n° pares, somadas resultou em ', somapar);
console.log('voce digitou ', qtdeimpar, 'n° impares, somadas resultou em ', somaimpar);