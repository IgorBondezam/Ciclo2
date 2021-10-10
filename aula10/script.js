//match() procura uma palavra em uma string
// g/i/m  =---------------------------------= g - global       i - icase      m - retornar string
            // 'let nome ="Igor Bondezam";

            // console.log( nome.match("o"))

//search() procura pela ocorrencia e retornando a posição na cadeia da string

        // let nome ="Igor Bondezam";
        // console.log(nome.search(/i/i)) // =----= /i no fim é para procurar independente se é CAPS ou n

//replace() substitui uma string por outras

            // let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            //  Labore ipsam dicta ea odio temporibus eos soluta quisquam ut illo,
            //   eius adipisci est modi iusto autem sapiente! Illum voluptatum temporibus aperiam!
            // `
            // var strUltra = str.replace(/i/gi, "y");
            // console.log(strUltra);

//localeCompare() efetua a comparação entre duas strings

            // let gato = "gato";
            // let outroGato = "gato";
            // console.log(gato.localeCompare(outroGato));

// toString() converte algo em string

            // let num = Number("1");
            // console.log(num.toString());


// toLowerCase() converte uma string em minúsculo

            // let str = `Lorem IPSUM dolor sit amet consectetur adipisicing elit.
            //         Labore ipsam dicta ea odio temporibus eos soluta quisquam ut illo,
            //         eius adipisci est modi iusto autem sapiente! Illum voluptatum temporibus aperiam!
            //          `;
            //     console.log(str.toLowerCase())


// toUpperCase() converte uma string em MAIUSCULO

            // let str = `Lorem IPSUM dolor sit amet consectetur adipisicing elit.Labore ipsam dicta ea odio temporibus eos soluta quisquam ut illo,eius adipisci est modi iusto autem sapiente! Illum voluptatum temporibus aperiam!`;
            //      console.log(str.toUpperCase())


//trim() Faz a remoção dos espaços antes e depois da string especifica

            // let str = `    Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore ipsam dicta ea odio temporibus eos soluta quisquam ut illo,eius adipisci est modi iusto autem sapiente! Illum voluptatum temporibus aperiam!`;
            // console.log(str.trim())


//NaN Quando uma string for passada por um Number(), e não conseguir efeturar a conversão, ele ficará NaN
//Not and Number
//isNaN retorna verdadeiro ou falso
            // let num = Number('ioi');
            // console.log(isNaN(num))


// toFixed() analisa um valor flutuante e retorna uma string conforme o parametro de casas

            let valor = 2.456;
            console.log(valor.toFixed(1))

//toLocaleString() irá retornar uma string com uma representação da moeda definida

console.log(valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))