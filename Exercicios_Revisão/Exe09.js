//- Faça uma função que imprima na tela apenas os números ímpares entre 1 e 50.
function ParImpar(){
for (let contador = 1; contador <= 50; contador++ ){
    if (contador % 2 == 1) {
        console.log('O numero é impar', contador)         
    }
}
}
ParImpar()

