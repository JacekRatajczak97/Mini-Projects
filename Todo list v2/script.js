const todo = document.querySelector(".todo-list");
const todoButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const filter = document.querySelector(".filter-todo");

todoButton.addEventListener("click", createTodo);
todo.addEventListener("click", checkDelete);
filter.addEventListener("click", filterTodo);
document.addEventListener("DOMContentLoaded", getTodoItems);

function createTodo(event) {
  event.preventDefault();

  //create div container
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo");

  //create todo li
  const todoItemLi = document.createElement("li");
  todoItemLi.classList.add("todo-li");
  todoItemLi.innerText = todoInput.value;
  todoItem.appendChild(todoItemLi);

  //storage todo
  saveLocalTodos(todoInput.value);

  //create button comlete
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-button");
  completeButton.innerHTML = '<i class="fa fa-solid fa-check"></i>';
  todoItem.appendChild(completeButton);

  //create button remove
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.innerHTML = '<i class="fa fa-trash"></i>';
  todoItem.appendChild(removeButton);

  todo.appendChild(todoItem);

  //remove value from li
  todoInput.value = "";
}

//check if delete
function checkDelete(e) {
  const item = e.target;
  if (item.classList.contains("remove-button")) {
    const todo = item.parentNode;
    todo.classList.add("remove-animation");
    removeTodosFromLocalStorage(todo);
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  if (item.classList.contains("complete-button")) {
    item.parentNode.classList.toggle("todo-done");
  }
}

//sort function
function filterTodo(e) {
  const todos = todo.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "done":
        if (todo.classList.contains("todo-done")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}



// push value to local store
function saveLocalTodos(todo) {
  let todoItems;
  if (localStorage.getItem("todoItems") === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(localStorage.getItem("todoItems"));
  }
  todoItems.push(todo);
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

// get value from local store
function getTodoItems() {
  let todoItems;
  if (localStorage.getItem("todoItems") === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(localStorage.getItem("todoItems"));
  }

  todoItems.forEach((e) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo");

    const todoItemLi = document.createElement("li");
    todoItemLi.classList.add("todo-li");
    todoItemLi.innerText = e;
    todoItem.appendChild(todoItemLi);

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-button");
    completeButton.innerHTML = '<i class="fa fa-solid fa-check"></i>';
    todoItem.appendChild(completeButton);

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.innerHTML = '<i class="fa fa-trash"></i>';
    todoItem.appendChild(removeButton);

    todo.appendChild(todoItem);
  });
}

// remove value from local store

function removeTodosFromLocalStorage(todo) {
  let todoItems;
  if (localStorage.getItem("todoItems") === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(localStorage.getItem("todoItems"));
  }

  const indexOfTodo = todo.children[0].innerText;

  todoItems.splice(todoItems.indexOf(indexOfTodo), 1);
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
}
