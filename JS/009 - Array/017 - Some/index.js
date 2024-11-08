const pedidos = [
    {
       id: 11,
       nome: "Kauã",
       alimentos: "Coxinha",
       bebida: "Refrigerante"
    },
    {
        id: 12,
        nome: "João",
        alimentos: "Hamburguer",
        bebida: "Refrigerante"
     },
     {
        id: 13,
        nome: "Pedro",
        alimentos: "Pizza",
        bebida: "Refrigerante"
     },
     {
        id: 14, nome: "José", alimentos: "Macarrão", bebida: "Refrigerante"
     }
    ];

//Como o " some " funciona? Ele vai verificar se tem algum valor identico ao que estou procurando, caso tenha ele informa True.
//Nota - Quando falo identico, é realmente igual, letras maiúsuclas/minúsculas, em falta e outras variáveis que criem alguma diferenciação no valor, farão que o resultado seja false
const temPapa = pedidos.some((eLement) => {
        return eLement.alimentos ==="Pizza"
    });
    console.log(temPapa)

    console.log("----------------------------")

//No exemplo a baixo da false pois a Pizza cadastrada no objeto começa com P maiúsculo.
    const temPapa1 = pedidos.some((eLement) => {
        return eLement.alimentos ==="pizza"
    });
    console.log(temPapa1)