let numerosDaSorte = [37, 14, 26, 5, 94, 87];

for(let i=0;i<numerosDaSorte.length;i++){
  // X é par e menor que 50
  if(numerosDaSorte[i]%2 == 0 && numerosDaSorte[i] < 50){
    console.log(numerosDaSorte[i] + " é par e menor que 50")
  }
  
  // X é menor que 50
  if(numerosDaSorte[i] < 50){
    console.log(numerosDaSorte[i] + " é menor que 50")
  }
  
  // X é maior que 50
  if(numerosDaSorte[i] > 50){
    console.log(numerosDaSorte[i] +" é maior que 50")
  }
}