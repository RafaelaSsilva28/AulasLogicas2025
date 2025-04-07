//Crie uma lista com os 20 times do campeonato brasileiro de futebol
let times = [
    "Atlético-MG",
    "Bahia",
    "Botafogo",
    "RB Bragantino", 
    "Ceará",
    "Corinthians",
    "Cruzeiro",
    "Flamengo",
    "Fluminense",
    "Fortaleza",
    "Grêmio",
    "Internacional",
    "Juventude",
    "Mirassol",
    "Palmeiras",
    "Santos",
    "São Paulo",
    "Sport",
    "Vasco da Gama", 
    "Vitória"
];
console.log('O primeiro time campeão é',times[0]);
console.log('OS TIMES QUE IRÃO JOGAR NOS LIBERTADORES SERÃO',times.slice(0,4))
console.log('OS TIMES QUE FORAM REBAIXADOS PARA A CLASSE B SERÃO', times.slice(-4))