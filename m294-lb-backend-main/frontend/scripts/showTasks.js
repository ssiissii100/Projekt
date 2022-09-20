function showTasks(tasks) {
    const taskTable = document.getElementById("table");

    tasks.forEach((task) => {
        const taskId = document.createElement('td');
        const taskTitle = document.createElement('td');
        const editButtonTd = document.createElement('td');
        const editTaskCheckBoxTd = document.createElement('td');
        const tableColums = document.createElement('tr');
        const taskStatus = document.createElement("img");
        const editButton = document.createElement('button');
        const taskCheckbox = document.createElement('input');

        taskTitle.className = "editTitle";

        taskCheckbox.type = "checkbox";
        taskCheckbox.name = "checkbox";
        taskCheckbox.value = task.id;
        taskCheckbox.id = "checkbox";
        taskCheckbox.style.float = "left";

        editButton.className = "btn btn-outline-dark"
        editButton.id = task.id;
        editButton.type = "button";
        editButton.onclick = function(){rederectEdit(task.id)};
        editButton.innerHTML = "Edit Task " + task.id;

        taskId.innerText = task.id;
        taskTitle.innerText = task.title;

        taskTitle.id = task.id;
        taskTitle.className = "taskTitle";

        taskTable.appendChild(tableColums);
        tableColums.appendChild(taskId);
        tableColums.appendChild(taskTitle);

        if (task.completed == false) {

            taskStatus.setAttribute("src", "./images/cross.png");
            taskStatus.style.filter = "invert(18%) sepia(99%) saturate(7461%) hue-rotate(359deg) brightness(112%) contrast(108%)";
            taskStatus.checked = false;
            tableColums.appendChild(taskStatus);
        } else {

            taskStatus.setAttribute("src", "./images/mark.png");
            taskStatus.style.filter = "invert(59%) sepia(99%) saturate(3157%) hue-rotate(85deg) brightness(119%) contrast(122%)";
            taskTitle.style.color = "grey";
            taskTitle.style.textDecoration = "line-through";
            tableColums.appendChild(taskStatus);
        }
        tableColums.appendChild(editButtonTd);
        tableColums.appendChild(editTaskCheckBoxTd);
        editButtonTd.appendChild(editButton);
        editTaskCheckBoxTd.appendChild(taskCheckbox);
    });
}


document.addEventListener("DOMContentLoaded", () => {

    const idArray = [];
    const titleArray = [];
    const completedArray = [];
    
    fetch("http://127.0.0.1:3000/auth/cookie/tasks", {
        method: 'GET',
        credentials: 'include',
    })
        .then((response) => response.json())
        .then((data) => {
            showTasks(data);
            for (let i = 0; i < data.length; i++) {
                idArray.push(data[i].id);
                titleArray.push(data[i].title);
                completedArray.push(data[i].completed);
            }

        }
        );
})

