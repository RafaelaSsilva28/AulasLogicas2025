//Importando biblioteca para receber informações do usuario 
const prompt = require('prompt-sync')();

//Declarando variaveis sem dados não definidos
let nota;
//Declarando variaveis com informações 
let nome = 'Carlos';

//Reatribuindo um valor a variavel nome
nome = 'Roberto'; 
nota = 8.5;

//Entrada de dados em nosso programa 
let sobrenome = prompt('digite seu sobrenome');
let nota1 = Number(prompt('Digite a nota da 1° prova'));
let nota2 = Number(prompt('Digite a nota da 2° prova'));

//Processamento dos dados
let media = (nota1 + nota2) / 2; 
let nomeCompleto = nome + ' ' + sobrenome; 
let nomeCompleto2 = `${nome} ${sobrenome}`;
let idade = prompt ('Digite sua idade: ');
let idadeNumero = parseInt(idade);

//Saida dos dados
console.log ('---Relatorio final---');
console.log (`O seu nome é: ${nomeCompleto} \n sua idade ${idade}`);
console.log('O seu nome é: ' + nomeCompleto + '\n sua idade' + idade);
console.log(`Sua media é: ${media} `);

//Incrementação de um valor podemos utilizar ++
let n = 0; //0
n = 0 + 1; //1
n = n + 1; //2
n = n + 1; //3
n += 1; //4
n++; //5
n += 3; //8
n--; //7
n = n - 1; //6
n -= 2; //4

//Resolução do exercicio da aula anterior
let horasPorDia = 8;
let diasTrabalhados = 15;
let valorHora = 100;
let totalHoras = diasTrabalhados * horasPorDia;
let custoTotal = totalHoras * valorHora;
console.log(`O custo total é de R$ ${custoTotal}`);



