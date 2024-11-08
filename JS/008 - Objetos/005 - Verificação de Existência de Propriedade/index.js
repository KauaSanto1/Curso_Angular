const Tenis = {
    tamanho: 41,
    estoque: true,
    secret: "shhhh",
    n: 5,
    link: {a: "Valor 1", b: {c:"Valor 2"}},
    //marcas: [{nome: "Nike"}, {nome: "Adidas"}],
};

if (Tenis.hasOwnProperty("tamanho")){
    console.log("Tênis disponível!")
} else {
    console.log("Modelo de Tênis indisponível!")
}

console.log("tamanho" in Tenis);
console.log("asda" in Tenis);