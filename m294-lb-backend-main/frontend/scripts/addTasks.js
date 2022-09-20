document.addEventListener("DOMContentLoaded", () => {

    const inputTitle = document.getElementById("inputTitle");
    const newTaskForm = document.getElementById("newTaskForm");

    newTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/auth/cookie/tasks", {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: inputTitle.value

            }),
        })
            .then((response) => response.json())
            .then(() => {
                window.location.reload();
            });
    });
})


