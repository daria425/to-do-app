class project {
  toDoItemsArray = [];
  constructor(name) {
    this.name = name;
  }
}
class toDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

//storage of all project objects
const projectsArray = [];

//default project for storing toDos
const defaultProject = new project("New Project");
projectsArray.push(defaultProject);

function createToDo() {
  const titleInput = document.querySelector("input[name=title]");
  const descInput = document.querySelector("input[name=description]");
  const dateInput = document.querySelector("input[name=due-date]");
  const priorityInput = document.querySelector("select");

  const newItem = new toDo(
    titleInput.value,
    descInput.value,
    dateInput.value,
    priorityInput.value
  );
  console.log(newItem);
  return newItem;
}

function createProject() {
  const projectTitleInput = document.querySelector("input[name=project-title]");
  const projectDescInput = document.querySelector(
    "input[name=project-description]"
  );

  const newProject = new project(
    projectTitleInput.value,
    projectDescInput.value
  );
  console.log(newProject);
  return newProject;
}

//event listeners
// function submitToDo() {
//   const toDoForm = document.querySelector(".to-do-form");
//   toDoForm.addEventListener("submit", addToProject);
// }

// function submitProject() {
//   const projectForm = document.querySelector(".project-form");
//   projectForm.addEventListener("submit", addNewProject);
// }

//on to-do form submit, create a toDo and push it to the project
function addToProject() {
  const item = createToDo();
  defaultProject.toDoItemsArray.push(item);
  console.log(defaultProject);
  return item;
}

//on project form submit, make a new project objecg and push to the array of projects
function addNewProject() {
  const userProject = createProject();
  projectsArray.push(userProject);
  console.log(projectsArray);
}

export { projectsArray, defaultProject, createToDo, addToProject };
