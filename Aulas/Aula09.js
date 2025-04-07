const prompt = require('prompt-sync')();

//ESTRUTURAS CONDICIONAIS ANINHADAS
//SWITCH CASE

//ESTRUTURA CONDICIONAL ALINHADA
let compra = 120;
let clienteVip = true;
if (compra >= 100) {
    if (clienteVip == true) {
       console.log(`Voce ganhou R$ ${compra * 10 / 100}`);
    } else {
        let desconto = compra * 5 / 100;
        console.log(`Voce ganhou R$ ${desconto} de desconto`);
    }
} else {
    let restante = 100 - compra;
    console.log(`Compre mais R$ ${restante} e ganhe desconto`);
}

//EXERCICIO
let idade = Number(prompt('Digite uma idade'));
if(idade < 16) {
    console.log('Voce não pode votar');
} else {
    if(idade >= 18 && idade <= 70) {
        console.log('Voto obrigatorio');
    } else {
        console.log('Voto facultativo')
    }
}
  
//SWITCH CASE
let n1 = Number(prompt('Digite um numero: '));
let n2 = Number(prompt('Digite o segundo numero: '));
let op = (prompt('Digite o operador (+ - / * **): '));
switch (op) {
    case '+':             //if (op) == '+'
        console.log(n1+n2);
        break;
    case '-':             //if (op) == '-'
        console.log(n1-n2);
         break;
    case '/':           //if (op) == '/'
        console.log(n1/n2);
        break;
    case '*':           //if (op) == '*'
        console.log(n1*n2);
        break;
    case '**':          //if (op) == '**'
        console.log(n1**n2);
        break;
    default:
        console.log('Operador invalido');
}
    

