document.addEventListener("DOMContentLoaded", () => {

    const newTaskForm = document.getElementById("newTaskForm");
    const inputTitle = document.getElementById("inputTitle");

    newTaskForm.addEventListener("submit", () => {
        
        fetch("http://127.0.0.1:3000/tasks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                title: inputTitle.value
             
            }),
        })
            .then((response) => response.json())

    });


})


