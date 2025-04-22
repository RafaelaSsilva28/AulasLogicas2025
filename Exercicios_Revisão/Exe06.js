const prompt = require('prompt-sync')();
//Tendo como dado de entrada a altura (h) de uma pessoa e o sexo, construa um
//algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//Para homens: (72.7 * altura) – 58 Para mulheres: (62.1 * altura) - 44.7, exiba qual é o
//peso ideal da pessoa.
let sexo = (prompt('Digite seu sexo F ou M: '));
let altura = (prompt('Digite sua altura: '));
if(sexo=='M'){
    console.log('Voce é masculino e seu peso ideal é', (72.7*altura) - 58);
}else if(sexo=='F'){
    console.log('Voce é feminino e seu peso ideal é', (62.1*altura) - 44.7);
}else{
    console.log('Voce não digitou um sexo correto F ou M')
}
