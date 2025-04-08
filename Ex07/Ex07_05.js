//CRIE UMA LISTA COM 5 NUMEROS ALEATORIOS E EXIBA SEU NUMERO E SEU DOBRO
let lista = [1,2,3,4,5];
let dobro = 0;
for (let nmr of lista) {
    console.log('O numero é', nmr);
    dobro = nmr*2
    console.log('Seu dobro é', dobro)
}