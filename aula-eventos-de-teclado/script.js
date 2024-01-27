const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

window.addEventListener("keyup", (e) => {
  // console.log(e.key)
  // console.log(e.code)
  if(e.key == 1){
    navPerfil.style.display = "block"
  }else if(e.key == "Escape" || e.key == "Backspace"){
    navPerfil.style.display = "none"
  }else{
    alert('Digite as teclas 1, esc ou backspace')
  }
})