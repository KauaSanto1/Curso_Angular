/*
IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.

Como calcular IMC? 
O IMC é calculado dividindo o peso (em kg) pela altura ao quadrado (em m), de acordo com a seguinte fórmula: IMC = peso / (altura x altura)

No calculo deve se retornar os seguintes valores para o usuário:

Resultado do Calc     | Resultado do usuário 
Abaixo de 17          | Muito abaixo do peso
Entre 17 e 18.49      | Abaixo do peso
Entre 18.5 e 24.99    | Peso normal
Entre 25 e 29.99      | Acima do peso
Entre 30 e 34.99      | Obesidade I
Entre 35 e 39.99      | Obesidade II
*/

const peso = 75;
const altura = 1.75;
//const altura_ao_quadrado = altura * altura;

//IMC = peso / altura_ao_quadrado
const IMC = Number(peso / (altura * altura)).toFixed(2)
// console.log(`Seu IMC é de ${IMC}`);

// if(IMC <= 17){
//     console.log(`Seu IMC é de ${IMC}, você está muito abaixo do peso`)
// } 

// if(IMC > 17 && IMC < 18.49){
//     console.log(`Seu IMC é de ${IMC}, você está a abaixo do peso`)
// }

// if(IMC > 18.5 && IMC < 24.99){
//     console.log(`Seu IMC é de ${IMC}, você está com o peso normal`)
// }

// if(IMC > 25 && IMC < 29.99){
//     console.log(`Seu IMC é de ${IMC}, você está acima do peso`)
// }

// if(IMC > 30 && IMC < 34.99){
//     console.log(`Seu IMC é de ${IMC}, você está em obesidade de grau I`)
// }

// if(IMC > 35 && IMC < 39.99){
//     console.log(`Seu IMC é de ${IMC}, você está em obesidade de grau II`)
// }

switch(true){
    case IMC < 17:
        console.log(`Seu IMC é de ${IMC}, você está muito abaixo do peso`);
        break;

    case IMC > 17 && IMC < 18.49:
        console.log(`Seu IMC é de ${IMC}, você está a abaixo do peso`)
        break;
    case IMC > 18.5 && IMC < 24.99:
        console.log(`Seu IMC é de ${IMC}, você está com o peso normal`)
        break;
    case IMC > 25 && IMC < 29.99:
        console.log(`Seu IMC é de ${IMC}, você está acima do peso`)
        break;
    case IMC > 30 && IMC < 34.99:
        console.log(`Seu IMC é de ${IMC}, você está em obesidade de grau I`)
        break;
    case IMC > 35 && IMC < 39.99:
        console.log(`Seu IMC é de ${IMC}, você está em obesidade de grau II`)
        break;
}