// //display the last item of the toDo array on form submission
// import { projectsArray } from "./createToDo";
// import { home } from "./createToDo";

// class activeProject {
//   visibleElements = [];
//   constructor(currentlyActive) {
//     this.currentlyActive = currentlyActive;
//   }
// }
import { logicController, logicControllerCl, project } from "./createToDo";
import "./events.css";

class domControllerCl extends logicControllerCl {
  constructor(projectArray, activeItem) {
    super(projectArray, activeItem);
  }
  arrayPusher(item) {
    this.allProjects.push(item);
  }
  removeFromDom(button) {
    const selectedTask = button.parentElement;
    selectedTask.parentElement.removeChild(selectedTask);
  }
  displayToDo() {
    const itemContainer = document.querySelector(".tasks");
    const item = document.createElement("div");
    item.classList.add("item");
    const itemTitle = document.createElement("div");
    itemTitle.classList.add("item-title");

    const itemDesc = document.createElement("div");
    itemDesc.classList.add("item-description");

    const itemDate = document.createElement("div");
    itemDate.classList.add("item-due-date");

    const itemPriority = document.createElement("div");
    itemPriority.classList.add("item-priority");
    for (let i = 0; i < this.activeProject["toDoItemsArray"].length; i++) {
      item.dataset.index = i;
      itemTitle.textContent = this.activeProject["toDoItemsArray"][i]["title"];
      itemDesc.textContent =
        this.activeProject["toDoItemsArray"][i]["description"];
      itemDate.textContent = this.activeProject["toDoItemsArray"][i]["dueDate"];
      itemPriority.textContent =
        this.activeProject["toDoItemsArray"][i]["priority"];
    }
    const deleteToDobtn = document.createElement("button");
    deleteToDobtn.classList.add("delete-todo-btn");
    deleteToDobtn.textContent = "delete";
    deleteToDobtn.addEventListener("click", function (e) {
      const arrayIndex = e.target.parentElement.dataset.index;
      removeElement(arrayIndex);
      DOMcontroller.removeFromDom(e.target);
      reassignIndex();
    });
    const editToDobtn = document.createElement("button");
    editToDobtn.classList.add("edit-todo-btn");
    editToDobtn.textContent = "edit";
    editToDobtn.addEventListener("click", function (e) {
      const arrayPosition = e.target.parentElement.dataset.index;
      DOMcontroller.activeProject.saveToDoAsActive(
        DOMcontroller.activeProject["toDoItemsArray"][arrayPosition]
      );
      fillForm();
      document.querySelector(".edit-to-do-form").classList.toggle("visible");
    });
    item.append(
      itemTitle,
      itemDesc,
      itemDate,
      itemPriority,
      deleteToDobtn,
      editToDobtn
    );
    itemContainer.appendChild(item);
  }
  updateTextContent() {
    const tasks = document.querySelectorAll(".item");
    const selectedTask =
      tasks[
        this.activeProject.toDoItemsArray.indexOf(this.activeProject.activeToDo)
      ];
    const [title, description, dueDate, priority, ...buttons] =
      selectedTask.children;
    title.textContent = this.activeProject.activeToDo["title"];
    description.textContent = this.activeProject.activeToDo["description"];
    dueDate.textContent = this.activeProject.activeToDo["dueDate"];
    priority.textContent = this.activeProject.activeToDo["priority"];
  }
}
let DOMcontroller = new domControllerCl();

DOMcontroller.displayProject = function () {
  const projectContainer = document.querySelector(".projects");
  const editingContainer = document.createElement("div");
  editingContainer.classList.add("editing-container");
  const newProject = document.createElement("div");
  newProject.classList.add("new-project");
  const deleteProjectBtn = document.createElement("button");
  deleteProjectBtn.classList.add("delete-project-btn");
  deleteProjectBtn.textContent = "delete";

  for (let i = 0; i < this.allProjects.length; i++) {
    newProject.dataset.index = i;
    editingContainer.dataset.index = i;
    newProject.textContent = this.allProjects[i]["name"];
  }
  newProject.addEventListener("click", function (e) {
    const arrayPosition = e.target.dataset.index;
    DOMcontroller.saveAsActive(DOMcontroller.allProjects[arrayPosition]);
    logicController.saveAsActive(logicController.allProjects[arrayPosition]);
    removeTasksFromDOM();
    DOMcontroller.displayAll();
  });
  deleteProjectBtn.addEventListener("click", function (e) {
    const arrayPosition = e.target.parentElement.dataset.index;
    logicController.deleteProject(arrayPosition);
    DOMcontroller.removeFromDom(deleteProjectBtn);
    removeTasksFromDOM();
    DOMcontroller.activeProject = DOMcontroller.allProjects[arrayPosition - 1];
    reassignProjectIndex();
    console.log(DOMcontroller);
  });
  editingContainer.append(newProject, deleteProjectBtn);
  projectContainer.appendChild(editingContainer);
};
DOMcontroller.displayAllProjects = function () {
  const projectContainer = document.querySelector(".projects");
  for (let i = 0; i < this.allProjects.length; i++) {
    const editingContainer = document.createElement("div");
    editingContainer.classList.add("editing-container");
    const newProject = document.createElement("div");
    newProject.classList.add("new-project");

    editingContainer.dataset.index = i;
    newProject.dataset.index = i;
    newProject.textContent = this.allProjects[i]["name"];
    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.classList.add("delete-project-btn");
    deleteProjectBtn.textContent = "delete";
    newProject.addEventListener("click", function (e) {
      const arrayPosition = e.target.dataset.index;
      DOMcontroller.saveAsActive(DOMcontroller.allProjects[arrayPosition]);
      logicController.saveAsActive(logicController.allProjects[arrayPosition]);
      removeTasksFromDOM();
      DOMcontroller.displayAll();
    });
    deleteProjectBtn.addEventListener("click", function (e) {
      const arrayPosition = e.target.parentElement.dataset.index;
      logicController.deleteProject(arrayPosition);
      DOMcontroller.removeFromDom(deleteProjectBtn);
      removeTasksFromDOM();
      DOMcontroller.activeProject =
        DOMcontroller.allProjects[arrayPosition - 1];
      reassignProjectIndex();
      console.log(DOMcontroller);
    });
    editingContainer.append(newProject, deleteProjectBtn);
    projectContainer.appendChild(editingContainer);
  }
  //modified
};
DOMcontroller.displayAll = function () {
  const itemContainer = document.querySelector(".tasks");

  for (let i = 0; i < this.activeProject["toDoItemsArray"].length; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    const itemTitle = document.createElement("div");
    itemTitle.classList.add("item-title");

    const itemDesc = document.createElement("div");
    itemDesc.classList.add("item-description");

    const itemDate = document.createElement("div");
    itemDate.classList.add("item-due-date");

    const itemPriority = document.createElement("div");
    itemPriority.classList.add("item-priority");
    item.dataset.index = i;
    itemTitle.textContent = this.activeProject["toDoItemsArray"][i]["title"];
    itemDesc.textContent =
      this.activeProject["toDoItemsArray"][i]["description"];
    itemDate.textContent = this.activeProject["toDoItemsArray"][i]["dueDate"];
    itemPriority.textContent =
      this.activeProject["toDoItemsArray"][i]["priority"];
    const deleteToDobtn = document.createElement("button");
    deleteToDobtn.classList.add("delete-todo-btn");
    deleteToDobtn.textContent = "delete";
    deleteToDobtn.addEventListener("click", function (e) {
      const arrayIndex = e.target.parentElement.dataset.index;
      removeElement(arrayIndex);
      DOMcontroller.removeFromDom(e.target);
      reassignIndex();
    });
    const editToDobtn = document.createElement("button");
    editToDobtn.classList.add("edit-todo-btn");
    editToDobtn.textContent = "edit";
    editToDobtn.addEventListener("click", function (e) {
      const arrayIndex = e.target.parentElement.dataset.index;
      DOMcontroller.activeProject.saveToDoAsActive(
        DOMcontroller.activeProject["toDoItemsArray"][arrayIndex]
      );
      fillForm();
      document.querySelector(".edit-to-do-form").classList.toggle("visible");
    });
    item.append(
      itemTitle,
      itemDesc,
      itemDate,
      itemPriority,
      deleteToDobtn,
      editToDobtn
    );
    itemContainer.appendChild(item);
  }
};

function fillForm() {
  const titleInput = document.querySelector("input[name=edit-title]");
  const descInput = document.querySelector("input[name=edit-description]");
  const dateInput = document.querySelector("input[name=edit-due-date]");
  const priorityInput = document.querySelector("select[name=edit-priority]");
  titleInput.value = DOMcontroller.activeProject.activeToDo["title"];
  descInput.value = DOMcontroller.activeProject.activeToDo["description"];
  dateInput.value = DOMcontroller.activeProject.activeToDo["dueDate"];
  priorityInput.value = DOMcontroller.activeProject.activeToDo["priority"];
}

// function updateTextContent() {
//   const tasks = document.querySelectorAll(".item");
//   const selectedTask =
//     tasks[
//       DOMcontroller.activeProject.toDoItemsArray.indexOf(
//         DOMcontroller.activeProject.activeToDo
//       )
//     ];
//   const [title, description, dueDate, priority, ...buttons] =
//     selectedTask.children;
//   title.textContent = DOMcontroller.activeProject.activeToDo["title"];
//   description.textContent =
//     DOMcontroller.activeProject.activeToDo["description"];
//   dueDate.textContent = DOMcontroller.activeProject.activeToDo["dueDate"];
//   priority.textContent = DOMcontroller.activeProject.activeToDo["priority"];
// }
// function displayHomePage(projectArray) {
//   const projectContainer = document.querySelector(".projects");
//   const homePage = document.createElement("div");
//   homePage.classList.add("default-project");
//   const homePageTitle = document.createElement("div");
//   homePageTitle.classList.add("default-project-title");
//   homePageTitle.textContent = projectArray[0]["name"];
//   homePage.addEventListener("click", function () {
//     removeTasksFromDOM();
//     displayToDo(projectArray);
//   });
//   homePage.appendChild(homePageTitle);
//   projectContainer.appendChild(homePage);
// }

//edit form:
//.[]

function removeElement(arrayIndex) {
  logicController.activeProject.deleteToDo(arrayIndex);
}
function reassignIndex() {
  //makes an array of all the tasks on screen and reassigns them a data index value-links DOM elements back to their position within the activeProject's todoitems array
  let tasks = document.querySelectorAll(".item");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].dataset.index = i;
  }
}
function removeTasksFromDOM() {
  const tasks = document.querySelector(".tasks");
  while (tasks.firstChild) {
    tasks.removeChild(tasks.lastChild);
  }
}
function reassignProjectIndex() {
  let projectContainers = document.querySelectorAll(".editing-container");
  for (let i = 0; i < projectContainers.length; i++) {
    projectContainers[i].dataset.index = i;
  }
  let projects = document.querySelectorAll(".new-project");
  for (let i = 0; i < projects.length; i++) {
    projects[i].dataset.index = i;
  }
}
export { DOMcontroller };
// export { displayToDo };
