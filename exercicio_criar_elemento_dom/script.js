let titulo = document.createElement("h2")
let elementoLi1 = document.createElement("li");
let elementoLi2 = document.createElement("li");
let elementoLi3 = document.createElement("li");
let listaItens = document.querySelector(".lista-itens");
let body = document.querySelector("body");

//titulo
titulo.innerHTML = "Produto à venda"
titulo.id = "titulo-produto"

//Itens 
elementoLi1.innerHTML = "Nome"
elementoLi1.id = "nome-produto"
elementoLi2.innerHTML = "Descrição"
elementoLi2.id = "desc-produto"
elementoLi3.innerHTML = "Preço"
elementoLi3.id = "preco-produto"

//Cria titulo
body.appendChild(titulo).insertAdjacentElement('beforebegin', listaItens)
body.insertAdjacentElement('afterbegin', listaItens)

//Cria elemento li
listaItens.appendChild(elementoLi1)
listaItens.appendChild(elementoLi2)
listaItens.appendChild(elementoLi3)



console.log()