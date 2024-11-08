let Tenis = {
    tamanho: 41,
    estoque: true,
};

let link = {link: {a: "Valor 1", b: {c: "Valor 2"}}};

let clone1 = Tenis;
let merge1 = Object.assign(Tenis, link);
let merge2 = {...Tenis, ...link};

console.log(clone1);

clone1.estoque = false;
merge1.link.a = "AAAAAAa";
console.log(merge1);
console.log(merge2);
console.log(Tenis);