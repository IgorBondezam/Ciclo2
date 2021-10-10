window.onload = function(){

    let listaP = [
        {fruta:'Melancia', preco:'5.00'},
        {fruta:'Maçã', preco:'3.00'},
        {fruta:'Laranja', preco:'1.50'},
        {fruta:'Abacate', preco:'4.50'},
        {fruta:'Uva', preco:'9.00'},

    ]

    const total = document.querySelector("#mostraTotalCompra");
    const produtos = document.querySelector("#produtos");
    let produtoCliente= document.querySelector("#cestaDoCliente");

        //cria lista de mercadoria
    (()=>{
        let totalzin =0;

        for( let pro of listaP){
            i=0
            let filhoLi = document.createElement("li", id = i);
    
            for( let objetos in pro){
                if(objetos == 'preco'){
                    produtos.appendChild(filhoLi).setAttribute('data-preco', pro[objetos]);
                    totalzin += pro[objetos];
                }
                else{
                produtos.appendChild(filhoLi).textContent = `${pro[objetos]}`;
                }
            }

        }

    
    
    
        //fim da lista

        //lista do cliente

    
        let ListaParaCesta= listaP;
        let filhoCesta = document.createElement("li");
             produtos.addEventListener('click', function(){
                for( let c of listaP){
                    for(let cesta in c){
            produtoCliente.appendChild(filhoCesta).textContent = `${c.preco}`
                }
            }
        })  

    




        // produtos.addEventListener('click', function(va){
        //     let filhoCesta = document.createElement("li");
        //     let valor = 0
        // for( let c of listaP){
        //     for(let cesta in c){
        //         if(cesta == 'preco'){
        //         produtoCliente.appendChild(filhoCesta).setAttribute('data-preco',c[cesta]) ;
        //         }else{
        //         produtoCliente.appendChild(filhoCesta).textContent = `${listaP}`;
        //         }
        //     }
        // }
    // })


    
})() 

    
}
