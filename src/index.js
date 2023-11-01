//Global variables
const form = document.querySelector("#create-task-form");
const ul = document.querySelector("#tasks");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", e => {
    e.preventDefault();

    handleToDo(e.target.querySelector("#new-task-description").value);

    e.target.reset(); //empty form
  });
});

function handleToDo(todo) {
  //Create list and append it to ul to add task
  let li = document.createElement("li");
  li.textContent = `${todo} `;
  ul.append(li);

  //Create button and append it to list to remove task
  const btn = document.createElement("button");
  btn.className = "delete-btn";
  btn.textContent = "x";
  li.append(btn);
  btn.addEventListener("click", handleDelete);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
