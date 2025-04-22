//Faça uma função que peça um valor e mostre na tela se o valor é positivo ou negativo.

function positivoNegativo(numero){
      
    if (numero<=0) {
        console.log('O numero é negativo', numero)      
    }else {
        console.log('O numero é positivo', numero)
    }
}
positivoNegativo(-2)
positivoNegativo(1)
positivoNegativo(-6)
positivoNegativo(6)