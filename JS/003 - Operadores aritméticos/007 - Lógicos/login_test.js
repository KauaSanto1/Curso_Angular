const email = "email@teste.com";
const password = "12345";
const login = "user";

const digit_email = "email@teste.com";
const digit_password = "2345";
const digit_login = "user";

//console.log ( login === digit_login && password === digit_password);

console.log("-------");

// O código a baixo seria uma simulação de um sistema de login, o computador vai checar se o usuário ou e-mail digitados junto a sua senha, estã corretos, Ele consegue fazer a verificação de apenas usuário ou apenas de e-mail, para simular sites reais que permitem você usar e-mail ou user para login

if(email === digit_email && password === digit_password || login === digit_login && password === digit_password){
    console.log("Login feito com sucesso!");
} else {
    console.log("Usuário ou senha incorretos, tente novamente!");
}