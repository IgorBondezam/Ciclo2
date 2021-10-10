let nome = prompt("Qual seu nome?");
let peso = prompt("Qual o seu peso?");
let alt = prompt("Qual a sua altura?");

function IMC( nome, peso, alt){
n=Number(nome);
p=Number(peso);
a=Number(alt);
var result = p/(a**2);
document.write(`Olá ${nome}, você pesa ${peso}, tem ${alt} metro de altura. Portanto ${nome} seu IMC é de ${result}.`)
}
document.write(IMC(nome, peso, alt));