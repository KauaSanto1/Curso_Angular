"use strict";

const h1 = document.querySelector("h1");

// style = font-family:"arial";
h1.style.fontFamily = "Arial";
h1.style.color = "blue"

const p = document.querySelectorAll("p")

p.forEach((eLement)=>{
    eLement.style.fontFamily = "Arial";
    eLement.style.fontSize = "22px";
})