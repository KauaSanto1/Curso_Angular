// const pedidos = [
//     {
//        id: 11,
//        nome: "Kauã",
//        alimentos: "Coxinha",
//        bebida: "Suco Laranja"
//     },
//     {
//         id: 12,
//         nome: "João",
//         alimentos: "Hamburguer",
//         bebida: "Refrigerante"
//      },
//      {
//         id: 13,
//         nome: "Pedro",
//         alimentos: "Pizza",
//         bebida: "Refrigerante"
//      },
//      {
//         id: 14, nome: "José", alimentos: "Macarrão", bebida: "Água"
//      }
//     ];

    /*
    É bacana entender que, se você tem uma condição, ele vai tratar toda sua Array, assim é possível verificar se eles estão ok
    */

// const temRefri = pedidos.every((eLement) => {
//     return eLement.bebida ==="Refrigerante"
// });

//No caso a cima, pq está dando false? Ele está encontrando o refri, porem toda via entretanto, a função se chama every :D, ou seja TODOS tem que ser refrigerante para ele indicar true

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

     const temRefri = pedidos.every((eLement) => {
        return eLement.bebida ==="Refrigerante"
    });
    console.log(temRefri)