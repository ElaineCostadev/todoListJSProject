/* 


// texto da tarefa a ser digitada
function listagemDasTarefas(){
  //fazer a listar e imprimir na pagina
  let listagemTarefas = document.querySelector("#lista-tarefas");
  let criarElement = document.createElement("li");
  listagemTarefas.appendChild(criarElement);
  criarElement.appendChild(document.createTextNode(listagemTarefas.value));
  listagemTarefas.value = "";
  
  };

  
//botao ok - registra o que foi escrito
function adcionaTarefa(){
let button = document.querySelector("#criar-tarefa")
button.addEventListener("click", function(){
  let inputText = document.querySelector("#texto-tarefa");
  let novaText = inputText.value;


})
}

button.addEventListener("click",listagemDasTarefas); */


 



// texto da tarefa a ser digitada
function listagemDasTarefas(){
  //fazer a listar e imprimir na pagina
  
  console.log(listagemTarefas);
  };

  
//botao ok - registra o que foi escrito
function adcionaTarefa(){

  let button = document.querySelector("#criar-tarefa")
  button.addEventListener("click", function(){
  let inputText = document.querySelector("#texto-tarefa");
  let novaText = inputText.value;

  let listagemTarefas = document.querySelector("#lista-tarefas");
  let criarElement = document.createElement("li");
  listagemTarefas.appendChild(criarElement);
  let listagem = document.createTextNode(listagemTarefas.value);
  criarElement.appendChild(listagem);
  listagemTarefas.value = novaText;

})
}



