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
      const arrayPosition = e.target.dataset.index;
      DOMcontroller.activeProject.saveToDoAsActive(
        DOMcontroller.activeProject["toDoItemsArray"][arrayPosition]
      );
      fillForm(arrayPosition);
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
}
const DOMcontroller = new domControllerCl();

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
      fillForm(arrayIndex);
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

function fillForm(arrayIndex) {
  const titleInput = document.querySelector("input[name=edit-title]");
  const descInput = document.querySelector("input[name=edit-description]");
  const dateInput = document.querySelector("input[name=edit-due-date]");
  const priorityInput = document.querySelector("select[name=edit-priority]");
  titleInput.value =
    DOMcontroller.activeProject["toDoItemsArray"][arrayIndex]["title"];
  descInput.value =
    DOMcontroller.activeProject["toDoItemsArray"][arrayIndex]["description"];
  dateInput.value =
    DOMcontroller.activeProject["toDoItemsArray"][arrayIndex]["dueDate"];
  priorityInput.value =
    DOMcontroller.activeProject["toDoItemsArray"][arrayIndex]["priority"];
}

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
export { DOMcontroller };
// export { displayToDo };
