//ESCOPO DE VARIAVEIS
//VARIAVEL GLOBAL PODE SER ACESSADA EM QUALQUER LUGAR
//VARIAVEL LOCAL SO PODE SER ACESSADA DENTRO DO BLOCO

//UTILIZANDO VARIAVEIS LOCAL
function NomeEscola(){
    let escola = 'SESI';
    console.log('Valor dentro da função', escola);
}
let escola = 'SENAI';
console.log('Valor fora da função', escola);
NomeEscola();
console.log('Valor apos a função', escola);




//UTILIZANDO VARIAVEIS GLOBAL
var escola2 = 'SENAI';

function NomeEscola2(){
     escola2 = 'SESI';
    console.log('Valor dentro da função', escola2);
}

console.log('Valor fora da função', escola2);
NomeEscola2();
console.log('Valor apos a função', escola2);

//DOCUMENTANDO FUNÇÕES USANDO O JSDoc
/** 
 * Soma de dois numeros
 * @param {number} a - Primeiro numero
 * @param {number} b - segundo numero
 * @return {number} - soma dos dois numeros
*/
function Soma(a, b){
    return a+b;
}
Soma(2, 4)