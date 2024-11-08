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
    {
      nome: "Nome 4",
      sobreNome: "Sobrenome 4",
    },    
  ];

for (let item of myArrayObj){
    if(item.nome === "Nome 1"){
        console.log("Primeiro nome detectado!")
        continue;
    }

    if(item.nome =="Nome 3"){
        console.log(item)
        break;
    }

//continue - Vai continuar a ação mesmo que o parâmetro seja alcançado
//break - Vai interromper a ação quando o parâmetro for alcançado
    console.log(item);
}