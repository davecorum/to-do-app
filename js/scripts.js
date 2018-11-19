let body = document.querySelector("body");

let todoForm = document.forms.login;
let taskInput = todoForm.task.value;
let descInput = todoForm.desc.value;

function Task(task, desc) {
  this.task = task;
  this.desc = desc;
};

function newTask(task, desc) {
  for(let i = 0, i < 3, i++) {
    let firstDiv = document.createElement("div");
    firstDiv.classList.add("container", "text-centered");
    body.appendChild(firstDiv);
    let secondDiv = document.createElement("div");
    secondDiv.classList.add("row");
    firstDiv.appendChild(secondDiv);
    let thirdDiv = document.createElement("div");
    thirdDiv.classList.add("col-md-2");
    secondDiv.appendChild(thirdDiv);
    let newH5 = document.createElement("h5");
    newH5.textContent = taskInput;
  }
}

todoForm.addEventListener("submit", e => {
  e.preventDefault();
  let Task = new Task(taskInput, descInput);

  todoForm.reset();
})













































//
