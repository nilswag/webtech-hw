import { getData } from "./util/api.js";

const form = document.querySelector("main__login");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const { email, password } = form;

    const response = getData("/users/login");
});