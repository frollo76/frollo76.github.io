
const toDosForm = document.querySelector("#todos-form");
const toDoInput = toDosForm.querySelector("#todo");
const toDoList  = document.querySelector("#todos-list");

let toDos = [];

//-----------------------------------------------------------------------------
function saveToDos(){
    
    console.log(toDos);

    const jsonToDos = JSON.stringify(toDos);
    
    localStorage.setItem("todos", jsonToDos);
}

//-----------------------------------------------------------------------------
function handleDeleteToDo(event){

    let toDel = event.path[1];
    toDos = toDos.filter( (item)=>{  return item.id !== parseInt(toDel.id) });

    toDel.parentNode.removeChild(toDel);

    saveToDos();
}

//-----------------------------------------------------------------------------
/**
 * @param {object} newToDo  * html 의 To Do 리스트에 추가할 오브젝트
 */
function paintToDo(newToDo) {

    console.log(newToDo);

    const span = document.createElement("span");
    span.innerText = newToDo.value;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", handleDeleteToDo);

    const li = document.createElement("li");
    li.id = newToDo.id;
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

//-----------------------------------------------------------------------------
function handleToDoSubmit(event) {
    event.preventDefault();

    const newToDo = { id: Date.now(), value: toDoInput.value};
    toDoInput.value = "";

    toDos.push(newToDo);

    paintToDo(newToDo);
    saveToDos();
}

//-----------------------------------------------------------------------------

toDosForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    
    toDos = parsedToDos;

    toDos.forEach(paintToDo);
}

//-----------------------------------------------------------------------------
// http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid=b599d11582a9d3b1f4cb3d25513de84a


