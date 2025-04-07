//exercicio filme
let filmes = ['Avatar', 'Frozen', 'Velozes e Furiosos', 'Moana', 'Vingadores','Lilo e stich', 'Meu malvado favorito']
console.log('O primeiro filme citado é',filmes[0]);
console.log('O quarto filme citado é',filmes[4]);
filmes[6] = 'Minions'
console.log('Alterei o ultimo filme para', filmes);
filmes.push('Gente grande');
console.log('Adicionei mais um filme a minha lista', filmes);
filmes.splice(6,0,'Avatar 2');
console.log('Alterei a posição do sexto filme para', filmes);
filmes.splice(5,0,'Gigantes');
console.log('Adicionei mais um filme na quinta posição', filmes);
filmes.pop()
console.log('Agora removi o ultimo item da lista', filmes);
filmes.shift()
console.log('Agora removi o primeiro item da lista', filmes);
console.log(filmes.slice(0,3))
console.log(filmes.slice(-4))
console.log('Os filmes que tem atualmente são', filmes);
filmes.reverse()
console.log('Os filmes em ordem decrescente são', filmes);


