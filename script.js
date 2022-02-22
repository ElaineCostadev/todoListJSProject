

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



  let elementSelected = document.createElement("selected");
/*   criarElement.getElementsByClassName("selected")[0];
 */
/*   criarElement.appendChild(elementSelected); */
  

  criarElement.addEventListener("click", function(event){
   let classSelected = document.querySelector(".selected");
   
   if(classSelected !== null ){
    classSelected.classList.remove("selected");
   }
  
   event.target.classList.add("selected");





 

});






});


