import { getData } from "./util/api.js";

const link = document.querySelector("#header__navigation__logout");

link.addEventListener("click", async (e) => {
    e.preventDefault();

    const response = getData("");
});