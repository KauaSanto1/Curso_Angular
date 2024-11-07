// Falsy = false, 0, "", NaN, undefined e null
// Truthy = Todos os outros diferentes do [ falsy ]

//Vai dar nulo por conta do if ser nulo
if(null){
    console.log("Bom dia!");
} else {
    console.log("Boa noite!");
}

//Vai dar verdadeiro pois eu estou pedindo, se não for null, vai dar verdadeiro.
if(!null){
    console.log("Verdadeiro!");
}else {
    console.log("Falso!");
}