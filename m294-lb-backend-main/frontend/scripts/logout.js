document.addEventListener("DOMContentLoaded", () => {
   
    const outForm = document.getElementById("logoutForm");

    outForm.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/auth/cookie/logout", {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then(() => window.location.href = "./index.html");
        
    })      
    
    
})