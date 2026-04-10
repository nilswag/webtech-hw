import { postData } from "./util/api.js";
import { handleResponse } from "./util/response-handler.js";

const form = document.querySelector(".register");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (form.password.value !== form.passwordRepeat.value) {
        return alert("Passwords are not equal.");
    }

    const response = await postData("/users/register", {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        password: form.password.value
    });
    
    handleResponse(response);
});