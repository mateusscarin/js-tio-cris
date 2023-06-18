const listTasks = document.getElementById("list-tasks");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");

let tasks = [];

getTasks();

function getTasks() {
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];

        let taskItem = document.createElement("div");
        if (task.completed) {
            taskItem.className = "task-item-completed";
        }

        let taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";
        taskCheckbox.checked = task.completed;
        taskCheckbox.addEventListener("click", toggleTask.bind(null, i));

        let taskText = document.createElement("div");
        taskText.innerHTML = '<span>' + task.name + '</span> <span>' + task.date + '</span>';
        taskText.addEventListener("click", toggleTask.bind(null, i));

        let removeButton = document.createElement("button");
        removeButton.className = "remove-button";
        let removeIcon = document.createElement("i");
        removeIcon.className = "far fa-trash-alt";
        removeButton.appendChild(removeIcon);
        removeButton.addEventListener("click", removeTask.bind(null, i));

        let taskButtons = document.createElement("div");
        taskButtons.appendChild(removeButton);

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(taskButtons);

        listTasks.appendChild(taskItem);
    }
}

function saveTask() {
    let newTask = {
        name: taskInput.value,
        date: dateInput.value,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = "";
    dateInput.value = "";
    localStorage.setItem('tasks', JSON.stringify(tasks));
    listTasks.innerHTML = '';
    getTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    listTasks.innerHTML = '';
    getTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    listTasks.innerHTML = ''
    getTasks();
}

function orderByDate() {
    tasks.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    listTasks.innerHTML = '';
    getTasks();
}