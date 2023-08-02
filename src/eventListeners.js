// import { displayToDo } from "./DOMmanipulation";
// import { displayNewProject } from "./DOMmanipulation";
// import { addToProject, addNewProject, projectsArray } from "./createToDo";
import "./events.css";
import { logicController } from "./createToDo";
import { DOMcontroller } from "./DOMmanipulation";

const toDoForm = document.querySelector(".to-do-form");
toDoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const titleInput = document.querySelector("input[name=title]");
  const descInput = document.querySelector("input[name=description]");
  const dateInput = document.querySelector("input[name=due-date]");
  const priorityInput = document.querySelector("select");
  logicController.activeProject.createToDo(
    titleInput.value,
    descInput.value,
    dateInput.value || "no deadline",
    priorityInput.value
  );
  DOMcontroller.displayToDo();
  toDoForm.classList.toggle("visible");
});

const projectForm = document.querySelector(".project-form");
projectForm.addEventListener("submit", function (e) {
  e.preventDefault();

  logicController.createProject(
    document.querySelector("input[name=project-title]").value
  );

  DOMcontroller.displayProject();
  projectForm.classList.toggle("visible");
});

//when edit form submits:
//
const editForm = document.querySelector(".edit-to-do-form");
editForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const titleInput = document.querySelector("input[name=edit-title]");
  const descInput = document.querySelector("input[name=edit-description]");
  const dateInput = document.querySelector("input[name=edit-due-date]");
  const priorityInput = document.querySelector("select[name=edit-priority]");
  logicController.activeProject.editToDo(
    titleInput.value,
    descInput.value,
    dateInput.value || "no deadline",
    priorityInput.value
  );
  DOMcontroller.updateTextContent();
  editForm.classList.toggle("visible");
});

const newTaskBtn = document.querySelector(".add-new-task-btn");
newTaskBtn.addEventListener("click", function () {
  document.querySelector(".to-do-form").classList.toggle("visible");
});

const newProjectBtn = document.querySelector(".add-new-project-btn");
newProjectBtn.addEventListener("click", function () {
  document.querySelector(".project-form").classList.toggle("visible");
});

const closeToDoForm = document.querySelector(".close-to-do-form");
closeToDoForm.addEventListener("click", function () {
  toDoForm.classList.toggle("visible");
});

const editToDoForm = document.querySelector(".close-edit-form");
editToDoForm.addEventListener("click", function () {
  editForm.classList.toggle("visible");
});

const closeProjectForm = document.querySelector(".close-project-form");
closeProjectForm.addEventListener("click", function () {
  projectForm.classList.toggle("visible");
});
function removeOtherBackgrounds() {
  const projects = document.querySelectorAll(".new-project");
  for (let i = 0; i < projects.length; i++) {
    projects[i].classList.remove("activated");
  }
  const btns = document.querySelectorAll(".delete-project-btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.add("hidden");
  }
}
// add active to clicked element

function addBg(item, button) {
  if (item.dataset.index == DOMcontroller.activeProject.id - 1) {
    console.log("running");
    item.classList.add("activated");
    button.classList.remove("hidden");
  }
}
export { newTaskBtn, newProjectBtn, removeOtherBackgrounds, addBg };
// export { submitToDo, submitProject };
