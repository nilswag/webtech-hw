import { getData } from "./util/api.js";

const form = document.querySelector("form.personal-info__update");
const user = await getData("");
const teams = await getData("/teams");

const dropdown = document.querySelector("select.update__favorite-team");

const firstName = document.querySelector("input.update__firstName");
const lastName = document.querySelector("input.update__lastName");
const email = document.querySelector("input.update__email");

const password = document.querySelector("input.update__password#pasword");
const passwordRepeat = document.querySelector("input.update__pasword#password-repeat");

form.addEventListener("submit", (e) => {
    if (password.innerText != passwordRepeat.innerText) {
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