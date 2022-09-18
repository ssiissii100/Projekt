function showTasks(tasks) {
    const tasksDisplayId = document.getElementById('id');
    const tasksDisplayTitel = document.getElementById('titel');
    const tasksDisplayStatus = document.getElementById('status');
    const taskDisplayEdit = document.getElementById('edit');
    const taskDisplayCheckbox = document.getElementById('check');

    tasks.forEach((task) => {
        const taskId = document.createElement('p');
        const taskTitle = document.createElement('p');
        const taskStatus = document.createElement('p');
        const taskEdit = document.createElement('label');
        const taskCheckbox = document.createElement('input');

        taskCheckbox.type = "checkbox";
        taskCheckbox.name = "checkbox";
        taskCheckbox.value= task.id;
        taskCheckbox.id = "checkbox";
        
        taskEdit.id = task.id;
        taskEdit.for
        taskEdit.innerHTML = "Edit Task" + task.id;
        taskId.innerText = task.id + task.title + task.completed;

        tasksDisplayId.appendChild(taskId);
        tasksDisplayTitel.appendChild(taskTitle);
        tasksDisplayStatus.appendChild(taskStatus);
        taskDisplayCheckbox.appendChild(taskCheckbox);
        taskDisplayEdit .appendChild(taskEdit);
        

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