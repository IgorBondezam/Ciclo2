function tabuada(x){
    if(x>0 && x<11){
        for(let i=0; i<11; i++){
            let mult = x*i;
            console.log(`${x} x ${i} = ${mult}`);
        }
    }
    else if(x>10){
        alert("Número inválido!");
    }
    else if(x<0){
        alert("Número inválido!");
    }
    else if(typeof(x) === "string"|| "boolean"){
        alert('Isso não pode ser adequado como um número!')
    }
    
    
}
tabuada(prompt("Digite um número de 1 à 10;"));