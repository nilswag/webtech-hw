import { fetchAll } from "../database.js";

export async function fetchPlayers() {
    return await fetchAll("SELECT * FROM Players;");
}

export async function fetchPlayer(id) {
    return await fetchAll("SELECT * FROM Players WHERE id == ?;", id);
}