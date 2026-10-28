if(sessionStorage.getItem("isLoggedIn") === "true"){
    window.location.replace("index.html");
}
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {
    console.log("Form Submitted");

    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (email === "student@example.com" && password === "Study123!") {
        message.textContent = "Login successful! Redirecting...";
        message.className = "success";

        sessionStorage.setItem("isLoggedIn", "true");

        setTimeout(function() {
            window.location.href = "index.html";
        }, 1000);

    } else {
        message.textContent = "Incorrect email or password";
        message.className = "error";
    }
});
