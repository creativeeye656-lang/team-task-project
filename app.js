// ==========================================
// app.js — main project file
// This file is built together by the whole team, but changes are made only through Pull Requests
// ==========================================

// Main array that keeps all tasks
// Each task is an object: { id, text, completed }
let tasks = [];

// Get the main DOM elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");

// ==========================================
// Main function to render the task list on the page
// This function is called by other features (filter, delete, complete)
// ==========================================
function renderTasks(taskArray = tasks) {
  taskList.innerHTML = "";

  taskArray.forEach((task) => {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    if (task.completed) li.classList.add("completed");

    // TODO (Feature: Mark as Complete):
    // Add a checkbox or button here to toggle task.completed

    const span = document.createElement("span");
    span.textContent = task.text;
    li.appendChild(span);

    // TODO (Feature: Delete Task):
    // Add a delete button here to remove the task from the tasks array

    taskList.appendChild(li);
  });

  updateTaskCounter();
}

// ==========================================
// Add a new task (base feature — example template)
// ==========================================
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = taskInput.value.trim();
  if (text === "") return;

  const newTask = {
    id: Date.now(), // Simple, unique identifier
    text: text,
    completed: false,
  };

  tasks.push(newTask);
  taskInput.value = "";
  renderTasks();
});

// ==========================================
// TODO (Feature: Task Counter):
// Complete this function to show the number of incomplete tasks
// ==========================================
function updateTaskCounter() {
  const remaining = tasks.filter((t) => !t.completed).length;
  taskCounter.textContent = `${remaining} task${remaining === 1 ? "" : "s"} remaining`;
}

// ==========================================
// TODO (Feature: Filter Tasks):
// Listen for clicks on #filterButtons and render only the relevant tasks
// based on the data-filter value (all / active / completed)
// ==========================================

// ==========================================
// TODO (Feature: Clear Completed):
// Listen for clicks on #clearCompleted, remove tasks where completed=true,
// then call renderTasks() again
// ==========================================

// Initial render (empty)
renderTasks();
