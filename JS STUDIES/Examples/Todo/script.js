// Select elements
const newTodoInput = document.getElementById("newTodo");
const addTodoButton = document.getElementById("addTodoButton");
const todoList = document.getElementById("todoList");

// Event listener for adding to-do on button click
addTodoButton.addEventListener("click", addTodo);

// Function to add a new to-do
function addTodo() {
  const todoText = newTodoInput.value;
  if (todoText === "") return;

  // Create a new list item
  const todoItem = document.createElement("li");
  todoItem.classList.add("list-group-item", "todo-item");
  todoItem.textContent = todoText;

  // Create a delete button
  const deleteButton = deleteBtn(todoItem); // Pass todoItem as argument

  // Append delete button to the todo item
  todoItem.appendChild(deleteButton);

  // Append the new item to the list
  todoList.appendChild(todoItem);

  // Clear the input
  newTodoInput.value = "";

  completed(todoItem);
  saveTodos();
}

// Event listener for adding to-do on Enter key press
newTodoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

// Function to save todos to local storage
function saveTodos() {
  const todos = [];
  todoList.childNodes.forEach((item) => {
    const todoItem = {
      text: item.textContent.replace("Delete", "").trim(),
      completed: item.classList.contains("completed"),
    };
    todos.push(todoItem);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Function to load todos from local storage
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("list-group-item", "todo-item");
    todoItem.textContent = todo.text;

    if (todo.completed) {
      todoItem.classList.add("completed");
    }

    const deleteButton = deleteBtn(todoItem); // Pass todoItem as argument
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
    completed(todoItem);
  });
}

function deleteBtn(todoItem) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("btn", "btn-danger", "ml-2");

  deleteButton.addEventListener("click", () => {
    todoItem.remove();
    saveTodos();
  });
  
  return deleteButton;
}

function completed(todoItem) {
  todoItem.addEventListener("click", () => {
    todoItem.classList.toggle("completed");
    saveTodos();
  });
}

// Load todos on page load
document.addEventListener("DOMContentLoaded", loadTodos);
