//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');


//EVENT LISTENERS
todoButton.addEventListener('click', addTodo);

//FUNCTIONS

function addTodo(e){
    //prevent form from submitting
    e.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText ='hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo)

    // CHECK MARK BTN
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML ='<i class="fas fa-check"></i>';
    completedBtn.classList.add('complete-btn');
    todoDiv.appendChild(completedBtn);

    // TRASH BTN
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('complete-btn');
    todoDiv.appendChild(trashBtn);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);

}