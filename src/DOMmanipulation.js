// //display the last item of the toDo array on form submission
// import { projectsArray } from "./createToDo";
// import { home } from "./createToDo";

// class activeProject {
//   visibleElements = [];
//   constructor(currentlyActive) {
//     this.currentlyActive = currentlyActive;
//   }
// }
import { controller, logicController } from "./createToDo";

const DOMcontroller = new controller();

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
  item.append(itemTitle, itemDesc, itemDate, itemPriority, deleteToDobtn);
  itemContainer.appendChild(item);
};

// function displayNewProject(projectArray) {
//   const projectContainer = document.querySelector(".projects");
//   const newProject = document.createElement("div");
//   newProject.classList.add("new-project");
//   const newProjectTitle = document.createElement("div");
//   newProjectTitle.classList.add("new-project-title");
//   for (let i = 0; i < projectArray.length; i++) {
//     newProject.dataset.index = i;
//     newProjectTitle.textContent = projectArray[i]["name"];
//     newProjectTitle.addEventListener("click", function () {
//       removeTasksFromDOM();
//     });
//   }
//   newProject.appendChild(newProjectTitle);
//   projectContainer.appendChild(newProject);
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

// function removeTasksFromDOM() {
//   const tasks = document.querySelector(".tasks");
//   while (tasks.firstChild) {
//     tasks.removeChild(tasks.lastChild);
//   }
// }
export { DOMcontroller };
// export { displayToDo };
