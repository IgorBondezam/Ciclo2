
let palavra = prompt('Escreva uma palavra:');


function invert(palavra){
    for(let i=palavra.length-1; i>-1; i--){

        console.log(palavra[i]);


    }
}

invert(palavra);

console.log(" ");

let palavra2 = prompt('Escreva outra palavra:');


invert(palavra2);
