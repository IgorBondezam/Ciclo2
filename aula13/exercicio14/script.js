 function PesqFrutas(){
    let ListaFrutas=[
    {
    Fruta:"Banana",
    preco: 9 ,
    },
    {
    Fruta:"Maçã",
    preco: 5 ,
    },
    {
    Fruta:"Jabuticabas",
    preco: 3 ,
    },
    
 ]

    for(let F of ListaFrutas){
        for(let expic in F){
            console.log(`${expic} --->  ${F[expic]}`);
        }
    }
 }
 PesqFrutas();