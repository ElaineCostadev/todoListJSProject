


let inputarValor = document.getElementById("texto-tarefa");
inputarValor.addEventListener("input", function(event){
  let newinput = document.querySelector("#texto-tarefa");
    newinput.innerText = event.target.value;    
    console.log("Cliquei");
});




