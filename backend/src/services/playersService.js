import * as queries from "../../database/queries/playersQueries.js";

export async function getPlayers() {
    return await queries.fetchPlayers();
}

export async function getPlayer(id) {
    return await queries.fetchPlayer(id);
}

export async function addPlayer(firstName, lastName, age) {
    return await queries.addPlayer(firstName, lastName, age);
}