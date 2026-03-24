import { fetchAll, runQuery } from "../database.js";

/**
 * Function to query all players.
 * @returns A promise containing all players.
 */
export async function fetchPlayers() {
    return await fetchAll("SELECT * FROM Players;");
}

/**
 * Function to query specific player.
 * @param {*} id The id of the player.
 * @returns A promise containing the player if found.
 */
export async function fetchPlayer(id) {
    return await fetchAll("SELECT * FROM Players WHERE id == ?;", id);
}

/**
 * Function to add a player to database.
 * @param {*} firstName First name of the player.
 * @param {*} lastName Last name of the player.
 * @param {*} age Age of the player.
 * @returns An empty promise.
 */
export async function addPlayer(firstName, lastName, age) {
    return await runQuery("INSERT INTO Players(firstName, lastName, age) VALUES(?, ?, ?);", firstName, lastName, age);
}