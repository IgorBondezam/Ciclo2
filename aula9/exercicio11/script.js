var listaNomes=["João", "Vinícius", "Mathus", "Ana Glória", "Samira"];


function define(x){
    let qtd = (x.length);
    let escolha = prompt("Escolha um número da lista:");
    let nomeEscolha  = listaNomes[escolha];
    let add = prompt("Adicione um nome na lista:");
    x.push(add);
    let novaQtd = (x.length);

    document.write(`A quantidade de nome na lista é ${qtd}<br>`);
    document.write(`O número escolhido foi ${escolha} e o nome referente é ${nomeEscolha}<br> `)
    document.write(`O nome adicionado foi ${add}<br>`)
    document.write(`A quantidade de nomes na lista é ${novaQtd}<br>`)

}

define(listaNomes);
define(listaNomes);