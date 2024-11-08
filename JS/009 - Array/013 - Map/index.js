const pedidos = [
    {
       id: 11,
       nome: "Kauã",
       alimentos: "Milkshake",
       bebida: ""
    },
    {
        id: 12,
        nome: "João",
        alimentos: "Hamburguer",
        bebida: "Coca"
     },
     {
        id: 13,
        nome: "Pedro",
        alimentos: "Pizza",
        bebida: "Suco Laranja"
     },
     {
        id: 14, nome: "José", alimentos: "Macarrão", bebida: "Água"
     }
    ];
/*
- O método Map além de interar o Array, ele também é muito bom para editar o inteirado 
*/

// pedidos.map((element, index) => {
//     console.log(index, element);
// });

// - O que foi feito em baixo é a simulação de uma alteração no pedido.
// Vamos imaginar que o José pediu um prato de macarrão, foi lançado no sistema porem ele mudou de ideia e pegou apenas uma coxinha mesmo,
pedidos.map((element, index) => {
   if (element.id === 14 && element.alimentos ==="Macarrão"){
      element.alimentos = "Coxinha";
      element.alimentos = "Coca Geladinha"
   }
});

console.log(pedidos);

