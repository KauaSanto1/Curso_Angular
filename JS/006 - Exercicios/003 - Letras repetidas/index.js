// Precisamos mostrar quantas letras repetidas aparecem em uma palavra
// exp: Abacate = {a: 3, b: 1, c: 1, t: 1, e: 1}

// Esse vai substituir apenas o primeiro espaço, no caso do exercício não é o correto
// const palavra = "Kaua Vinicius Santos".toLowerCase().replace(" ", "");

// Esse vai substituir todos os espaços, igual já está acontecendo com a outra função, ambos tem o mesmo resultado
// const palavra = "Kaua Vinicius Santos".toLowerCase().replaceAll(" ", "");

//Na parte da substituição, ele vai procurar a palavra santos exatamente como está escrita na caixa, porem como há espaços antes e depois nas / /, ele não vai achar, pois ele procura exatamente o que está escrito, no caso " santos" pois realmente há um espaço para o nome do meio para o último
// const palavra = "Kaua Vinicius Santos".toLowerCase().replace(/ santos /g, "");
//    --------------kaua vinicius santos 

const palavra = "Kaua Vinicius Santos".toLowerCase().replace(/ /g, "");
let letras = {}

console.log(palavra.length);

for(let i = 0; i < palavra.length; i++){
    if(letras[palavra[i]]){
        letras[palavra[i]]++
    }else{
        letras[palavra[i]] = 1;
    }
}

console.log(letras);