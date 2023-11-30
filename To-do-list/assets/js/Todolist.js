const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.getElementById("container");

// Empty array to store the tasks
let tasks = [];

// Retrieve the tasks array from local storage
const storedTasks = localStorage.getItem("tasks");
if (storedTasks) {
  tasks = JSON.parse(storedTasks);
  renderTasks();
}

// Add event listener to the container to listen for click events on the trash can icons
container.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-trash-can")) {
    const index = event.target.dataset.index;

    // Remove the task at the specified index from the tasks array
    tasks.splice(index, 1);

    // Update the container and local storage
    renderTasks();
    updateLocalStorage();
  }else if (event.target.classList.contains("fa-face-frown")) {
    const index = event.target.dataset.index;

    // Toggle the complete status of the task at the specified index
    tasks[index].complete = !tasks[index].complete;

    // Update the container and local storage
    renderTasks();
    updateLocalStorage();
  // Replace the red frown icon with a red heart icon if the task is complete
  const taskElements = document.querySelectorAll(".task");
  const taskElement = taskElements[index];
  const taskTitleElement = taskElement.querySelector("p");
  const taskComplete = tasks[index].complete;
  const heartIcon = '<i class="fa-solid fa-heart" style="color: red;"></i>';

  if (taskComplete) {
    taskTitleElement.style.textDecoration = "line-through";
    event.target.outerHTML = heartIcon;
  } else {
    taskTitleElement.style.textDecoration = "";
    event.target.outerHTML = '<i class="fa-solid fa-face-frown" data-index="${index}"></i>';
  }
  }else if (event.target.classList.contains("fa-star")) {
    const starIcon = event.target;
    starIcon.style.color = "orange";
    starIcon.style.opacity= "1";
  }
});

// Add event listener to the form to listen for submit events
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value === "") {
    alert("You must write something");
    return;
  }

  // Create a new task object with a unique ID, the input value as the title, and incomplete status
  const newTask = {
    id: Date.now(),
    title: input.value,
    complete: false,
  };

  // Add the new task object to the tasks array
  tasks.push(newTask);

  // Update the container and local storage
  renderTasks();
  updateLocalStorage();

  // Reset the input value to an empty string
  input.value = "";
});

function renderTasks() {
    // Generate HTML code for each task
    let tasksHTML = "";
    tasks.forEach((task, index) => {
      tasksHTML += `
        <div class="task">
          <i class="fa-solid fa-star"></i>
          <p class="${task.complete ? "complete" : ""}" style="${task.complete ? "text-decoration: line-through" : ""}">${task.title}</p>
          <div>
          <i class="fa-solid fa-trash-can" data-index="${index}"></i>
          ${task.complete ? '<i class="fa-solid fa-heart" style="color: red;"></i>' : `<i class="fa-solid fa-face-frown" data-index="${index}"></i>`}
        </div>
        </div>
      `;
    });

  // Add the generated HTML code to the container using innerHTML
  container.innerHTML = tasksHTML;
}
function updateLocalStorage() {
  // Store the tasks array in local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
