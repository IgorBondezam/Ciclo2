let str = `Qualquer conteudo!`;

let str2 = `Uma outra string ${str}`;

console.log(str2);

//Arrays - coleção de dados.

//O Array é constituido por elementos.

const frutas = ["Uva", "Banana", "Laranja", "Melancia"]// - 4 elementos, mas sempre começa do 0 portanto 0,1,2,3


var x = prompt ("Digite o número correspondente à cada fruta: 1 - Uva, 2 - Banana, 3 - Laranja, 4 - Melancia");

let euGosto = `Eu gosto de ${frutas[x-1]}`;
// console.log(euGosto);

//Array bidimencional (Array dentro de outro Array)

let carro = [
    "hynday",
    "Tesla",
    "Fiat",
    antigos = [
        "Fusca",
        "Brasilia",
        "Kombi"
    ]
]
// alert(carro[3]);

console.log("Igor".length)// O js tbm identifica as strings como Array
console.log("Igor"[2])

console.log(carro.length); // carro.length - Saber o tamanho do Array
alert(carro[3][2]);
            // ↪ Esse segundo colchetes indica o numero do segundo array.