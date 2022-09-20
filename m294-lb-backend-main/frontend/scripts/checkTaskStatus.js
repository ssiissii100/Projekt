function checkTaskStatus() {
    if (task.completed == false) {

        taskStatus.setAttribute("src", "./images/cross.png");
        taskStatus.style.filter = "invert(18%) sepia(99%) saturate(7461%) hue-rotate(359deg) brightness(112%) contrast(108%)";
        tableColums.appendChild(taskStatus);
    } else {

        taskStatus.setAttribute("src", "./images/mark.png");
        taskStatus.style.filter = "invert(59%) sepia(99%) saturate(3157%) hue-rotate(85deg) brightness(119%) contrast(122%)";
        tableColums.appendChild(taskStatus);
    }
}