const prompt = require('prompt-sync')();
//Faça um algoritmo que verifique se uma letra digitada é "F" ou "M". Conforme a letra  
// escrever: F - Feminino, M – Masculino, se não for nenhuma das opções, Sexo Inválido.
let sexo = (prompt('QUAL SEU SEXO F OU M ? '));
if(sexo=='F'){
    console.log('Seu sexo é feminino', sexo, '👩');
}else if (sexo=='M'){
    console.log('Seu sexo é masculino', sexo, '🧑');
}else{
    console.log('VOCE NÃO DIGITOU M OU F');
}
