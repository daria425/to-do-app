class project {
  toDoItemsArray = [];
}
class toDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const defaultProject = new project();

function createToDo() {
  const titleInput = document.querySelector("input[name=title]");
  const descInput = document.querySelector("input[name=description]");
  const dateInput = document.querySelector("input[name=due-date]");
  const priorityInput = document.querySelector("select");
  const form = document.querySelector("form");
  const submitBtn = document.querySelector(".submit-todo");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const testItem = new toDo(
      titleInput.value,
      descInput.value,
      dateInput.value,
      priorityInput.value
    );
    defaultProject.toDoItemsArray.push(testItem);
    console.log(defaultProject);
  });

  return defaultProject;
}

export { createToDo };
