function senhaAleatoria(qtdeCaracteres){
    let listaCaracteres = ['!', 'a', 5, 'R', '$', '#'];   //''sndmasndansdasjndwkadsakdma''
    let senha = '';
   
  for(let x = 1; x <= qtdeCaracteres; x++){
    let posSorteada = Math.floor(Math.random()* listaCaracteres.length);       //.length é todos-tamanho
    senha = senha + listaCaracteres[posSorteada];
  }
  return senha;
}
let senhaGerada = senhaAleatoria(20)
console.log(senhaGerada)