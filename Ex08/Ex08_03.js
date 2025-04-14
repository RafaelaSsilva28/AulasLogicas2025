const prompt = require('prompt-sync')();


function FormatarData(dia, mes, ano){
    let dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
}
let data = FormatarData(28, 2, 2008)
console.log(data)
//outro jeito de console - console.log(FormatarData(14, 4, 2025));