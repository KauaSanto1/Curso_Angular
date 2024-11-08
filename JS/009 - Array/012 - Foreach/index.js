const myArrayObj = [
{
    nome: "Ronaldinho",
    sobreNome: "Sobrenome 1",
},
{
    nome: "Nome 2",
    sobreNome: "Sobrenome 2",
},
{
    nome: "Nome 3",
    sobreNome: "Sobrenome 3",
}
];

myArrayObj.forEach((item, index) => {
    if(item.nome === "Ronaldinho"){
        return console.log("Hoje chefe?");
    }
    console.log(index, item.nome)
});