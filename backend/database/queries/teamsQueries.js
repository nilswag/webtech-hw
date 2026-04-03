import { fetchAll, runQuery } from "../database.js";

export async function getTeams() {
    return await fetchAll("SELECT * FROM Teams");
}

export async function getTeam(id) {
    return await fetchAll("SELECT * FROM Teams WHERE id = ?", id);
}

export async function addTeam(name, image) {
    return await runQuery("INSERT INTO Teams(name, image) VALUES(?, ?)", name, image);
}