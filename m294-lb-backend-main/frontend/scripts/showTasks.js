function showTasks(tasks) {
    const taskTasks = document.getElementById("table");

    tasks.forEach((task) => {
        const taskId = document.createElement('td');
        const taskTitle = document.createElement('td');
        const taskStatus = document.createElement('td');
        const editButtonTd = document.createElement('td');
        const editTaskCheckBoxTd = document.createElement('td');
        const tableColums = document.createElement('tr');

        const editButton = document.createElement('BUTTON');
        const taskCheckbox = document.createElement('input');

        taskTitle.className = "editTitle";

        taskCheckbox.type = "checkbox";
        taskCheckbox.name = "checkbox";
        taskCheckbox.value= task.id;
        taskCheckbox.id = "checkbox";
        taskCheckbox.style.float = "left";
    
        editButton.className = "btn btn-outline-dark"
        editButton.id = task.id;
        editButton.type = "button";
        editButton.innerHTML = "Edit Task " + task.id;
        editButton.style.display= "inline-block";

        taskId.innerText = task.id;
        taskTitle.innerText = task.title; 
        taskStatus.innerText = task.completed;
        taskTitle.id = task.id;
        taskTitle.className = "taskTitle";

        taskTasks.appendChild(tableColums);
        tableColums.appendChild(taskId);
        tableColums.appendChild(taskTitle);
        tableColums.appendChild(taskStatus);
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

    fetch("http://127.0.0.1:3000/auth/cookie/tasks",{
            method : 'GET',
            credentials: 'include',
        })
        .then((response) => response.json())
        .then((data) => {
            showTasks(data);
                for(let i = 0; i < data.length; i++){
                    idArray.push(data[i].id);
                    titleArray.push(data[i].title);
                    completedArray.push(data[i].completed);
                }

            }
        );    
})

