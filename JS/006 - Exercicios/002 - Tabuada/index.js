/*
Precisamos mostrar a tabuada no console de 0 até 19 neste seguinte formato:

multiplicador x número = resultado
multiplicador x 0 = Resultado
multiplicador x 1 = Resultado
multiplicador x 2 = Resultado
multiplicador x 3 = Resultado
....

Obs.: Não se pode criar vários console.log(multiplicador x numero = resultado)
*/

const multiplicador = 99;

// for(let i = 0; i <= 10; i++){
//     const calc = multiplicador * i
//     console.log(`${i} multiplicado por ${multiplicador} é igual a ${calc}`)
// }

for(let i = 0; i <= 99999; i++){
    const calc = multiplicador * i
    console.log(`${i} x ${multiplicador} = ${calc}`)
}


//let i = 0
// chegará até o valor desejado, abaixo 10 = 10

//Assim o número fica amarelo e fica mais legal 😎👌
// for(let i = 0; i <= 10; i++){
//     console.log(`${i} multiplicado por ${multiplicador} é igual a`, i*multiplicador)
// }