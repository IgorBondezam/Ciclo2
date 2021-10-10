window.onload = function(){

let produtos = [
    {descricao: "biscoito Mirabel", preco:2.20},
    {descricao: "Marmelada", preco: 3.20},
    {descricao: "Sabonete", preco: 6.20},
]

const listaProdutos = document.querySelector("#listaDeProdutos");
const total = document.querySelector("#total");




( ()=>{
    let totalzin =0;
    for( pro of produtos){
        const filhoLi = document.createElement("li");

        for(listaP in pro){
            if(listaP == 'preco'){
                listaProdutos.appendChild(filhoLi).setAttribute("data-preco", pro[listaP]);
                totalzin += pro[listaP];
            }
            else{
            listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
            }
        }
    }
    total.value = totalzin.toFixed(2);

} )() 



}