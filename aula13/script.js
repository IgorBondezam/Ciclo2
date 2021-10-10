            // let Pessoas = {
            //     nome:"Steve Roger",
            //     idade:"90 anos",
            //     heroi:"Capitão América",
            // }

            // for(let propri in Pessoas){
            //     console.log(Pessoas.nome);
            //     console.log(Pessoas.idade);
            //     console.log(Pessoas.heroi);  

            // }




// let ar =["nome"=>"Marcelo"]
// ar[nome]




        // let frutas = ["Melancia", "Manga", "Banana", "Uva"];


        // for(let nomeFrutas of frutas){
        //     console.log(nomeFrutas);
        // }

    let Herois = [
    {
        nome:"Steve Roger",
        heroi:"Capitão América",
        
    }, 
    {
        nome:"Tony Starck",
        heroi:"Homem de Ferro",
        
    }  
];

Herois.push({nome:"Bruce Banner", heroi:"Hulk"})

for(let marvel of Herois ){
    for(let M in marvel){
        console.log(marvel[M]);
    }
}
