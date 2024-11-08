const pedidos = [
    {
       id: 11,
       nome: "Kauã",
       alimentos: "Coxinha",
       bebida: "Refrigerante",
       preco: 9
    },
    {
        id: 12,
        nome: "João",
        alimentos: "Hamburguer",
        bebida: "Refrigerante"
,       preco: 15
     },
     {
        id: 13,
        nome: "Pedro",
        alimentos: "Pizza",
        bebida: "Refrigerante"
,       preco: 14
     },
     {
        id: 14, nome: "José", 
        alimentos: "Macarrão", 
        bebida: "Refrigerante",       
        preco: 17
     }
    ];

/*
A ideia dele é pegar todos os valores um Array e condensa-los em um só
*/

const faturamentoHoje = pedidos.reduce((total, eLement)=> {
    return total + eLement.preco;
},0);
//Esse zerp no final representa a tag total, ou seja o valor começa com 0, se alterarmos, se altera o valor inicial da conta.
console.log(faturamentoHoje);