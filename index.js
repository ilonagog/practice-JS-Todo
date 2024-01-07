document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    handleTodo(e.target.new_todo.value);
    form.reset();
  });
  function handleTodo(todo) {
    let p = document.createElement("p");
    let btn = document.createElement("button");
    btn.addEventListener("click", handledelete);
    btn.textContent = " Delete";
    p.textContent = `${todo}`;
    p.appendChild(btn);

    let list = document.querySelector("#collection").appendChild(p);

    p.addEventListener(
      "click",
      function (e) {
        if (e.target.tagName === "P") {
          e.target.classList.toggle("checked");
        }
      },
      false
    );
  }

  function handledelete(e) {
    e.target.parentNode.remove();
  }
});
