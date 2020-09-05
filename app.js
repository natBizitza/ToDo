//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')


//EVENT LISTENERS
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
document.addEventListener('DOMContentLoaded', getTodos);

//FUNCTIONS

function addTodo(e){
    //prevent form from submitting
    e.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //ADD TODO TO LOCAL STORAGE
    saveLocalTodos(todoInput.value);

    // CHECK MARK BTN
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML ='<i class="fas fa-check"></i>';
    completedBtn.classList.add('complete-btn');
    todoDiv.appendChild(completedBtn);

    // TRASH BTN
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    todoInput.value = '';
}

function deleteCheck(e){
    const item = e.target;

    //DELETE ITEM
    if(item.classList[0]=== 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall')
        //REMOVE ITEM FROM LOCAL STORAGE
        removeLocalTodo(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }
    //MARK
    if(item.classList[0]=== 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
            default:
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
        }
    });
}

function saveLocalTodos(todo){
    //CHECK IF TODO IS ALREADY SAVED
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }else{
        //GET AN ARRAY FROM LOCAL STORAGE
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);

    //SET VALUES BACK TO THE LOCAL STORAGE
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }else{
        //GET AN ARRAY FROM LOCAL STORAGE
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo){
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //create li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
    
        // CHECK MARK BTN
        const completedBtn = document.createElement('button');
        completedBtn.innerHTML ='<i class="fas fa-check"></i>';
        completedBtn.classList.add('complete-btn');
        todoDiv.appendChild(completedBtn);
    
        // TRASH BTN
        const trashBtn = document.createElement('button');
        trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
        trashBtn.classList.add('trash-btn');
        todoDiv.appendChild(trashBtn);
    
        //APPEND TO LIST
        todoList.appendChild(todoDiv);
    })
}

function removeLocalTodo(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }else{
        //GET AN ARRAY FROM LOCAL STORAGE
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todos.indexOf(todo.innerText)
    todos.splice(todoIndex,1);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        default:
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }
  
  function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todos.indexOf(todo.innerText);
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
      //Create todo div
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
      //Create list
      const newTodo = document.createElement("li");
      newTodo.innerText = todo;
      newTodo.classList.add("todo-item");
      todoDiv.appendChild(newTodo);
      todoInput.value = "";
      //Create Completed Button
      const completedButton = document.createElement("button");
      completedButton.innerHTML = `<i class="fas fa-check"></i>`;
      completedButton.classList.add("complete-btn");
      todoDiv.appendChild(completedButton);
      //Create trash button
      const trashButton = document.createElement("button");
      trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
      trashButton.classList.add("trash-btn");
      todoDiv.appendChild(trashButton);
      //attach final Todo
      todoList.appendChild(todoDiv);
    });
  }
