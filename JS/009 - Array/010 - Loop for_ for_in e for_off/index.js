const myArray = [1,2,3,4,5,6];
const myArrayObj = [
    {
      nome: "Nome 1",
      sobreNome: "Sobrenome 1",
    },
    {
      nome: "Nome 2",
      sobreNome: "Sobrenome 2",
    },
    {
      nome: "Nome 3",
      sobreNome: "Sobrenome 3",
    },
  ];

//for ([inicialização]; [condição]; [expressão final]) 

// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
// }

// for (let i = 0; i < myArrayObj.length; i++) {
//   console.log(myArrayObj[i].nome, myArrayObj[i].sobreNome);
// }

//for of
// item não é um comando ou objeto, ele é simplemente uma variável que foi utilizada, ela é a mesma coisa do " i " dos exemplos a acima
for (let item of myArrayObj){
    console.log(item.nome, item.sobreNome)
}
console.log("-------------------")

//for in
// O for in serve para você pegar a categoria daquele objeto, no caso as categorias são nome e sobreNome, sendo seus valores respectivos Kauã e Santos.
// Para que usar? Sinceramente agora eu não sei, mas é legal ter a possibilidade
const obj = {nome: "Kauã", sobreNome: "Santos"};

for (let item in obj){
    console.log(item);
}