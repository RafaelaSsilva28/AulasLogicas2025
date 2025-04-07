const prompt = require('prompt-sync')();

console.log('=========================================');
console.log('😜     JOGO DA ADIVINHAÇÃO        😜');
console.log('=========================================');

let nrSecreto = Math.floor(Math.random() * 100) + 1;
let acertou = false;
let tentativas = 0;
while (acertou == false) {
    let chute = Number(prompt('Digite um numero entre 1 e 100: '));
    tentativas++;   //tentativas = tentativas + 1
    if (chute == nrSecreto) {
        console.log(`Voce acertou  em ${tentativas} tentativas✔✔✔`);
        acertou = true;
        } else if (chute > nrSecreto) {
            console.log('Voce chutou ', chute, 'tente um numero menor')
        } else if (chute < nrSecreto) {
            console.log('Voce chutou ', chute, 'tente um numero maior');
        }
    }
    console.log('FIM ✨');