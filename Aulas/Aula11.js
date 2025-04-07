const prompt = require('prompt-sync')();

//ESTRUTURA DE REPETIÇÃO DE LAÇO - FOR


//INICIALIZAÇÃODA VARIAVEL ; CONDIÇÃO DO FOR; INCREMENTO DA VARIAVEL
for (let contador = 1; contador <= 5; contador++ ) {
    console.log(contador);
    
}

//EXERCICIO NESTE FOR INICIAMOS APARTIR DO NUMERO 5, ATE O NUMERO 50 INCREMENTANDO DE 3 EM 3 NO COMPUTADOR
for (let contador = 5; contador <= 50; contador+=3 ) {   //PULANDO O NUMERO DE 3 EM 3 - CONTADOR+=3
    console.log('O numero do contador é', contador);
    
}

//UTILIZANDO O BREAK PARA PARAR O FOR
for (let contador = 1; contador <= 500; contador++ ) {   //PULANDO O NUMERO DE 3 EM 3 - CONTADOR+=3
    console.log('O numero do contador é', contador);
    if (contador == 50) {
        break;
    }
}

console.log('Entregando os notebooks');
for (let nr = 1; nr <= 32; nr++) {
    let nome = prompt(`Quem é o n° ${nr}: `);
    let presente = prompt(`O(a) ${nome} esta presente (s ou n)? `)
    if (presente == 's') {
        console.log(`Pegar o notebook ${nr}`);
        console.log(`Levar o notebook ate o(a) ${nome}`);
    } else {
        console.log(`Não pegar o notebook ${nr}`);
    }
}

//TABUADA COM O FOR
let nr = 6;
for (let contador = 1; contador <= 10; contador++) {
  console.log(`${nr} x ${contador} = ${nr * contador}`);
}