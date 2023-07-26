import { displayToDo } from "./DOMmanipulation";
import { addToProject, addNewProject, projectsArray } from "./createToDo";
function submitToDo() {
  const toDoForm = document.querySelector(".to-do-form");
  toDoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addToProject();
    displayToDo(projectsArray);
  });
}

function submitProject() {
  const projectForm = document.querySelector(".project-form");
  projectForm.addEventListener("submit");
}

export { submitToDo };
