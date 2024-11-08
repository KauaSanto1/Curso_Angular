const pedidos = [
    {
       id: 11,
       nome: "Kauã",
       alimentos: "Coxinha",
       bebida: "Suco Laranja"
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
        id: 14, nome: "José", alimentos: "Macarrão", bebida: "Água"
     }
    ];

const filterSucos = pedidos.filter((eLement) => {
    return eLement.bebida === "Refrigerante";
})

console.log(filterSucos)