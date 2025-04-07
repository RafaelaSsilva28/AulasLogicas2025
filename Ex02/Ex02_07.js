const prompt = require('prompt-sync')();

//Receba a velocidade do carro e exiba que foi multado se for maior que 80km/h, o valor da multa será R$ 7,00 por cada km excedido, exibir o valor da multa
let valor = Number(prompt('Digite o valor do carro'));
if (valor > 80){
    console.log(`multado`)
  } else {
    console.log(`Não recebe multa`)
  }
  let valorMulta = Number(prompt (`qual o valor da multa`))
  let custo = (velocidade - 80) * valorMulta
  console.log('O custo da multa ficou', custo);

//Forma do professor
let velocidade = Number(prompt('Digite a velocidade do carro'));
if (velocidade > 80) {
  let valorM  = (velocidade - 80) * 7;
  console.log(`Voce foi multado, valor da multa R$ ${valorM}`);
} else {
  console.log('Voce não foi multado');
}