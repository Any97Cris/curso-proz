// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", function(){
    usernameLabel.classList.add("required-popup")
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", function(){
    usernameLabel.classList.remove("required-popup")
})

// Validar valor do input
usernameInput.addEventListener("change", function(evento){
    let valor = evento.target.value
    console.log(valor);

    if(valor.length < 3){
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText = "Seu username deve ter 3 ou mais caracteres";
        usernameHelper.classList.add("visible");
    }else{
        usernameInput.classList.remove("error");
        usernameInput.classList.add("correct");
        usernameInput.classList.add("visible");
    }
})


//Email

// Mostrar popup de campo obrigatório
emailInput.addEventListener("focus", function(){
    emailLabel.classList.add("required-popup")
})

// Ocultar popup de campo obrigatório
emailInput.addEventListener("blur", function(){
    emailLabel.classList.remove("required-popup")
})

// Validar valor do input
emailInput.addEventListener("change", function(evento){
    let valor = evento.target.value
    console.log(valor);

    if(valor.length < 3){
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = "Email incorreto";
        emailHelper.classList.add("visible");
    }else{
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        emailInput.classList.add("visible");
    }
})