window.onload = function(){

    let veiculos = ["ônibus","motocicleta","patinete"];

    const botao = document.querySelector("#botaoAdd");
    const lista = document.querySelector("#listaId");

    botao.addEventListener("click", function(){
    for(itens of veiculos){

        const li = document.createElement('li');
        lista.appendChild(li).textContent = itens;
    }
})
}
