import { log } from "./util/logging.js";
import { getData } from "./util/api.js";

const players = await getData("/players");
players.forEach(element => {
    console.log(element);
});