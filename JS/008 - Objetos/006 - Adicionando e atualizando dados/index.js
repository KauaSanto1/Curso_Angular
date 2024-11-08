let Tenis = {
    tamanho: 41,
    estoque: true,
};

Tenis.tamanho = 42;
Tenis.estoque = false;
// Tenis.preco = "R$120"
Tenis["preco"] = "R$120"

console.log(Tenis);
console.log(Tenis["preco"])