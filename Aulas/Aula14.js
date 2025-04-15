//FUNÇÕES

//FUNÇÃO SEM PARAMETRO E SEM RETORNO
Linha();   //executando a função
console.log('SESI / SENAI')
Linha();
function Linha (){    //Estabelecendo uma função
    console.log('😵 - - - - - - - - - - - - - - 😵');
}

//exercicio
patinhas();
console.log('          Amo animais           ')
patinhas();
function patinhas() {
    console.log('🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾')
}

//DIFERENTES JEITOS
function patinhas() {
    console.log('🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾')
    console.log('          amo animais              ')
    console.log('🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾')
}

patinhas();


//PARAMETRO DA FUNÇÃO SEM RETORNO
function CabecalhoEscola (nomeEscola){     // (nomeEscola) - é um  PARAMETRO sendo a mesma tipo uma variavel 
    Linha();   
    console.log(nomeEscola)
    Linha();

}
CabecalhoEscola('USP');
CabecalhoEscola('SESI');

//CRIANDO UMA FUNÇÃO SOMANDO
function soma(nr1, nr2){
    let resultado = nr1 + nr2;
    console.log('A soma dos numeros é', resultado);

}
soma(5, 8);   //Estabelecendo valores a Parametros ou variaveis que não tem valor
soma(234235, 35657);

//FUNÇÃO COM PARAMETROS E RETORNOS
function media(n1,n2){
    let resultado = (n1 + n2) / 2;
    return resultado;
}
let valor = media(6, 8);
console.log(valor)

