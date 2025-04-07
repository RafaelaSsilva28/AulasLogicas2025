const prompt = require('prompt-sync')();

//EXERCICIOS VARIAVEIS
//1-Crie 4 variaveis, e atribuindo valores e exiba elas no console
//VARIAVEIS-nomeAluno, Altura, Escola, AnoAtual.
var nomeAluno = 'Rafaela';
var Altura = 1.65;
var Escola = 'Sesi';
var AnoAtual = '2025';
console.log('Olá,', nomeAluno, 'voce tem a aultura', Altura, 'e esta estudando na escola', Escola, 'no ano de', AnoAtual);

//2-Crie variaveis com o let nomeProfessor = armazene com o nome do professor materia = armazene a materia do professor AnoIngresso
//VARIAVEIS-nomePeofessor-materia-AnoIngresso
let nomeProfessor = 'Douglas';
let materia = 'codigos';
let AnoIngresso = 2025;
console.log('Olá,', 'meu professor se chama', nomeProfessor, 'estamos estudando', materia, 'no ano de', AnoIngresso);

//3-Crie pelo prompt os exercicios 1 e 2
//Exercicio 1
nomeAluno = prompt('Qual é o seu nome?');
Altura = prompt('Qual é a sua altura?');
Escola = prompt('Qual escola voce estuda?');
AnoAtual = prompt('Qual o seu ano atual?');
console.log('Olá,', nomeAluno, 'voce tem a aultura', Altura, 'e esta estudando na escola', Escola, 'no ano de', AnoAtual);
//Exercicio 2
nomeProfessor = prompt('Qual o nome do seu professor?');
materia = prompt('Qual a materia que voce esta estudando?');
AnoIngresso = prompt('Em qual ano voce esta?');
console.log('Olá,', 'meu professor se chama', nomeProfessor, 'estamos estudando', materia, 'no ano de', AnoIngresso);

//Exercicio transformar parseInt e parseFloat
AnoAtual = parseInt (AnoAtual);
AnoIngresso = parseInt (AnoIngresso);
Altura = parseFloat (Altura);
console.log(typeof AnoAtual, typeof AnoIngresso, typeof Altura);
