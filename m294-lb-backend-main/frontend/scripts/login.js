document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm")

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
              email: "test@test.ch",
              password: "m294"
            }),
        })
            .then((response) => response.json());
    })      
})


