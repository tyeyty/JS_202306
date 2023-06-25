const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    //short version function deleteToDo
    //todos = toDos.filter(toDo => toDo.id  !== li.id);
    
    //type check typeof
    //console.log(typeof li.id);
    
    toDos = toDos.filter(toDo => toDo.id  !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newToDo) {
    //console.log("new paint", newToDo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    li.id = newToDo.id;
    btn.innerText = "❌";
    span.innerText = newToDo.text;
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };  
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

//if(savedToDos !== null) same
if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    //parsedToDos.forEach(); same short function
    //parsedToDos.forEach((item) => console.log("this is the turn of", item));
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);

    //!== not same 같지 않다
}