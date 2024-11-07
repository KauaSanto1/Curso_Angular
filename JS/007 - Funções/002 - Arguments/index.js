function soma(num1, num2){
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;

    }
    return "Digite apenas números!"
}

/*
Na linha a baixo estamos usando o próprio argumento de soma dentro de um argumento de soma
Como isso funciona? Iniciamos uma soma, dentro dela chamamos soma novamente e agora informamos seus calores (a primeira soma é 1 + 4), depois chamamos outro valor de soma e de novo damos seus valores, no final ele vai interpretar os números dentro da noma. 
No caso a baixo é 5 + 5 
 */
console.log(soma(soma(1, 4), soma(1, 4)));