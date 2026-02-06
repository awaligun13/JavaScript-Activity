
const add_button = document.getElementById("myButton");
const delete_button = document.getElementById("delButton");
const clear_button = document.getElementById("clearList");

add_button.addEventListener("click", function() {
    addItem();
})

delButton.addEventListener("click", function() {
    const day = document.getElementById("options");
    const todos = getTodos(day.value);
        if (todos.length === 0) return;

    todos.pop();
    saveTodos(day.value, todos);

    const list = getListForDay(day.value);
    list.removeChild(list.lastElementChild);
});

clearList.addEventListener("click", function() {
    const day = document.getElementById("options");

    localStorage.removeItem("todo-" + day.value);

    const list = getListForDay(day.value);
    list.innerHTML = "";
});


function getTodos(day) {//helper function, retrieve todo list for day and return it as an array
    return JSON.parse(localStorage.getItem("todo-" + day)) || [];
}

function saveTodos(day, todos) {//saves todo list item into storage, added it on to end of current to-do list
    localStorage.setItem("todo-" + day, JSON.stringify(todos));
}

function addItem(){//function to add list item

    const day = document.getElementById("options");
    const todoList = getListForDay(day.value);
    
    const textElement = document.getElementById("myText");
    if (textElement.value == "")
        return;

    const todos = getTodos(day.value);//get current list for the day
    todos.push(textElement.value);//add new list item to end of list
    saveTodos(day.value, todos);//save it to local storage

    const li = document.createElement("li");//now, create li to add to visual list
    const checkbox = document.createElement("input");//selection intialization
    const fullLi = document.createElement("label")//label to put checkbox and text together

    checkbox.type = "checkbox";//set selection as a checkbox

    fullLi.append(checkbox, " " + textElement.value);//add items to label

    li.appendChild(fullLi);//add label to li
    todoList.appendChild(li);//add li to list

    textElement.value = "";//reset textbox to blank
}

function getListForDay(day){//call the current to do list for a certain day
    return document.getElementById(day);
}