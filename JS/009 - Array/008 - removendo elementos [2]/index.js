/*
  slice = pega os dados dentro de um range sem quebrar o Array
  splice = remove os dados do Array dentro de um range
*/
let arr = [
    { nome: "Kauã", tel: "(99) 99999 9999" },
    { nome: "Nome 1", tel: "(99) 99999 9999" },
    { nome: "Nome 2", tel: "(99) 99999 9999" },
    { nome: "Nome 3", tel: "(99) 99999 9999" },
    { nome: "Nome 4", tel: "(99) 99999 9999" },
  ];
  
  console.table(arr);
  
//Com o splice, o primeiro valor vai ser em qual casa do index da tabela você vai começar a remover os valores, o segundo valor é quantos serão removidos.
// No exemplo a baixo vai começar a partir do item 0 e serão removidos um total de 2 itens.
  console.log(arr.splice(0, 2));
  
//Com o slice ele vai começar a ler no primeiro valor que você colocar, porem o segunda vai ser aonde ele parar, no exemplo agora apenas vai ser lido 0 e 1
// const newArray = arr.slice(0, 2)
// const newArray = arr.slice(2, 4);
// console.table(newArray);
  
  console.table(arr);