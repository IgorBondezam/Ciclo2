

function palavras(x){
    let qtd = (x.length);
    let maius= (x.toUpperCase());
    let tercLetra = (x[2]);
    let repla = (x.replace(tercLetra, "X"));
    document.write(`Sua palavra tem ${qtd} letras <br>Ela maiuscula fica ${maius}<br>A terceira letra da sua palavra é ${tercLetra} que substituida por X fica ${repla}`);
}

var x =prompt("Escreva uma palavra:");
palavras(x);