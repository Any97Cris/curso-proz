//tipos de váriaveis
const id = 26;
let username = "Crisciany";
let numero = 26;
let palavra = 'teste';

if(numero == id || palavra == username){
    console.log("Quer alterar sua senha?");
}else{
    console.log("Usuário sem autorização");
}


let numeros = [ 2,5,7,10]
console.log(numeros)

let usuario = {
    id: 26,
    username: "Crisciany Silva"
}

if(usuario.id == numero || palavra == usuario.username){
    console.log("Quer alterar sua senha?");
}else{
    console.log("Usuário sem autorização");
}

let pessoa = {
    nome: "Any",
    idade: 28,
    altura: 1.82,
    fumante: false,
    comidasFavoritas: ['arroz', 'feijão'],
    familia: {
        mae: "Cristiane",
        pai: "Wanderley"
    }
}

console.log(pessoa.familia.mae)