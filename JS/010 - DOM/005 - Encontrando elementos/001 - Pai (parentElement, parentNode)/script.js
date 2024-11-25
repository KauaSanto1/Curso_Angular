"use sctrict"

const strong = document.querySelector("strong");
const p = document.querySelector(".paragrafo");

console.log(strong.parentElement);
console.log(strong.parentNode);

console.log(p.parentElement);
console.log(p.parentNode);

console.log(document.documentElement.parentNode === document);
console.log(document.documentElement.parentElement === document);

