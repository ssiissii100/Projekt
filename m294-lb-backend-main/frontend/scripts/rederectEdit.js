function selectTitleId(taskID){
    if(loginStatus == true){
        location.hash = taskID;
        window.location.href = "./editTask.html" + location.hash;
    }
    else{
        window.location.href = "./index.html"
    }


}
