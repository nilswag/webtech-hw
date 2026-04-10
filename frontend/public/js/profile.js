import { getData } from "./util/api.js";

const form = document.querySelector("form.personal-info__update");
const teams = await getData("/teams");
const user = await getData("/users/fetch");

const dropdown = document.querySelector("select.update__favorite-team");
const firstName = document.querySelector(".update__firstName input");
const lastName = document.querySelector(".update__lastName input");
const email = document.querySelector(".update__email input");

if (user) {
    firstName.value = user.firstName || "";
    lastName.value = user.lastName || "";
    email.value = user.email || "";
}

const password = document.querySelector("#password");
const passwordRepeat = document.querySelector("#password-repeat");

form.addEventListener("submit", (e) => {
    if (password.value !== passwordRepeat.value) {
        alert("Passwords are not equal.");
        return e.preventDefault();
    }
});

teams.forEach(t => {
    const option = document.createElement("option");
    option.innerText = t.name ? t.name : "N/A";
    option.value = t.name ? t.name : "N/A";
    dropdown.appendChild(option);
});