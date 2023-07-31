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
    dateInput.value,
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
    dateInput.value,
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

export { newTaskBtn, newProjectBtn };
// export { submitToDo, submitProject };
