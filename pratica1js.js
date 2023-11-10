/* Exercício 1
Crie um botão que muda de cor com o seguinte
padrão:
Seu fundo deve ser azul quando o mouse
estiver afastado, verde quando estiver sobre
o botão e vermelho, exibindo a mensagem
“quebrei”, quando clicado. Depois de
“quebrado”, ele não deve mais modificar
Dica:
document.getElementById("p2").style.back
groundColor="blue"; */

let botao = document.querySelector("#botao");
botao.style.background="blue";
let isBroken=false;
let contClick=0;


botao.addEventListener("mouseover", e =>{
  if(isBroken===false){
    botao.style.background="purple"
    botao.style.color="cyan"
  }
});

botao.addEventListener("mouseout", e =>{
  if(isBroken===false){
    botao.style.background="blue"
  }
});

botao.addEventListener("click", e =>{

  contClick++; //contClick=contClick+1;
  if(contClick>=10){
    botao.style.background="red"
    botao.innerHTML="QUEBREI";
    isBroken=true;
  }
});
