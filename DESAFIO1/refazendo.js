// window.onload = function(){
    function funcaoPrincipal(){

    let frutas = [    //opção de frutas                             
        {fruta:'Melância', preco:5.00},
        {fruta:'Maçã', preco:3.00},
        {fruta:'Laranja', preco:1.50},
        {fruta:'Abacate', preco:4.50},
        {fruta:'Uva', preco:9.00},
    ]



    let ulPaiProdutos = document.querySelector('#produtos');
(()=>{ //lista interativa

        for(let produto of frutas){   
            let liProdutos = document.createElement('li');
            for(let frt in produto){
                if(frt == 'preco'){
                    ulPaiProdutos.appendChild(liProdutos).setAttribute('data-preco', produto[frt]);  //atribuir tudo que está com preço com um dataset
                }else{  
                    ulPaiProdutos.appendChild(liProdutos).textContent = produto[frt]; //criar nome das frutas na lista
                }
            }
        }

})();
    let cestaDoCliente = document.querySelector('#cestaDoCliente');
    let ulPaiProdutosAll = document.querySelectorAll('#produtos');
    let mostraTotalCompra = document.querySelector('#mostraTotalCompra');
    let soma = 0;

    let armazen = []

    ulPaiProdutosAll.forEach(function(list){
        ulPaiProdutos.addEventListener('click', function(elemento){ //click

        if(armazen.indexOf(elemento.target) != -1){  //analizar se ja tem e mandar mensagem erro
            alert(`O produto "${elemento.target.textContent.toUpperCase()}" já está na cesta`);
        }

        else{//fim da mensagem de erro     //add item na cesta
            let liProdutosCesta = document.createElement('li');
            cestaDoCliente.appendChild(liProdutosCesta).textContent = elemento.target.textContent;
            armazen.push(elemento.target);//add item no armazen para n add dnv

                                                                //soma

            soma += Number(elemento.target.dataset.preco);
            console.log(soma);
            mostraTotalCompra.value = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            }
        })
    })
    
}
// }

export {funcaoPrincipal};
