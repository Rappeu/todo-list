const todoContainer = document.getElementById("todo-container");

let todoNum = 1;
let todoDelNum = 1;

function todoIndex() {
  todoNum += 1;
}

function todoDelIndex() {
  todoDelNum += 1;
}

let todoInput = document.getElementById("todoIn");

todoInput.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("addButton").click();
    }
  }
)

document.getElementById("addButton").onclick = function addTodo() {

  let todoIn = document.getElementById("todoIn").value;

  todoIndex();
  todoDelIndex();


  let todoItem = document.createElement("div");
  todoItem.classList.add("todo");
  todoItem.setAttribute("id", "todo" + todoNum.toString())

  console.log("todo"+todoNum.toString())

  let todoName = document.createElement("p");
  todoName.innerHTML = todoIn;
  todoName.classList.add("todo-name");

  let delBtn = document.createElement("button");
  delBtn.classList.add("todo-del-btn");
  delBtn.setAttribute("onclick", "delTodo(this.id)");
  delBtn.setAttribute("id", "todoDel-" + todoDelNum.toString())

  let delIcon = document.createElement("i");
  delIcon.classList.add("cross");

  let crossPart1 = document.createElement("span");
  let crossPart2 = document.createElement("span");

  delIcon.appendChild(crossPart1);
  delIcon.appendChild(crossPart2);

  delBtn.appendChild(delIcon);

  todoItem.appendChild(todoName);
  todoItem.appendChild(delBtn);

  todoContainer.setAttribute("id", "todo-container");
  todoContainer.appendChild(todoItem);

  let incTodoCount = todoContainer.children.length;

  if (incTodoCount === 10) {
    let maxTodo = document.createElement("p");
    maxTodo.setAttribute("id", "maxTodoMsg");
    maxTodo.innerHTML = "You have reached the max. amount of Todos";

    document.getElementById("addButton").disabled = true;

    todoContainer.appendChild(maxTodo);
  }

  console.log(incTodoCount);
}

function delTodo(id) {
  let delItemArr = id.split("todoDel-").splice(1);

  console.log(delItemArr);
  let delItem = +delItemArr.join("");
  let delTodo = document.getElementById("todo" + delItem.toString());
  delTodo.parentNode.removeChild(delTodo);

  let decTodoCount = todoContainer.children.length;
  console.log(decTodoCount);

  if (decTodoCount <= 10) {
    document.getElementById("maxTodoMsg").remove();


    document.getElementById("addButton").disabled = false;

    todoContainer.appendChild(maxTodo);
  }
}
