

/* function adcionaTarefa(){ */

  //botao ok - registra o que foi escrito
  let button = document.querySelector("#criar-tarefa")
  button.addEventListener("click", function(){
    //recebe o texto digitado no input
  let inputText = document.querySelector("#texto-tarefa");
  inputText.value;


// O que foi escrito no input vai para a Lista OL de lista-tarefas criando uma nova li.
  let listagemTarefas = document.querySelector("#lista-tarefas");
  let criarElement = document.createElement("li");
  listagemTarefas.appendChild(criarElement);
  //recebe como filho e cria uma nova lista com o CreateTextNode para criar o nó de texto
  http://devfuria.com.br/javascript/dom-create-element/
  criarElement.appendChild(document.createTextNode(inputText.value));

  //limpar input do texto
  //https://cursos.alura.com.br/forum/topico-limpando-a-caixa-de-texto-20395
  inputText.value = "";



/* adcionaTarefa();
};
 */


//botao que ao clicar fica cinza
//function selecionarTirarCinza()
/* function clicarNoCinza (){  */ 

 
 
/* }
clicarNoCinza(); */

//fonte https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener


/* function clicarBranco(){ */

  criarElement.addEventListener("click", function(){
    let gray = criarElement.style.backgroundColor = "gray";

  if(criarElement >=2){
    return criarElement.style.backgroundColor = "white";
  }
});
 

  /*   let whiteColor = criarElement.style.backgroundColor = "white"; */

  /*   if(grayColor === 1 || grayColor > 3){
      console.log(grayColor);
      return grayColor;
        }if (grayColor >= 2 || grayColor >=4) {
          console.log(whiteColor);
          return whiteColor;
        }
      }); */

  /*   criarElement.addEventListener("change", function(){
    let whiteColor = criarElement.style.backgroundColor = "white";
    if(whiteColor > 1){
      console.log(criarElement);
      return whiteColor;
    }
  */

  

});


/* clicarBranco() */

/* if(clicarNoCinza() ===1){
  return clicarNoCinza();
}else{
  clicarBranco();
}






 
 /*  let whiteColor = criarElement.style.backgroundColor = "white"; */
  
/*   
  if (criarElement.inputMode < 1){
    console.log(grayColor);
    return grayColor;
    
  }else if (criarElement.inputMode > 1) {
    console.log(whiteColor);
   return whiteColor;
  
   */

  
  

    




/* }
clicarNoCinza (); */


/* 
let clickElement = document.getElementById("li");
clickElement.classList.toggle(hide); */
