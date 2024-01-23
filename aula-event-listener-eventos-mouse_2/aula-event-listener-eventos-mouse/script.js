let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let inputTotal = document.getElementById("quantidade-produto-01");
let valorSubtotal = document.getElementById("valor-subtotal");
let botaoAdiciona = document.getElementById("btn-adicionar-produto-01");
let botaoSubtrai = document.getElementById("btn-subtrair-produto-01");
let count = 0;

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

botaoAdiciona.onclick = function() {
  count++;
  if(inputTotal.value >= 100){
    return count = 100;
  }else{
    inputTotal.value = count;
    quantidadeSubtotal.innerHTML = count + " itens";
    `R$ ${valorSubtotal.innerHTML = subtotalInfo.valor + count}`;
  }

}


botaoSubtrai.onclick = function() {
  count--;
  if(inputTotal.value <= 0){
    return count = 0;
  }else{
    inputTotal.value = count;
    quantidadeSubtotal.innerHTML = count + " itens";
    `R$ ${valorSubtotal.innerHTML = subtotalInfo.valor - count}`;
  }
}