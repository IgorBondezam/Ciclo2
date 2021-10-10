window.onload = function(){

    const btnBuscar = document.querySelector("#btnBuscar");
    const txtNome = document.querySelector("#nomeCliente")




    btnBuscar.addEventListener("click", function(){
        let dataSetCliente = txtNome.dataset.codigo;
        console.log(dataSetCliente);

    })



}