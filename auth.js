const isLoggedIn = sessionStorage.getItem("isLoggedIn");

if(isLoggedIn !== "true"){
    window.location.replace("login.html");
}
document.addEventListener("DOMContentLoaded", function(){
    const logoutBtn = document.getElementById("logoutBtn");

    if(logoutBtn){
        logoutBtn.addEventListener("click", function(){
            sessionStorage.removeItem("isLoggedIn");

            window.location.replace("login.html");
        })
    }
})