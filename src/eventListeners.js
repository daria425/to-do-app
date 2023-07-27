// import { displayToDo } from "./DOMmanipulation";
// import { displayNewProject } from "./DOMmanipulation";
// import { addToProject, addNewProject, projectsArray } from "./createToDo";
import "./events.css";
import { logicController } from "./createToDo";
import { DOMcontroller } from "./DOMmanipulation";
const titleInput = document.querySelector("input[name=title]");
const descInput = document.querySelector("input[name=description]");
const dateInput = document.querySelector("input[name=due-date]");
const priorityInput = document.querySelector("select");

const toDoForm = document.querySelector(".to-do-form");
toDoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  logicController.activeProject.createToDo(
    titleInput.value,
    descInput.value,
    dateInput.value,
    priorityInput.value
  );
  DOMcontroller.displayToDo();
  toDoForm.classList.toggle("visible");
});

// function submitProject() {
//   const projectForm = document.querySelector(".project-form");
//   projectForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     addNewProject();
//     displayNewProject(projectsArray);
//     projectForm.classList.toggle("visible");
//   });
// }

const newTaskBtn = document.querySelector(".add-new-task-btn");
newTaskBtn.addEventListener("click", function () {
  console.log("hello");
  document.querySelector(".to-do-form").classList.toggle("visible");
});

// const newProjectBtn = document.querySelector(".add-new-project-btn");
// newProjectBtn.addEventListener("click", function () {
//   document.querySelector(".project-form").classList.toggle("visible");
// });

export { newTaskBtn };
// export { submitToDo, submitProject };
