document.addEventListener("DOMContentLoaded", () => {

    deleteButton.addEventListener("click",function(){
        const checkboxes = document.getElementsByName("checkbox");
        
        if(confirm("Are you sure you want to delete the task(s)?")){


            for(const checkbox of checkboxes){
                if(checkbox.checked == 1){
                    
                    fetch("http://127.0.0.1:3000/task/"+checkbox.value, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then((response) => response.json())

                }
            }

        }
        location.reload();
    });

})


