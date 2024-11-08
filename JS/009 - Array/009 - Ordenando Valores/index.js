// const stringArray = ["A", "B", "C", "K", "W", "P", "Q"]

//Usar o sort diretamente apenas para valores de letras ou strings, pois ao utulizar em números ele deixa tudo confuso. 
//Exemplo a baixo de como utilizar com números
// console.log(stringArray.sort());
// console.log(stringArray.reverse())

const numberArray = [10, 20, 30, 40, 50, 9999, 1000, 1, 55, 3];
// console.log(numberArray.sort());
console.log(numberArray.sort((a, b) => a - b));
console.log(numberArray.sort((a, b) => a - b).reverse());
//Diferença dos 4 logs
// 1º Ordena do maior para o menor
// 2º Ordena do menor para o maior
console.log(numberArray.sort((a, b) => b - a));
console.log(numberArray.sort((a, b) => b - a).reverse());
// 3º Ordena do menor para o maior porem ser reverse (o que é meio paia)
// 4º Ordena do maior para o menor só que aplicando o reverse no que já ta invertido maluquisse total.

const objArray = [
    {
      nome: "Kauã",
    },
    {
      nome: "Nay",
    },
    {
      nome: "José",
    },
    {
      nome: "Isabel",
    },
    {
      nome: "Marcio",
    },
    {
      nome: "Valentina",
    },
  ];

  console.log(objArray.sort((a,b) => a.nome.localeCompare(b.nome)));
  console.log(objArray.sort((a,b) => a.nome.localeCompare(b.nome)).reverse());
  