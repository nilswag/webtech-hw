import { postData } from "./util/api.js";
import { handleResponse } from "./util/response-handler.js";

const form = document.querySelector("main__login");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const response = postData("/users/login", { 
        email: form.email.value,
        password: form.password.value
    });

    handleResponse(respone);
});