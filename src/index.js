// import { submitProject, submitToDo } from "./eventListeners";
// import { defaultProject } from "./createToDo";
// import { displayHomePage } from "./DOMmanipulation";
// import { projectsArray } from "./createToDo";

// console.log(projectsArray);
// submitToDo();
// displayHomePage(projectsArray);
// submitProject();
import {
  controller,
  project,
  toDo,
  logicController,
  logicControllerCl,
} from "./createToDo";
import { newTaskBtn, newProjectBtn } from "./eventListeners";
import { DOMcontroller } from "./DOMmanipulation";
import { storedObj } from "./storageHelper";

if (localStorage.length === 0) {
  const Home = logicController.createProject("Home");
  logicController.saveAsActive(Home);
  DOMcontroller.saveAsActive(Home);
  DOMcontroller.displayProject();
} else {
  console.log(storedObj);
  //make a new toDO item with all of the todos listed in each of the projects in the allProjects array
  //get toDoitems array
  let newArray = [];
  for (let i = 0; i < storedObj.allProjects.length; i++) {
    let newProject = new project(
      storedObj.allProjects[i].name,
      storedObj.allProjects[i].toDoItemsArray,
      storedObj.allProjects[i].activeToDo
    );
    console.log(newProject);
    newArray.push(newProject);
  }

  for (let group of newArray) {
    group.toDoItemsArray = group.toDoItemsArray.map(function (value) {
      value = new toDo(
        value.title,
        value.description,
        value.dueDate,
        value.priority
      );
      return value;
    });
    console.log(group.toDoItemsArray);
  }
  console.log(newArray);
  let searchID = storedObj.activeProject.id;
  console.log(searchID);
  // console.log(newArray.indexOf);
  logicController.allProjects = newArray;
  logicController.activeProject = logicController.allProjects.find(
    (item) => item.id === searchID
  );
  DOMcontroller.allProjects = logicController.allProjects;
  DOMcontroller.activeProject = logicController.activeProject;
  console.log(logicController);
  console.log(DOMcontroller);
  DOMcontroller.displayAllProjects();
  DOMcontroller.displayAll();
}

//   "Random Task",
//   "Do something",
//   "22/06/2004",
//   "low"
// );
// DOMcontroller.displayToDo();
console.log(logicController);
console.log(DOMcontroller);
