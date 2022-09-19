function showTask(data) {
    const taskTable = document.getElementById("table");


    const taskId = document.createElement('td');
    const taskTitle = document.createElement('td');
    const taskStatus = document.createElement('td');
    const tableColums = document.createElement('tr');

    taskTitle.className = "editTitle";

    taskId.innerText =  data.id;
    taskTitle.innerText =  data.title; 
    taskStatus.innerText = data.completed;

    tableColums.appendChild(taskId);
    tableColums.appendChild(taskTitle);
    tableColums.appendChild(taskStatus);
    taskTable.appendChild(tableColums);
}


    document.addEventListener("DOMContentLoaded", () => {   
        
        const selectedTask = window.location.hash.substring(1);
    
        fetch("http://127.0.0.1:3000/auth/cookie/task/" + selectedTask,{
                method : 'GET',
                credentials: 'include',
            })
            .then((response) => response.json())
            .then((data) => showTask(data));
    
        const saveTask= document.getElementById("saveTask");
        const newTaskTitle = document.getElementById("newTaskTitle");
        const taksStatus = document.getElementById("taksStatus");
    
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
                title: newTaskTitle.value,
                completed: Boolean(taksStatus.checked),
            }),
        })
            .then(() => window.location.href = "./toDoList.html");
       
        })
    
    })


