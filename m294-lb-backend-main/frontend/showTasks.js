function showTasks(tasks) {
    console.log(tasks);
    const tasksDisplayId = document.getElementById('id');
    const tasksDisplayTitel = document.getElementById('titel');
    const tasksDisplayStatus = document.getElementById('status');

    tasks.forEach((task) => {
        const taskId = document.createElement('p');
        const taskTitle = document.createElement('p');
        const taskStatus = document.createElement('p');
        
        taskId.innerText = task.id;
        tasksDisplayId.appendChild(taskId);

        taskTitle.innerText = task.title;
        tasksDisplayTitel.appendChild(taskTitle);

        taskStatus.innerText = task.completed;
        tasksDisplayStatus.appendChild(taskStatus);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const taskId = document.getElementById("taskId");
    const taskTitle = document.getElementById("taskTitle");
    const taskStatus = document.getElementById("taskStatus");

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
