// localStorage.clear();
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
todoList.classList.add("todo-list");
todoList.addEventListener("click", chooseAction);

todoButton.addEventListener("click", todoAdd);

//this function gets the todo text from the input and creates corresponding div and adds proper bottons to it
//besides it sets the class attribute for the newly created element in order to apply proper styles to it
function todoAdd(event){
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    saveToLocalStorage(todoInput.value);

    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
};


function saveToLocalStorage(todo){
    let localTodos;
    if (localStorage.getItem("localTodos") === null){
        console.log("local was empty");
        localTodos = [];
        localTodos.push(todo);
        localStorage.setItem("localTodos", JSON.stringify(localTodos));

    } else {
        localTodos = JSON.parse(localStorage.getItem("localTodos"));
        localTodos.push(todo);
        localStorage.setItem("localTodos", JSON.stringify(localTodos));
    }
};


function chooseAction(event){
    if (event.target.className == "complete-btn"){
        checkButton(event)
    }else if(event.target.className == "trash-btn"){
        deleteButton(event);}
};


function deleteButton(event){
    const item = event.target.parentElement;
    item.remove();
    deleteFromLocalStorage(event);

};

function checkButton(event){
    const item = event.target.parentElement;
    item.classList.toggle("completed");
};

function deleteFromLocalStorage(event){
    const string = event.target.parentElement.innerText;
    let temp = JSON.parse(localStorage.getItem("localTodos"));
    temp.splice(temp.indexOf(string),1);
    localStorage.setItem("localTodos", JSON.stringify(temp));
};

