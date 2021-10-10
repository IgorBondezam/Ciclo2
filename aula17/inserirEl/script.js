window.onload = function(){

    const txtproduto = document.querySelector("#produto");
    const btn = document.querySelector("#cadastrar");
    const lista = document.querySelector("#listaDeProdutos");

    btn.addEventListener("click", function(){
            let li = document.createElement("li");
            lista.appendChild(li).setAttribute('class', 'listaDeFrutas')
            lista.appendChild(li).textContent = txtproduto.value;


    })



}