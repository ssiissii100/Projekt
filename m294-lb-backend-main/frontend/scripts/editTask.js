function showTask(data) {
    const taskTable = document.getElementById("table");

    const taskId = document.createElement('td');
    const taskTitle = document.createElement('td');
    const taskStatus = document.createElement("img");
    const tableColums = document.createElement('tr');

    taskTitle.className = "editTitle";

    taskId.innerText = data.id;
    taskTitle.innerText = data.title;
    taskStatus.innerText = data.completed;

    tableColums.appendChild(taskId);
    tableColums.appendChild(taskTitle);
    if (data.completed == false) {

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
    taskTable.appendChild(tableColums);
}


document.addEventListener("DOMContentLoaded", () => {
   
    const selectedTask = window.location.hash.substring(1);

    fetch("http://127.0.0.1:3000/auth/cookie/task/" + selectedTask, {
        method: 'GET',
        credentials: 'include',
    })
        .then((response) => response.json())
        .then((data) => showTask(data));

    const saveTask = document.getElementById("saveTask");
    const newTaskTitle = document.getElementById("newTaskTitle");
    const taksStatus = document.getElementById("taksStatus");
    const cancelButton = document.getElementById("cancelButton");
    cancelButton.onclick = function () {
        window.location.href = "./toDoList.html";
    }

    saveTask.addEventListener("submit", (e) => {
        e.preventDefault();

        fetch("http://127.0.0.1:3000/auth/cookie/tasks", {
            method: 'PUT',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                id: selectedTask,
                title: newTaskTitle.value,
                completed: Boolean(taksStatus.checked),
            }),
        })
            .then(() => window.location.href = "./toDoList.html");

    })
    

})


