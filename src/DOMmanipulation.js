//display the last item of the toDo array on form submission
import { submitToDo, submitProject } from "./createToDo";

function displayToDo(task) {
  const itemContainer = document.querySelector(".tasks");
  const item = document.createElement("div");
  item.classList.add("item");
  const itemTitle = document.createElement("div");
  itemTitle.classList.add("item-title");
  itemTitle.textContent = task.title;
  const itemDesc = document.createElement("div");
  itemDesc.classList.add("item-description");
  itemDesc.textContent = task.description;
  const itemDate = document.createElement("div");
  itemDate.classList.add("item-due-date");
  itemDate.textContent = task.dueDate;
  const itemPriority = document.createElement("div");
  itemPriority.classList.add("item-priority");
  itemPriority.textContent = task.priority;
  item.append(itemTitle, itemDesc, itemDate, itemPriority);
  itemContainer.appendChild(item);
}

export { displayToDo };
