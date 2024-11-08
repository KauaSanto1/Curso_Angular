const Tenis = {
    tamanho: 41,
    estoque: true,
    secret: "shhhh",
    n: 5,
    link: {a: "Valor 1", b: {c:"Valor 2"}},
    //marcas: [{nome: "Nike"}, {nome: "Adidas"}],
};

const {tamanho, estoque, marcas = "Não há marcas disponíveis!"} = Tenis;
console.log(tamanho,estoque,marcas);

const { secret: randomNumber, n: avaliacoes } = Tenis;
// console.log(bloons)
console.log(randomNumber);
console.log(avaliacoes);

// A variável n no objeto representa um dado sensível que não é bom deixar em evidência o que ele se refere, assim damos um nome lúdico a ele, na parte a baixo aonde é declarado o random number e avaliações, é aonde realmente específicamos o que aqueles dados se tratam.

const {
    link: {b: {c}},
} = Tenis;
console.log(c);

console.log(Tenis.link.a, Tenis.link.b.c);