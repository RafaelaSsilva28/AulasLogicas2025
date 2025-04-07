const prompt = require('prompt-sync')();

//Pede ao usuário o ano atual e o ano de nascimento e verifique em qual faixa etária ele pertence 
// considerando (abaixo de 10 é criança, de 11 a 17 adolescente, de 18 a 59 adulto, acima de 60 idoso)
let anoAtual = Number(prompt('Digite o ano atual'));
let anoNascimento = Number(prompt('Digite o seu ano de nascimento'));
let idade = anoAtual - anoNascimento
if (idade <= 10) {
 console.log('Voce é criança');
} else if (idade == 11 || idade <= 17) {
    console.log('Voce é adolescente');
} else if (idade == 18 || idade <= 59) {
    console.log('Voce é adulto')
} else {
    console.log('Voce é idoso')
}