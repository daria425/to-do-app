class logicControllerCl {
  allProjects = [];
  activeProject;
  createProject(name) {
    const newProject = new project(name);
    this.allProjects.push(newProject);
    console.log(this.allProjects);
    console.log(newProject);
    return newProject;
  }
  saveAsActive(project) {
    this.activeProject = project;
    console.log(this.activeProject);
    if (!this.allProjects.includes(project)) {
      this.allProjects.push(project);
    }
  }
}
class project {
  toDoItemsArray = [];
  constructor(name) {
    this.name = name;
  }
  createToDo(title, description, dueDate, priority) {
    const newItem = new toDo(title, description, dueDate, priority);
    this.toDoItemsArray.push(newItem);
    console.log(this.toDoItemsArray);
    console.log(newItem);
    console.log(logicController);
    return newItem;
  }
  deleteToDo(arrayIndex) {
    this.toDoItemsArray.splice(arrayIndex, 1);
  }
}
class toDo {
  completed = false;
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
const logicController = new logicControllerCl();
export { project, toDo, logicController, logicControllerCl };
//when form submits:
//toDo item is created when form submits
//the project that creates the toDo is dependent on the project that is currently active
//currently active project stored in a class Controller
//on click event, switch the active project
// //storage of all project objects
// const projectsArray = [];

// //default project for storing toDos
// const home = new project("Home");
// projectsArray.push(home);

// function createToDo() {
//  const titleInput = document.querySelector("input[name=title]");
//  const descInput = document.querySelector("input[name=description]");
//  const dateInput = document.querySelector("input[name=due-date]");
//  const priorityInput = document.querySelector("select");

//   const newItem = new toDo(
//     titleInput.value,
//     descInput.value,
//     dateInput.value,
//     priorityInput.value
//   );
//   console.log(newItem);
//   return newItem;
// }

// function createProject() {
//   const projectTitleInput = document.querySelector("input[name=project-title]");

//   const newProject = new project(projectTitleInput.value);
//   console.log(newProject);
//   return newProject;
// }

// //event listeners
// // function submitToDo() {
// //   const toDoForm = document.querySelector(".to-do-form");
// //   toDoForm.addEventListener("submit", addToProject);
// // }

// // function submitProject() {
// //   const projectForm = document.querySelector(".project-form");
// //   projectForm.addEventListener("submit", addNewProject);
// // }

// //on to-do form submit, create a toDo and push it to the project
// function addToProject() {
//   const item = createToDo();
//   home.toDoItemsArray.push(item);
//   console.log(defaultProject);
//   return item;
// }

// //on project form submit, make a new project objecg and push to the array of projects
// function addNewProject() {
//   const userProject = createProject();
//   projectsArray.push(userProject);
//   console.log(projectsArray);
// }

// function deleteToDo() {}
// export { projectsArray, home, createToDo, addToProject, addNewProject };
