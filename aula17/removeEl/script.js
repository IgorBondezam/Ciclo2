window.onload = function(){


    //calcular
    function calcular(idProduto, resultado){
        const preco = document.querySelectorAll(`#${idProduto} > li`);
        const vResultado = document.querySelector(`#${resultado}`);
        let total = 0;
        
        for( let i of preco){
            total += Number(i.dataset.preco); 
        }
        vResultado.value = total; 
            
        }
    //fim-Calcular

    function removerProdutos(id){
        const lista = document.querySelectorAll(`#${id} > li`);

        for(let produto of lista){
            produto.addEventListener("click", function(){
                produto.remove();
                calcular("produtos", "somaTotal");

            })
        }
    }


    removerProdutos("produtos");
    calcular("produtos", "somaTotal");
}

export {calcular, removeProdutos};