import { fetchAll, runQuery } from "../database.js";

export async function fetchPlayers() {
    return await fetchAll("SELECT * FROM Players;");
}

export async function fetchPlayer(id) {
    return await fetchAll("SELECT * FROM Players WHERE id == ?;", id);
}

export async function addPlayer(firstName, lastName, age) {
    return await runQuery("INSERT INTO Players(firstName, lastName, age) VALUES(?, ?, ?);", firstName, lastName, age);
}