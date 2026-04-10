import * as queries from "../../database/queries/playersQueries.js";

/**
 * Service call to database to fetch all players.
 * @returns The result of the fetchPlayers query.
 */
export async function getPlayers() {
    return await queries.getPlayers();
}

/**
 * Service call to database to fetch a specific player.
 * @param {*} id The player to be fetched.
 * @returns A promise containing the resulting player or an error.
 */
export async function getPlayer(id) {
    const result = await queries.getPlayer(id);

    if (result.length === 0) {
        const err = new Error("Player could not be found.");
        err.status = 400;
        throw err;
    }

    return result;
}

/**
 * Service call to database to fetch all players of a specific team.
 * @param {*} id The team to be fetched.
 * @returns A promise containing the resulting player or an error.
 */
export async function getPlayersOfTeam(id) {
    return await queries.getPlayersOfTeam(id);
}

/**
 * Service call to database to add a player.
 * @param {*} firstName First name of player.
 * @param {*} lastName Last name of player.
 * @param {*} age Age of player.
 * @param {*} role Role of player.
 * @param {*} number Number of player.
 * @param {*} photo Path of photo of player.
 * @returns An empty promise.
 */
export async function addPlayer(firstName, lastName, age, role, number, photo, teamId) {
    return await queries.addPlayer(firstName, lastName, age, role, number, photo, teamId);
}

/**
 * Service call to database to update a player.
 * @param {*} id Id of player.
 * @param {*} firstName First name of player.
 * @param {*} lastName Last name of player.
 * @param {*} age Age of player.
 * @param {*} role Role of player.
 * @param {*} number Number of player.
 * @param {*} photo Path of photo of player.
 * @param {*} teamId Id of team of player.
 * @returns An empty promise.
 */
export async function updatePlayer(id, firstName, lastName, age, role, number, photo, teamId) {
    return await queries.updatePlayer(id, firstName, lastName, age, role, number, photo, teamId);
}

/**
 * Service call to database to delete a specific player.
 * @param {*} id The player to be deleted.
 * @returns A promise containing the resulting player or an error.
 */
export async function deletePlayer(id) {
    return await queries.deletePlayer(id);
}
