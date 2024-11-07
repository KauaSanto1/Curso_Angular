console.log(123);
console.log(Number("123" + 1));
console.log(Number("123" - 1));

console.log('------------------------');

console.log(typeof Number("123"));
console.log(typeof "123");

/*
    Forma correta:
    Number 123
    Number 123 + 123 = 246
    Number("123" - 1 = 122)

    Forma incorreta (possível gerar bugs)
    Number "123" - 1 = 122
    Number "123" * 2 = 246
*/