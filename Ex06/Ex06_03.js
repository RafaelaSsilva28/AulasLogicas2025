const prompt = require('prompt-sync')();

//Crie um programa que receba do usuário através do input 6 comidas e refaça todos os itens do exercício 1
let comidas = [];
for(let x = 1; x <=6; x++){
    let comida = prompt('DIGITE UMA COMIDA');
    comidas.push(comida);
}


console.log('O primeiro comida citado é',comidas[0]);
console.log('O quarto comida citado é',comidas[4]);
comidas[6] = 'Minions'
console.log('Alterei o ultimo comida para', comidas);
comidas.push('Gente grande');
console.log('Adicionei mais um comida a minha lista', comidas);
comidas.splice(6,0,'Avatar 2');
console.log('Alterei a posição do sexto comida para', comidas);
comidas.splice(5,0,'Gigantes');
console.log('Adicionei mais um comida na quinta posição', comidas);
comidas.pop()
console.log('Agora removi o ultimo item da lista', comidas);
comidas.shift()
console.log('Agora removi o primeiro item da lista', comidas);
console.log(comidas.slice(0,3))
console.log(comidas.slice(-4))
console.log(' comida que tem atualmente são', comidas);
comidas.reverse()
console.log(' comida em ordem decrescente são', comidas);


