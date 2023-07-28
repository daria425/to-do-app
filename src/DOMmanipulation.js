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

class domControllerCl extends logicControllerCl {
  arrayPusher(item) {
    this.allProjects.push(item);
  }
  removeFromDom(button) {
    const selectedTask = button.parentElement;
    selectedTask.parentElement.removeChild(selectedTask);
  }
}
const DOMcontroller = new domControllerCl();

DOMcontroller.displayToDo = function () {
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
    removeElement(e);
    reassignIndex();
  });
  item.append(itemTitle, itemDesc, itemDate, itemPriority, deleteToDobtn);
  itemContainer.appendChild(item);
};

DOMcontroller.displayProject = function () {
  const projectContainer = document.querySelector(".projects");
  const newProject = document.createElement("div");
  newProject.classList.add("new-project");

  for (let i = 0; i < this.allProjects.length; i++) {
    newProject.dataset.index = i;
    newProject.textContent = this.allProjects[i]["name"];
  }
  newProject.addEventListener("click", function (e) {
    const arrayPosition = e.target.dataset.index;
    DOMcontroller.saveAsActive(DOMcontroller.allProjects[arrayPosition]);
    logicController.saveAsActive(logicController.allProjects[arrayPosition]);
    removeTasksFromDOM();
    DOMcontroller.displayAll();
  });
  projectContainer.appendChild(newProject);
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
    deleteToDobtn.addEventListener("click", removeElement);
    item.append(itemTitle, itemDesc, itemDate, itemPriority, deleteToDobtn);
    itemContainer.appendChild(item);
  }
};

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

function removeElement(e) {
  const arrayPosition = e.target.parentElement.dataset.index;
  logicController.deleteToDo(arrayPosition);
  DOMcontroller.deleteToDo(arrayPosition);
  DOMcontroller.removeFromDom(e.target);
}
function reassignIndex() {
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
export { DOMcontroller };
// export { displayToDo };
