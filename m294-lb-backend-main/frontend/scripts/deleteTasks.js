document.addEventListener("DOMContentLoaded", () => {

    const checkboxes = document.getElementsByName("checkbox");
    const deleteForm = document.getElementById("deleteForm");

    deleteForm.addEventListener("submit",(e) =>{
        e.preventDefault();
        if(confirm("Are you sure you want to delete the task(s)?")){

            for(const checkbox of checkboxes){
                if(checkbox.checked == 1){
                    
                    fetch("http://127.0.0.1:3000/auth/cookie/task/"+ checkbox.value, {
                        method : 'DELETE',
                        credentials: "include",
                        
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        },
                    })
                        .then((response) => response.json());

                }
            }

        }
    });

})


