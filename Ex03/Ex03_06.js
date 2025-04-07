const prompt = require('prompt-sync')();

//Pede o salário do funcionário, e calcular o aumento que ele terá, considerando se ganhar até 
//2000, reajuste de 12%, até 4000, reajuste de 10%, acima de 4000 reajuste de 8%, exibir o novo salário
let salario = Number(prompt('Qual é o salario'));
if(salario <= 2000) {
    let reajuste = salario + (salario* 0.12)
        console.log(`O seu salario é ${reajuste}`)
}
if(salario > 2000 && salario <= 4000) {
    let reajuste = salario + (salario* 0.10)
        console.log(`O seu salario é ${reajuste}`)
}
else if(salario > 4000) {
    let reajuste = salario + (salario* 0.08)
        console.log(`O seu salario é ${reajuste}`)
}