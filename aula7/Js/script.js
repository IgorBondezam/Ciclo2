let msg = ()=>{
    alert("Estou feliz da vida com Js");
}

//console.log(msg());

// (function(produto, preco){
//     alert(" O produto é " +produto + " e o preço é de R$ " + preco);
// })("biscoito", 2.15);

var n1 = prompt("Digite valor 1: ");
var n2 = prompt("digite valor 2:");


function soma(num1, num2){ //parseInt substitui string para numero.
    resultado = parseInt(num1) + parseInt(num2); // parseInt(inteiros) pode ser substituido por parseFloat(decimais) e o Number(TODOS OS NUMEROS)
    console.log(resultado);
}

soma(n1, n2);