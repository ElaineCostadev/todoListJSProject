

/* function adcionaTarefa(){ */

  //botao ok - registra o que foi escrito
  let button = document.querySelector("#criar-tarefa")
  button.addEventListener("click", function(){
    //recebe o texto digitado no input
  let inputText = document.querySelector("#texto-tarefa");
 /*  inputText.value; */
  

// O que foi escrito no input vai para a Lista OL de lista-tarefas criando uma nova li.
  let listagemTarefas = document.querySelector("#lista-tarefas");
  let criarElement = document.createElement("li");
  criarElement.innerText = inputText.value;


  listagemTarefas.appendChild(criarElement);
  
  //recebe como filho e cria uma nova lista com o CreateTextNode para criar o nó de texto
  http://devfuria.com.br/javascript/dom-create-element/
  /* criarElement.appendChild(document.createTextNode(inputText.value)); */
  
  //limpar input do texto
  //https://cursos.alura.com.br/forum/topico-limpando-a-caixa-de-texto-20395
  inputText.value = "";



  //Mentoria 

  criarElement.addEventListener("click", function(event){
   let classSelected = document.querySelector(".selected");
   
   if(classSelected !== null ){
    classSelected.classList.remove("selected");
   }
  
   event.target.classList.add("selected"); 

});

criarElement.addEventListener("dblclick", function(event){
  let classCompleted = document.querySelector(".completed");
  event.target.classList.add("completed");
  if(classCompleted !== null){
    classCompleted.classList.remove("completed");
  }
  
});




 let clear = document.querySelector("#apaga-tudo");
 clear.addEventListener("click", function(){
  let clearText = document.querySelector("#lista-tarefas");

    clearText.removeChild(clearText.firstChild);
    
  });
  
  
    

  })


 /*   */
  /* for (let index = clearText.length -1; index > 0; index -=1){ */
    

  


/*  
  } */
 


  

    
  

   
  // criarElement.value = ""; 






/* 
  
       */
        
        
        /* for(let index = 0; index < btnLimpar.length ; index +=1){ */
        /*   console.log(btnLimpar); */
   /*        if(btnLimpar == criarElement){
            event.target.value = "";
            console.log(btnLimpar);
          };
      
        });
       */

/*       }); */

/* criarElement.addEventListener("click", limpar()) */



/* 
  
btnLimpar.addEventListener("click", function(event){
    
event.target.classList.reset();
console.log(btnLimpar); */
/* if(btnLimpar){
  btnLimpar.classList.remove("li");
} */











