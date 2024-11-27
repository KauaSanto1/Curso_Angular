"use strict"

const container = document.querySelector(".container");

const newAfter = document.createElement("h1")
newAfter.innerText = "Olá! Eu sou o texto do after"

const newBefore = document.createElement("h1")
newBefore.innerText = "Olá! Eu sou o texto do before"

container.after(newAfter)
container.before(newBefore)

container.after("Olá")
container.before("Olá")