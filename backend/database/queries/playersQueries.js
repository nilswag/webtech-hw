import { team } from "../../src/controllers/frontendController.js";
import { fetchAll, runQuery } from "../database.js";

/**
 * Function to query all players.
 * @returns A promise containing all players.
 */
export async function getPlayers() {
    return await fetchAll("SELECT * FROM Players;");
}

/**
 * Function to query specific player.
 * @param {*} id The id of the player.
 * @returns A promise containing the player if found.
 */
export async function getPlayer(id) {
    return await fetchAll("SELECT * FROM Players WHERE id = ?;", id);
}

/**
 * Function to query all players of a specific team.
 * @param {*} id The id of the team.
 * @returns A promise containing the players if found.
 */
export async function getPlayersOfTeam(id) {
    return await fetchAll("SELECT * FROM Players WHERE teamId = ?;", id);
}

/**
 * Query to database to add player.
 * @param {*} firstName First name of player.
 * @param {*} lastName Last name of player.
 * @param {*} age Age of player.
 * @param {*} role Role of player.
 * @param {*} number Number of player.
 * @param {*} photo Path to photo of player.
 * @returns An empty promise.
 */
export async function addPlayer(firstName, lastName, age, role, number, photo, teamId) {
    return await runQuery("INSERT INTO Players(firstName, lastName, age, role, number, photo, teamId) VALUES(?, ?, ?, ?, ?, ?, ?);", firstName, lastName, age, role, number, photo, teamId);
}

/**
 * Query to database to update player.
 * @param {*} id Id of the player.
 * @param {*} firstName First name of player.
 * @param {*} lastName Last name of player.
 * @param {*} age Age of player.
 * @param {*} role Role of player.
 * @param {*} number Number of player.
 * @param {*} photo Path to photo of player.
 * @returns An empty promise.
 */
export async function updatePlayer(id, firstName, lastName, age, role, number, photo, teamId) {
    return await runQuery("UPDATE Players SET firstName = ?, lastName = ?, age = ?, role = ?, number = ?, photo = ?, teamId = ? WHERE id = ?;", firstName, lastName, age, role, number, photo, teamId, id);
}

/**
 * Query to database to delete player.
 * @param {*} id The id of the player.
 * @returns A promise containing the player if found.
 */
export async function deletePlayer(id) {
    return await runQuery("DELETE FROM Players WHERE id = ?;", id);
}