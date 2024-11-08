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

/*
Ele procura e retorna o primeiro valor encontrado da array
Exemplo: Você procura no objeto nomes, o nome em questão João, mesmo que tenha 999 João, irá apenas lhe mostrar o primeiro.
*/

const findSucos = pedidos.find((eLement) => {
    return eLement.bebida === "Refrigerante";
})

console.log(findSucos)