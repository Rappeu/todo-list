const todoContainer = document.getElementById("todo-container");

document.getElementById("addButton").onclick = function addTodo() {
  let todoIn = document.getElementById("todoIn").value;


  let todoItem = document.createElement("div");
  todoItem.classList.add("todo");

  let todoName = document.createElement("p");
  todoName.innerHTML = todoIn;
  todoName.classList.add("todo-name");

  let delBtn = document.createElement("button");
  delBtn.classList.add("todo-del-btn");
  delBtn.setAttribute("onclick", "delTodo()");

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
  console.log(todoName);

  /*todoContainer.appendChild*/
}
