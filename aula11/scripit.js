// function Pessoa(nome){
//     this.nome = nome;
// }

// Pessoa.prototype.msg = function(){
//     alert("Olá " + this.nome);
// }

// let NovaPessoa = new Pessoa("José");
// let OutraPessoa = new Pessoa("Maria");
// console.log(NovaPessoa)


// NovaPessoa.msg();
// OutraPessoa.msg();


// let Pessoa2 ={
//     'nome':'',
//     'idade':'',

// }

// // console.log(Pessoa2);
// Pessoa2.__proto__.msg = function(){
//     alert("Olá " +Pessoa2.nome);
// }

// let P=Pessoa2;
// P.nome = "Igor";

// P.msg();
// console.log(P);


let Pessoa3 = [
    {
        'nome':'Marcelo',
        'idade':25,
        'sexo': 'M',
    },
    {
        'nome':'Mauricio',
        'idade':9,
        'sexo': 'M',
    },
    {
        'nome':'dilma',
        'idade':30,
        'sexo': 'F',
    },
    {
        'nome':'Judite',
        'idade':30,
        'sexo': 'F',
    },
]

let NPessoa = Pessoa3;
console.log(NPessoa[1].nome);
console.log(`Existem ${NPessoa.length} cadastradas`)








