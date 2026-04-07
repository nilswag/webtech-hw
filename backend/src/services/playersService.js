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

addPlayer("Jan", "Jaap", 12, "Captain", 4, "../media/images/portraits/callum_mckenzie.png", 1)
addPlayer("Jan", "Jaap", 12, "Captain", 5, "../media/images/portraits/callum_mckenzie.png", 1)
addPlayer("Jan", "Jaap", 12, "Captain", 6, "../media/images/portraits/callum_mckenzie.png", 2)
addPlayer("Jan", "Jaap", 12, "Captain", 7, "../media/images/portraits/callum_mckenzie.png", 3)