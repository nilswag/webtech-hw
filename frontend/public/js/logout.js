import { getData } from "./util/api.js";
import { handleResponse } from "./util/response-handler.js";

const link = document.querySelector("#header__navigation__logout");

link.addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await getData("/users/logout");

    handleResponse(response);
});