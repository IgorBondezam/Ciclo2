//WHILE


            // let loop =0;
            // let cores= ["verde", "vermelho"];

            // while(loop<cores.length){
            //     console.log(cores[loop]);
            //     loop++;
            // }

let teste = 0;
do{

    teste=Number(prompt("Escolha um número:"));
    switch(teste){
        case 1:
            alert("Cadastrando");
        break;
        case 2:
            alert("Consuntando");
        break;
        default:
            alert("Opção inválida");
        break;
    }

}while(teste!=0)