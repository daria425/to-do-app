class logicControllerCl {
  constructor(projectArray, activeItem) {
    this.allProjects = projectArray || [];
    this.activeProject = activeItem;
  }
  createProject(name) {
    const newProject = new project(name);
    this.allProjects.push(newProject);
    console.log(this.allProjects);
    console.log(newProject);
    localStorage.setItem("data", JSON.stringify(this));
    return newProject;
  }
  saveAsActive(project) {
    console.log(this);
    this.activeProject = project;
    console.log(this.activeProject);
    // if (!this.allProjects.includes(project)) {
    //   this.allProjects.push(project);
    // }
    localStorage.setItem("data", JSON.stringify(this));
  }
  deleteProject(arrayIndex) {
    this.allProjects.splice(arrayIndex, 1);
    this.activeProject = this.allProjects[arrayIndex - 1];
    console.log(this);
    localStorage.setItem("data", JSON.stringify(this));
  }
  static of(projectArray, activeItem) {
    return new logicControllerCl(projectArray, activeItem);
  }
  // deleteToDo(arrayPosition) {
  //   this.activeProject["toDoItemsArray"].splice(arrayPosition, 1);
  // }
  //modified
}
class project {
  static idCounter = 0;
  constructor(name, toDoItemsArray, activeItem) {
    this.name = name;
    this.toDoItemsArray = toDoItemsArray || [];
    this.activeToDo = activeItem;
    this.id = ++project.idCounter;
  }
  createToDo(title, description, dueDate, priority) {
    const newItem = new toDo(title, description, dueDate, priority);
    this.toDoItemsArray.push(newItem);
    console.log(this.toDoItemsArray);
    console.log(newItem);
    console.log(logicController);
    localStorage.setItem("data", JSON.stringify(logicController));
    return newItem;
  }
  deleteToDo(arrayIndex) {
    this.toDoItemsArray.splice(arrayIndex, 1);
    console.log(this.toDoItemsArray);
    localStorage.setItem("data", JSON.stringify(logicController));
  }
  editToDo(title, description, dueDate, priority) {
    this.activeToDo["title"] = title;

    this.activeToDo["description"] = description;

    this.activeToDo["dueDate"] = dueDate;

    this.activeToDo["priority"] = priority;
    localStorage.setItem("data", JSON.stringify(logicController));
    return this.activeToDo;
  }
  saveToDoAsActive(toDo) {
    this.activeToDo = toDo;
    localStorage.setItem("data", JSON.stringify(logicController));
    console.log(this.toDoItemsArray.indexOf(this.activeToDo)); //reference to array position!!
  }
  static of(name, items, activeItem) {
    return new project(name, items, activeItem);
  }
}
class toDo {
  static idCounter = 0;
  completed = false;
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = ++toDo.idCounter;
  }
  static of(title, description, dueDate, priority) {
    return new toDo(title, description, dueDate, priority);
  }
}
let logicController = new logicControllerCl();
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
