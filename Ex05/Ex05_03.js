const prompt = require('prompt-sync')();

//Receba 5 números e verifique a soma e a quantidade de todos os pares e ímpares digitados
for (let contador = 1; contador <= 4; contador++ ) {
    if (contador % 2 == 0) {
        console.log('O numero é par',contador);
   
    } else if (contador % 1 == 1 ) {
        console.log('O numero é impar');
    }
    
}
