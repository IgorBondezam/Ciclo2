window.onload = function(){

    function tabuada(x){
        resposta.innerHTML = '';
        if(x>0 && x<11){
            i=0
           while( i<11){
               resposta.innerHTML +=` ${x} x ${i} = ${x*i} <br>`; 
                i++;
            }
        }
        else if(x>10){
            resposta.innerHTML="Número inválido!";
        }
        else if(x<0){
            resposta.innerHTML="Número inválido!";
        }
        else if(typeof(x) === "string"|| "boolean"){
            resposta.innerHTML='Isso não pode ser adequado como um número!';
        }
        
        
    }
    


const botao = document.querySelector("#btn");
const texto = document.querySelector("#txt");
const resposta = document.querySelector("#resposta");


botao.addEventListener('click', function(){
    
    x = texto.value;
    tabuada(x);
})


}
