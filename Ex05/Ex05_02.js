//Gere os 6 números do sorteio da mega-sena de forma aleatória


for ( let num = 1; num <= 6; num++) {
    let numMega = Math.floor(Math.random() * 60) + 1;
    console.log(numMega);
} 
