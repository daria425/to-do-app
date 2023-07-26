//display the last item of the toDo array on form submission
function displayToDo(projectsArray) {
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
  for (let i = 0; i < projectsArray[0]["toDoItemsArray"].length; i++) {
    item.dataset.index = i;
    itemTitle.textContent = projectsArray[0]["toDoItemsArray"][i]["title"];
    itemDesc.textContent = projectsArray[0]["toDoItemsArray"][i]["description"];
    itemDate.textContent = projectsArray[0]["toDoItemsArray"][i]["dueDate"];
    itemPriority.textContent =
      projectsArray[0]["toDoItemsArray"][i]["priority"];
  }
  const deleteToDobtn = document.createElement("button");
  deleteToDobtn.classList.add("delete-todo-btn");
  deleteToDobtn.textContent = "delete";
  item.append(itemTitle, itemDesc, itemDate, itemPriority, deleteToDobtn);
  itemContainer.appendChild(item);
}

function displayDefaultProject(project) {
  const projectContainer = document.querySelector(".projects");
  const defaultProject = document.createElement("div");
  defaultProject.classList.add("default-project");
  const defaultProjectTitle = document.createElement("div");
  defaultProjectTitle.classList.add("default-project-title");
  defaultProjectTitle.textContent = project.name;
  defaultProject.appendChild(defaultProjectTitle);
  projectContainer.appendChild(defaultProject);
}
export { displayToDo, displayDefaultProject };
