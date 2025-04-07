const prompt = require('prompt-sync')();

//Criando nossa primeira variavel
//Uma variavel serve paraarmazenar uma informação/valor 
//O memoria crie um espaço com o nome curso e receba o valor 'Desenvolvimento de sistema'
var curso = 'Desenvolvimento de sistema';

//Exibindo o conteudo da variavel
console.log('curso'); //Para imprimir uma variavel, não se coloca entre ' '
console.log(curso); //Jeito correto de usar uma variavel
console.log('curso', curso);

//Criando e atribuindo valores a uma variavel
var idade = 16; //Inteira // Integer
var temperatura = 24.5; //real //float
var nome = 'Rafaela'; //string

console.log('Olá, ', nome, ' voce tem ', idade, 'anos')
console.log('esta cursando ', curso, 'hoje faz', temperatura, '°C');

console.log('Olá, ' + nome + ' voce tem ' + idade + 'anos')
console.log('esta cursando ' + curso + ' hoje faz ' + temperatura + '°C');

//Temperatura string
//Utilizo a crase ` ` para criar uma string
//Para colocar variaveis dentro da string, utilizo ${variavel}
console.log(`Olá, ${nome} voce tem ${idade} anos esta cursando ${curso} hoje faz ${temperatura}°C`);

//Declarando uma variavel lógica ou boorlean/bolerano (true/false)
var podeDirigir = true;
var estaChovendo = false;

//Declarando uma variavel nula
var escola; 

//Exercicio Quais nomes de variaveis são validos?
//Nota1 valido
//nomeCompleto valido
//Nome Completo invalido
//Média invalido 
//console invalido
//_salario valido
//9dade invalido
//Minha_Variavel valido
//var invalido
//Valor$ invalido
//nome-completo invalido 
//escola_ valido
//TELEFONE valido
//true invalido 

let cidade = 'andradina'
var turma = '2°B'
const ano = 2025

console.log(turma);
turma = '3°B' //Reatribuindo o valor de uma variavel
console.log(turma);
//ano = 2026; //Não podemos reatribuir valor a uma constante 

//Exercicio vamos transcrever um pseudocodigo 
let _nome = 'Rafaela';
let _idade =  16;
let _peso = 55;
console.log('Ola, ', _nome, 'voce tem ', _idade, 'anos', 'e voce pesa', _peso);

//Mostrando no console quais são os tipos de dados
console.log(typeof _nome, typeof _idade, typeof _peso);

//No prompt o computador espera o usario dar uma informação
//Sempre quando recebemos uma informação de entrada ela vem do tipo STRING
_nome = prompt ('Qual é o nome?');
_idade = prompt ('Qual é o idade?');
_peso = prompt ('Qual é o peso?');
console.log('Ola, ', _nome, 'voce tem', _idade, 'anos', 'e voce pesa', _peso);

console.log(typeof _nome, typeof _idade, typeof _peso);

//Criem duas variaveis num1 e num2 e recebem as informações pelo prompt
let num1 = prompt ('Digite o primeiro numero');
let num2 = prompt ('Digite o segundo numero');
console.log('Olá, ', 'meu primeiro numero é', num1, 'e meu segundo numero é', num2);

console.log(typeof num1); //string
num1 = number(num1); //Convertendo a variavel do tipo string para Number
console.log(typeof num1); //number

let nr1 = Number(prompt ('Digite o primeiro numero')); //number
let nr2 = Number(prompt ('Digite o segundo numero')); //number
console.log('Olá, ', 'meu primeiro numero é', nr1, 'e meu segundo numero é', nr2);

//Convertendo os dados de uma variavel 
nr1 = '100.14'; //string
nr1 = Number('100.14'); //converetendo string para Number
nr1 = parseInt('100.14'); //convertendo string para integer
nr1 = parFloat('100'); //convertendo string para float 100.00
nr1 = String(100.14); //convertendo um numero para string

_nome = prompt ('Qual é o nome?'); //string
_idade = parseInt (prompt ('Qual é o idade?')); //int
_peso = parseFloat (prompt ('Qual é o peso?')); //float 
console.log('Ola, ', _nome, 'voce tem', _idade, 'anos', 'e voce pesa', _peso);



