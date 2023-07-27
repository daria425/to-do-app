// import { submitProject, submitToDo } from "./eventListeners";
// import { defaultProject } from "./createToDo";
// import { displayHomePage } from "./DOMmanipulation";
// import { projectsArray } from "./createToDo";

// console.log(projectsArray);
// submitToDo();
// displayHomePage(projectsArray);
// submitProject();
import { controller, project, toDo, logicController } from "./createToDo";
import { newTaskBtn } from "./eventListeners";
import { DOMcontroller } from "./DOMmanipulation";
const Home = logicController.createProject("Home");
logicController.saveAsActive(Home);
DOMcontroller.saveAsActive(Home);
console.log(logicController);
console.log(DOMcontroller);
