    // let m = "Olá";

    // // console.log(typeof m);

    // if(typeof m === "number"){
    //     console.log("Esse dado é um número")
    // }

window.onload=function(){
    //alert("Olá Povo do JS")

    const botao= document.getElementById("botao");
    const texto = document.querySelector("#txt");
    const divosa = document.querySelector("#divosa");


    botao.addEventListener("click", function(){
        divosa.innerHTML +=" " + texto.value + " ";
    })
}