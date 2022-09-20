function rederectEdit(taskID) {

    //Rederect auf die edittask.html Seite

    location.hash = taskID;
    window.location.href = './editTask.html' + location.hash;
}
