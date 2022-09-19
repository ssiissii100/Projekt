function showTasks(tasks) {
    const tasksDisplayId = document.getElementById('id');
    const tasksDisplayTitel = document.getElementById('titel');
    const tasksDisplayStatus = document.getElementById('status');
    const taskDisplayButton = document.getElementById('button');
    const taskDisplayCheckbox = document.getElementById('check');

    tasks.forEach((task) => {
        const taskId = document.createElement('p');
        const taskTitle = document.createElement('p');
        const taskStatus = document.createElement('p');
        const editButton = document.createElement('BUTTON');
        const taskCheckbox = document.createElement('input');

        taskTitle.className = "editTitle";

        taskCheckbox.type = "checkbox";
        taskCheckbox.name = "checkbox";
        taskCheckbox.value= task.id;
        taskCheckbox.id = "checkbox";
    
        editButton.className = "editButton";
        editButton.id = task.id;
        editButton.type = "button";
        editButton.innerHTML = "Edit Task " + task.id;
        editButton.onclick = function(){
            editButtonTrigger(editButton.id);
        }

        taskId.innerText = task.id;
        taskTitle.innerText = task.title; 
        taskStatus.innerText = task.completed;
        taskTitle.id = task.id;
        taskTitle.className = "taskTitle";

        tasksDisplayId.appendChild(taskId);
        tasksDisplayTitel.appendChild(taskTitle);
        tasksDisplayStatus.appendChild(taskStatus);
        taskDisplayCheckbox.appendChild(taskCheckbox);
        taskDisplayButton.appendChild(editButton);
        
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const idArray = [];
    const titleArray = [];
    const completedArray = [];

    fetch("http://127.0.0.1:3000/tasks")
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

