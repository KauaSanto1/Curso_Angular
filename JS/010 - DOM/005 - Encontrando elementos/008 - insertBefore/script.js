 "use strict"

 const container = document.querySelector(".container");

const paragrafo = container.querySelector(".paragrafo")

const beforeText = document.createElement("h2")
beforeText.innerText = ("o beforeText funcionou!")

container.insertBefore(beforeText, paragrafo)