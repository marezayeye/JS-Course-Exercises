//declaring variables
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
todoList.classList.add("todo-list");

//adding nessesary event listeners
todoList.addEventListener("click", chooseAction);
filterOption.addEventListener("click", filterTodo); 
document.addEventListener("DOMContentLoaded", storageReader);
todoButton.addEventListener("click", todoCheck);

//this function gets the todo text from the input and creates corresponding div and adds proper bottons to it
//besides it sets the class attribute for the newly created element in order to apply proper styles to it
function todoAdd(event){
    event.preventDefault(); //to prevent reloading page each time the button is pressed
    //creating a new div container
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //creating a new list item and setting class names
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    
    //save the newly created item to local storage
    saveToLocalStorage(todoInput.value);

    //append the new list item to div created in first step
    todoDiv.appendChild(newTodo);

    //creating completed button, adding event listener to it and appending it to div container
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //creating trash button, adding event listener to it and appending it to div container
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //appending the finished div to main list element
    todoList.appendChild(todoDiv);
    todoInput.value = ""; //resetting the text box for further use.
};

//this function initializes the local storage and handle the write requests
function saveToLocalStorage(todo){
    let localTodos;
    if (localStorage.getItem("localTodos") === null){
        localTodos = [];
        localTodos.push(todo);
        localStorage.setItem("localTodos", JSON.stringify(localTodos));

    } else {
        localTodos = JSON.parse(localStorage.getItem("localTodos"));
        localTodos.push(todo);
        localStorage.setItem("localTodos", JSON.stringify(localTodos));
    }
};

//this function detects the user selected button and calls proper function for it
function chooseAction(event){
    if (event.target.className == "complete-btn"){
        checkButton(event)
    }else if(event.target.className == "trash-btn"){
        deleteButton(event);}
};

//this function handles the deleting process
function deleteButton(event){
    const item = event.target.parentElement;
    item.remove();
    deleteFromLocalStorage(event);

};

//this function handles the completed button and adding proper classes to aplly correct styles to it.
function checkButton(event){
    const item = event.target.parentElement;
    item.classList.toggle("completed");
};

//this function is used to delete todos from the local storages
function deleteFromLocalStorage(event){
    const string = event.target.parentElement.innerText;
    let temp = JSON.parse(localStorage.getItem("localTodos"));
    temp.splice(temp.indexOf(string),1);
    localStorage.setItem("localTodos", JSON.stringify(temp));
};


//this fuction checks for duplicates and prevents creating a duplicate todo
function todoCheck(event) {
    let savedTodos = JSON.parse(localStorage.getItem("localTodos"));
    if (savedTodos == null){
        todoAdd(event);
    } else if (savedTodos.indexOf(todoInput.value) == -1){
        todoAdd(event);
    } else {
        alert("Todo Already Exists");
        todoInput.value = "";
    };
};

//ths function is for handling the filering feature by checking specific class in items
function filterTodo(event){
    // console.log("filterTodo called");
    const todos = todoList.childNodes;
    todos.forEach(function (todo){
        switch (event.target.value){
            case "all":
                todo.style.display = "flex";
                break;
    
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            
            case "uncompleted":
                if(todo.classList.contains("completed")){
                    todo.style.display = "none";
                } else {
                    todo.style.display = "flex";
                }
            break;
        }
    })
};

//this function called on page loading and create each todo item existing in local storage
function storageReader(){
    let localTodos;
    if (localStorage.getItem("localTodos") === null){
        localTodos = [];
    } else {
        localTodos = JSON.parse(localStorage.getItem("localTodos"));
        localTodos.forEach(todo => {
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");

            const newTodo = document.createElement("li");
            newTodo.classList.add("todo-item");
            newTodo.innerText = todo;
            

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
            
        })
    }
};