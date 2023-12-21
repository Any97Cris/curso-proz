/**
 * Se for maior que 18 anos e tiver habilitação, pode dirigir. Senão não pode.
 */

let idade = 16
let habilitacao = "não"

if(idade > 18 && habilitacao == "sim"){
  console.log("Pode dirigir")
}else{
  console.log("Não Pode dirigir")
}