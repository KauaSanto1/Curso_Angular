const velocidade = 85;
const warn = 85;


// Os operadores ternários servem para substituir o if/else, interrogação ? é verdadeiro.
// Dois pontos : é falso
const condicacao = velocidade >= warn 
    ? console.log("Você recebeu uma Multa!")
    : console.log("Marcha");

    /*
if (velocidade >= warn){
    console.log("Você recebeu uma Multa!")
}
    */