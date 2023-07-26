import { submitToDo } from "./eventListeners";
import { defaultProject } from "./createToDo";
import { displayDefaultProject } from "./DOMmanipulation";
import { projectsArray } from "./createToDo";

console.log(projectsArray);
submitToDo();
displayDefaultProject(defaultProject);
