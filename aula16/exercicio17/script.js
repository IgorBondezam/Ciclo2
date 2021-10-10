window.onload = function(){

    const txt1 = document.querySelector("#text1");
    const txt2 = document.querySelector("#text2");
    const txt3 = document.querySelector("#text3");

    text3.addEventListener("blur", function(){
        text3.value = Number(text1.value) + Number(text2.value);
    })

}

