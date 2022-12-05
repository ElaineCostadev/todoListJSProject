/* function adcionaTarefa(){ */
const listagemTarefas = document.querySelector('#lista-tarefas');

// botao Adiciona Tarefa e registra o que foi escrito
function buttonAddTasks() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', () => {
  // recebe o texto digitado no input
    const inputText = document.querySelector('#texto-tarefa');
    // O que foi escrito no input vai para a Lista OL de lista-tarefas criando uma nova li.
    const criarElement = document.createElement('li');
    criarElement.className = 'li-list';
    criarElement.innerText = inputText.value;
    listagemTarefas.appendChild(criarElement);
    // limpar input do texto
    // https://cursos.alura.com.br/forum/topico-limpando-a-caixa-de-texto-20395
    inputText.value = '';
  });
}
buttonAddTasks();
buttonSelected();

// recebe como filho e cria uma nova lista com o CreateTextNode para criar o nó de texto
// http://devfuria.com.br/javascript/dom-create-element/
/* criarElement.appendChild(document.createTextNode(inputText.value)); */
// Mentoria
// botao para selecionar a cor cinza
function buttonSelected() {
  listagemTarefas.addEventListener('click', (event) => {
    const classSelected = document.querySelector('.selected');
    if (classSelected !== null) {
      classSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
buttonSelected();

// riscar qdo for clicado 2X
function riscarDblClick() {
  listagemTarefas.addEventListener('dblclick', (event) => {
    const classCompleted = document.querySelector('.completed');
    event.target.classList.add('completed');
    if (classCompleted !== null) {
      classCompleted.classList.remove('completed');
    }
  });
}
riscarDblClick();

// botao Apagar tudo
function buttonClearAll() {
  const clear = document.querySelector('#apaga-tudo');
  clear.addEventListener('click', () => {
    listagemTarefas.innerHTML = '';
    // clearText.removeChild();
  });
}
buttonClearAll();

// quando estiver com a classe completed, será removido.
function removedCompleted() {
  const buttonFinished = document.querySelector('#remover-finalizados');
  buttonFinished.addEventListener('click', () => {
    const classCompleted = document.querySelector('.completed');
    if (classCompleted) {
      classCompleted.remove();
    }
    // classCompleted.value = "";
    // classCompleted.innerText = '';
  });
}
removedCompleted();

// salvar no LocalStorage
function saveTasks() {
  const salveTask = document.querySelector('#salvar-tarefas');
  salveTask.addEventListener('click', () => {
    listagemTarefas.setItem('tasks', listagemTarefas.innerText);
    // const taskList = document.querySelector('#lista-tarefas');
    // localStorage.setItem('tasks', taskList.innerText)
    const localGet = localStorage.getItem('tasks');
    listagemTarefas.innerText = localGet;
    /*   const localGet = localStorage.getItem('tasks')
      taskList.innerText = localGet */
    // taskList.append(localGet)
  });
  // taskList.innerHTML = localGet
}
saveTasks();

function getItems() {
  // const taskList = document.querySelector('#lista-tarefas');
  // localStorage.setItem('tasks', taskList.innerText)
  const localGet = localStorage.getItem('tasks');
  listagemTarefas.innerText = localGet;
}
// getItems();

function removeSelected() {
  const buttonRemovedSelected = document.querySelector('#remover-selecionado');
  buttonRemovedSelected.addEventListener('click', () => {
    const classSelected = document.querySelector('.selected');
    if (classSelected) {
      classSelected.remove();
    }
  });
}
removeSelected();
