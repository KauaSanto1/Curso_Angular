/*
Um escopo determina quais dados poderão ser acessados por determinadas partes do código
*/


let nome_exemplo1 = "Exemplo 1";
console.log(nome_exemplo1);

/////////////

{
    let nome_exemplo2 = "Exemplo 2";
    console.log(nome_exemplo2);
}

/*
{
    let nome_exemplo3 = "Exemplo 3"
}

console.log(nome_exemplo3)
    */

let nome_exemplo4 = "Exemplo 4";
{console.log(nome_exemplo4)};

/////////////

/*
Exemplos a cima
Exemplo 1 - Variável e sua chamada fora de uma caixa(escopo), funciona normal
Exemplo 2 - Variável e sua chamada dentro da caixa, funciona normal
Exemplo 3 - Variável dentro da caixa e sua chamada fora da caixa, resulta em erro
Exemplo 4 - Variável fora da caixa e sua chamada dentro da caixa, funciona normal.
*/