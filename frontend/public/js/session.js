
let login = document.getElementById("header__navigation__login");
let register = document.getElementById("header__navigation__register");
let logout = document.getElementById("header__navigation__logout");
let profile = document.getElementById("header__navigation__profiel");

function handler() {
    // assuming we dont add extra cookies
    if (document.cookie.includes("loggedIn=true")) {
        register.style.display = "none";
        login.style.display = "none";
        logout.style.display = "block";
        profile.style.display = "block";

    } else {
        register.style.display = "block";
        login.style.display = "block";
        logout.style.display = "none";
        profile.style.display = "none";
    }
}
handler();

login.addEventListener("click", handler);
register.addEventListener("click", handler);
logout.addEventListener("click", handler);