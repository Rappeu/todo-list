const todoContainer = document.getElementById("todo-container");

let todoNum = 1;
let todoDelNum = 1;


function todoIndex() {
  todoNum += 1;
}

function todoDelIndex() {
  todoDelNum += 1;
}

document.getElementById("addButton").onclick = function addTodo() {
  let todoIn = document.getElementById("todoIn").value;

  todoIndex();
  todoDelIndex();

  let todoItem = document.createElement("div");
  todoItem.classList.add("todo");
  todoItem.setAttribute("id", "todo" + todoNum.toString())

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
}

function delTodo(id) {
  let delItemArr = id.split("todoDel-").splice(1);
  let delItem = +delItemArr.join("");
  let delTodo = document.getElementById("todo" + delItem.toString());
  delTodo.parentNode.removeChild(delTodo);
}