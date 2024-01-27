let elementoJavaScript = document.createElement("li");

elementoJavaScript.innerHTML = "Javascript"
elementoJavaScript.id = "ling-js"

let listaLinguagens = document.querySelector(".lista-linguagens");
listaLinguagens.appendChild(elementoJavaScript)

let postagemJavascript = document.createElement("div")
postagemJavascript.innerHTML = `
    <h2 class="post-titulo">Javascript</h2>
    <p class="post-texto">Javascript é uma liguagem de programação</p>
`

const postagens = document.querySelector(".postagens");
postagens.appendChild(postagemJavascript)
