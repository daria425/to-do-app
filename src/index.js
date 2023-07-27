// import { submitProject, submitToDo } from "./eventListeners";
// import { defaultProject } from "./createToDo";
// import { displayHomePage } from "./DOMmanipulation";
// import { projectsArray } from "./createToDo";

// console.log(projectsArray);
// submitToDo();
// displayHomePage(projectsArray);
// submitProject();
import { controller, project, toDo, logicController } from "./createToDo";
import { newTaskBtn, newProjectBtn } from "./eventListeners";
import { DOMcontroller } from "./DOMmanipulation";
const Home = logicController.createProject("Home");
logicController.saveAsActive(Home);
DOMcontroller.saveAsActive(Home);
DOMcontroller.displayProject();
logicController.activeProject.createToDo(
  "Random Task",
  "Do something",
  "22/06/2004",
  "low"
);
DOMcontroller.displayToDo();
console.log(logicController);
console.log(DOMcontroller);
