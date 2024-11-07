/*
var Restrições de escopo/caixa {} não se aplicam a ele, pode gerar bugs
let  Gerado dentro de um escopo, o dado pode ser alterado
const  Gerado dentro de um escopo, porem pode se armazenar um dado apenas 1 vez
*/

var cachorro = "Bob";
console.log(cachorro);

let quant_carros;

quant_carros = 1;

console.log(quant_carros)

cachorro = "Luma";
console.log(cachorro)
//Você pode alterar um dado diretamente da variável

let cor = "Roxo";
console.log(cor);

cor = "Azul";
console.log(cor);

const nome = "Kauã";
console.log(nome);
//A const você não pode alterar durante a execução do código, const são para variáveis que não terão alteração durante a execução do código.

// Como const é imutável, a variável deve ser declarada por inteiro logo de cara igual no exemplo a cima

// Variável let você pode apenas declara-la e depois dar seu valor 