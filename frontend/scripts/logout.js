document.addEventListener("DOMContentLoaded", () => {

    const outForm = document.getElementById("logoutForm");

    //Loescht den Cookie drucken auf den Button und rederected auf die index.html
    outForm.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/auth/cookie/logout", {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                string : {}

            }),
        })
            .then(() => window.location.href = "./index.html");

    })

})