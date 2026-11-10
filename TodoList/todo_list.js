const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllTasksBtn = document.getElementById("clearAllTasksBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({
            text: taskText
        });
        taskInput.value="";
        displayTasks();
    }
}

const displayTasks = () => {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed? "checked" : ""}>
        <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

const toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

const clearCompletedTasks = () => {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

const clearAllTasks = () => {
    tasks = [];
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click",clearCompletedTasks);
clearAllTasksBtn.addEventListener("click", clearAllTasks);
