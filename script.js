  

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
  

//botao que ao clicar fica cinza
  criarElement.addEventListener("click", function(){
    criarElement.style.backgroundColor = "rgb(128, 128, 128)";
//se for clicado 1x, pintar de cinza
//ao clicar 2x, pintar o selecionado e deixar o anterior em branco




    if(criarElement.value === "rgb(128, 128, 128)"){
        console.log("mantem");
    }else{
      
    }


  })

  

});

/*  adcionaTarefa();
} */

//ao clicar na lista de tarefas criada, ficará cinza



