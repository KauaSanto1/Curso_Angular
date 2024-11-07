//console.log( 1 === 1 && 2 >= 1 );

const email = "email@teste.com";
const login = "user";

const digit_email = "email@teste.com";
const digit_login = "user";

//console.log ( login === digit_login && password === digit_password);

console.log("-------");

//Exemplo a baixo seria para envio de um e-mail de alteração de senha, aonde os site vai perguntar o e-mail ou usuário da pessoa, assim caso algum desses dados existir no banco o e-mail de troca de senha seria enviado.
function validacao() {
    if (email === digit_email || login === digit_login) {
        return "E-mail de alteração de senha enviado";
    } else {
        return "E-mail ou login de cadastro não existe!";
    }
}

console.log(validacao());