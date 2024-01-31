let body = document.querySelector("body");
let listaItens = document.querySelector(".lista-itens");
let titulo = document.createElement("h2")
let elementoLi1 = document.createElement("li");
let elementoLi2 = document.createElement("li");
let elementoLi3 = document.createElement("li");


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
body.insertBefore(titulo, listaItens);

//Cria elemento li
listaItens.appendChild(elementoLi1)
listaItens.appendChild(elementoLi2)
listaItens.appendChild(elementoLi3)



//titulo
let tagTitulo = document.createElement("h2");
tagTitulo.innerHTML = "Produtos à Venda";
document.body.append(tagTitulo)

//lista
let tagUl = document.createElement("ul");
tagUl.innerHTML = `
    <li id="nome-produto">Nome</li>
    <li id="desc-produto">Descrição</li>
    <li id="preco-produto">Preço</li>
`
document.body.append(tagUl)