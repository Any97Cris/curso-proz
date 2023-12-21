/**
Criem mais duas variáveis: uma que guarde a senha de um usuário e 
outra que guarde se o usuário tem permissões de administrador ou não. 
Lembrem que um usuário deve poder mudar sua senha à vontade, mas 
a permissão de administrador é atribuída apenas no momento da criação 
do usuário e não pode ser alterada depois. 

Na sequência, criem duas novas estruturas condicionais. 
A primeira estrutura deve imprimir a mensagem “Por favor, insira sua 
nova senha” caso o usuario e a senha estejam corretos, e imprimir
“Username / senha incorretos” caso qualquer um dois esteja errado.
A segunda estrutura condicional deve imprimir a mensagem 
“Você não pode acessar esta parte do sistema” caso o usuário não 
tenha permissões de administrador, e a mensagem “Bem-vindo(a) à 
área de administrador” caso tenha sim as permissões necessárias. 
 */

let senha = ""
const usuario = "outro"

if(senha != "" && senha == senha && usuario == "admin"){
  console.log("Por favor, insira sua nova senha")
  console.log("Bem-vindo(a) à area de administrador!")
}else if(senha != "" && senha == senha && usuario == "comum"){
  console.log("Você não pode acessar esta parte do sistema")
}else{
  console.log("Usuario não cadastrado")
}

