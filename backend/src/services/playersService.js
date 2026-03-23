import * as queries from "../../database/queries/playersQueries.js";

export async function getPlayers() {
    return await queries.fetchPlayers();
}

export async function getPlayer(id) {
    const result = await queries.fetchPlayer(id);

    if (result.length === 0) {
        const err = new Error("Player could not be found.");
        err.status = 400;
        throw err;
    }

    return result;
}

export async function addPlayer(firstName, lastName, age) {
    return await queries.addPlayer(firstName, lastName, age);
}