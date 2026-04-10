import { getData } from "./util/api.js";

const dropdown = document.querySelector("select.update__favorite-team");
const teams = await getData("/teams");

teams.forEach(t => {
    const option = document.createElement("option");
    option.innerText = t.name ? t.name : "N/A";
    option.value = t.name ? t.name : "N/A";
    dropdown.appendChild(option);
});