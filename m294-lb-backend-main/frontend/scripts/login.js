var loginStatus;
document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/auth/cookie/login", {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email: "info@example.com",
                password: "m294"
            }),
        })
            .then((data) => checkLoginData(data.email, data.password));


        fetch("http://127.0.0.1:3000/auth/cookie/status", {
            method: 'GET',
            credentials: "include",

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((emailData) => checkLoginData(emailData.email));

    })


})

function checkLoginData(emailData) {

    const inputEmail = document.getElementById("inputEmail");
    const warning = document.getElementById("warning");


    if (emailData == inputEmail.value) {

        loginStatus = true;
        window.location.href = "./toDoList.html";

    }
    else {
        loginStatus = false;
        warning.innerHTML = "invalid login data";
        warning.style.color = "red";
    }

}