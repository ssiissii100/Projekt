function rederectEdit(taskID) {
    location.hash = taskID;
    window.location.href = "./editTask.html" + location.hash;
}
