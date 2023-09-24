document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    handleToDo(e.target.newtaskdescription.value);
    form.reset(); //empty form
  });
});

function handleToDo(todo) {
  let li = document.createElement("li"); //returns new a Node
  li.textContent = `${todo} `;
  document.querySelector("#tasks").appendChild(li);

  let btn = document.createElement("button");
  btn.className = "delete-btn";
  btn.textContent = "x";
  li.appendChild(btn);
  btn.addEventListener("click", handleDelete);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
