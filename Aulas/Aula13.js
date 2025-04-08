const prompt = require('prompt-sync')();

//ITERAÇÃO SOBRE NOSSOS VETORES (ARRAYS/LISTAS)

//Vetor          0       1        2          3
let frutas = ['maçã', 'banana', 'Abacaxi', 'Uva'];
//PARA ITERAR SOBRE UMVETOR, UTILIZAMOS O FOR
for(let x = 0; x < frutas.length; x++) {
    console.log(`A fruta da posição ${x} é ${frutas[x]}`);
}
console.log('FIM');

//Iterando sobre uma lista usando o for of
let listadeJogadores = ['Pelé', 'Maradona', 'Messi', 'Messi'];
for (let jogador of listadeJogadores) {
    console.log('O jogador é ', jogador);
}

//Iteração com number e sua soma
let lista = [1,2,3,4,5];
let soma = 0;
for (let nmr of lista) {
    console.log('O numero é', nmr);
    soma = nmr + soma;    //soma dos numeros
}
console.log('O valor total deles é', soma)

//VERIFICANDO SE UM ELEMENTO EXISTE EM UMA ARRAY - INCLUDES()
let vogais = ['a', 'e', 'i', 'o', 'u'];
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']  //caracter cosoante
let numeros = ['0','1','2','3','4','5','6','7','8','9','10']
let letraParaVerificar = prompt('Digite uma letra: ')
if(vogais.includes(letraParaVerificar.toLowerCase())) {      //pegando informação (incluindo algo) para saber seu resultado .toLowerCase() - SERVE PARA O CONSOLE ACEITAR 
console.log(`A letra para verificar é uma vogal ${letraParaVerificar} é uma vogal`);
} else if (consoantes.includes(letraParaVerificar.toLowerCase())) {
    console.log('A letra não é uma vogal', letraParaVerificar, 'e sim uma cosoante')
} else if (numeros.includes(letraParaVerificar)) {
    console.log('Voce escolheu um numero', letraParaVerificar, 'e não uma letra')

} else {
    console.log(`Voce não escolheu nem um numero e nem uma letra ${letraParaVerificar}`);      
}

//OBTENDO UMA POSIÇÃO DE UM ITEM EM UM ARRAY USANDO O FOR OF E A FUNÇÃO entries()
//         pos      0        1         2         3
let listaFrutas = ['maçã', 'banana', 'Abacaxi', 'Uva'];
for (const [pos,frutas] of listaFrutas.entries()) {     //estabelecendo uma posição
    console.log(`A fruta da posição ${pos} é da fruta ${frutas}`);
}

//Separando uma string utilizando o split()
let produtos = 'celular, monitor, tablet, TV, Notebook';
let listaProdutos = produtos.split(',');   //transformando a variavel em um vetor array
console.log(produtos);
console.log(listaProdutos);

//STRING SÃO UMA LISTA OU VETORES OU ARRAYS DE CARACTERS
//            01234
let escola = 'SENAI';  //['S','E','N','A','I'] mesma coisa 
console.log(escola[0])   //posição de cada letra da variavel
for (let escola1 of escola) {    //utilizando o for of para mostrar todas as posições
    console.log(escola1);
}
