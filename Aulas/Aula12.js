//VARIAVEIS COMPOSTAS / VETORES - ARRAYS

//VARIAVEIS SIMPLES, CABE APENAS 1 DADO POR VEZ
let fruta = 'Maça';
fruta = 'banana'; //alterando a variavel simples anterior


//VARIAVEIS COMPOSTAS, CABE MAIS DE UM DADO DENTRO DE UMA UNICA VARIAVEL vetor de string
let frutas = ['Maça', 'Banana', 'Abacaxi', 'Uva']
console.log('minhas frutas que eu tenho são ', frutas);
console.log('Irei comer hoje de fruta ', frutas[1]);

//DECLARANDO UMA LISTA VAZIA
let listaVazia = [];

//DECLARAÇÃO DE LISTA DE NUMEROS COMPOSTA 
let numeros = [1,2,8,5,9];
console.log('Meus numeros são ', numeros);
console.log('O numero que eu escolhi foi ', numeros[4]);

//DECLARAÇÃO DE LISTA MISTA 
let listaMista = [4, 'feijão', true, 7.55]
console.log('Na minha lista tem os seguintes dados ', listaMista);
console.log('Eu escolhi ', listaMista[2]);

//DECLARANDO UMA LISTA COM OUTRAS LISTAS
let listaDeVetores = [['coca-cola', 'hot-dog'], [5.00, 10.00]];
console.log('Em minha lista contem', listaDeVetores);
console.log('Escolhi como comidas', listaDeVetores[0], 'sendo seus preços ', listaDeVetores[1]);

//VARIAVEIS COMPOSTAS, substituindo os valores das variaveis
let frutas1 = ['Maça', 'Banana', 'Abacaxi', 'Uva']
frutas1[3] = 'melancia' //substituindo valor
frutas1.push('Laranja') //inserindo um novo item a lista exemplo abaixo 
console.log('minhas frutas que eu tenho são ', frutas1);
console.log('Irei comer hoje de fruta ', frutas1[3]);

//INSERINDO UM NOVO ITEM NA LISTA
frutas.push('Laranja')   //adicionando novo item a lista COM O METODO PUSH
frutas = [...frutas, 'Laranja']    //utilizando o operador spreed mesmo funcionamento do .push

//UTILIZANDO O METODO .SPLICE ocupando espaço
frutas.splice(2,0,'Morango');
// 2 - posição que vai ocupar
// 0 - quantidade de itens a serem removidos

//REMOVENDO DA LISTA METODOS
frutas.splice(3, 1)  //excluindo pelo indice .splice
frutas.shift() //remove primeiro item
frutas.pop() //remove o ultimo item

//MOSTRANDO POSIÇÕES
frutas = ['Maça', 'Banana', 'Morango', 'Abacaxi', 'Melancia', 'Laranja', 'Uva']
console.log(frutas[4]) //POSIÇÃO ESPECIFICA
console.log(frutas.slice(0,4)) //DA POSIÇÃO 0 PEGAR 4 ITENS
console.log(frutas.lastIndexOf(1)) // DA POSIÇÃO 1 ATE O ULTIMO
console.log('A ultima fruta é', frutas.slice(-1)) //NUMERO DE ITENS DO FIM PRO INICIO
console.log('O total de frutas é ', frutas.length) //MOSTRA O TOTAL DE ITENS
frutas.sort() //Ordenando a lista em ordem crescente
console.log(frutas) 
frutas.reverse() //ordenando em ordem decrescente 
console.log(frutas)
