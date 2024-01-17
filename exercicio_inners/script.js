const novoTitulo = document.querySelector("#titulo")
const tagA = document.querySelector("a")
const addItens = document.querySelector("ul")
const addItensComLink = document.querySelector("ol")


novoTitulo.innerText = "Novo Título com JS";
tagA.innerText = "link"
addItens.innerHTML = `<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
`

addItensComLink.innerHTML = `<li><a href="https://www.lipsum.com/feed/html" target="blank">link 1</a></li>
<li><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/ol" target="blank">link 2</a></li>
<li><a href="https://www.speedtest.net/pt" target="blank">link 3</a></li>
`

