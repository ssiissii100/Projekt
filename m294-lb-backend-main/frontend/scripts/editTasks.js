const titles = document.getElementsByClassName("taskTitle");
const element = document.getElementById("container");
const newTitle = document.getElementById("newTitle");
const newTitleForm = document.getElementById("newTitleForm");

document.addEventListener("DOMContentLoaded", () => {
    newTitleForm.addEventListener("submit", (e) => { 
        e.preventDefault();
        fetch("http://127.0.0.1:3000/auth/cookie/tasks", {
            method: 'PUT',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
        },
        body: JSON.stringify({
            title: newTitle.value,
        }),
    })
        .then(() => window.location.href = "./index.html");
    
    })
})
function editButtonTrigger(taskId){
    
    location.hash = taskId;
    const inputNewTitle = document.createElement('input');
    const buttonNewTitle = document.createElement('button');

    inputNewTitle.type = "text";
    buttonNewTitle.type = "submit";
    buttonNewTitle.innerHTML = "Save";
    inputNewTitle.innerText = taskId.value;

    newTitleForm.appendChild(inputNewTitle);
    newTitleForm.appendChild(buttonNewTitle);




}

