import { getData } from "./util/api.js";
import { postData } from "./util/api.js";
import { handleResponse } from "./util/response-handler.js";

const form = document.querySelector("form.personal-info__update");
const teams = (await getData("/teams")).result;
const user = (await getData("/users/fetch")).result;

if (user) {
    form.firstName.value = user.firstName || "";
    form.lastName.value = user.lastName || "";
    form.email.value = user.email || "";
}

const password = document.querySelector("#password");
const passwordRepeat = document.querySelector("#password-repeat");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (password.value !== passwordRepeat.value) {
        return alert("Passwords are not equal.");
    }

    const response = await postData("/users/update-information", {
        favoriteTeam: form.favoriteTeam.value,
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        password: form.password.value
    });
    handleResponse(response);
});

teams.forEach(t => {
    const option = document.createElement("option");
    option.innerText = t.name ? t.name : "N/A";
    option.value = t.name ? t.name : "N/A";
    form.favoriteTeam.appendChild(option);
});