function divisao(nr1, nr2){
    let resultado = nr1 / nr2;
    console.log('A divisão dos numeros é', resultado);
}
function subtrair(nr1, nr2){
    let resultado = nr1 - nr2;
    console.log('A subtração dos numeros é', resultado);
}
function soma(nr1, nr2){
    let resultado = nr1 + nr2;
    console.log('A soma dos numeros é', resultado);
}
function multiplicacao(nr1, nr2){
    let resultado = nr1 * nr2;
    console.log('A multiplicação dos numeros é', resultado);
}
function calcular(nr1, nr2, op){
    if(op == '+'){
        soma(nr1, nr2);
    }else if (op == '-'){
        subtrair(nr1, nr2);
    }else if (op == '*'){
        multiplicacao(nr1, nr2)
    }else if (op == '/'){
        divisao(nr1, nr2);
    }else{
        console.log('O operador esta invalido')
    }
        
    
}
calcular(17, 6, '+')