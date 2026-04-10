import { fetchAll, runQuery } from "../database.js";

const allowed = new Set(["id", "name", "wins", "losses", "totalPoints"]);

export async function getTeams(orderBy = "id", sortDir = "ASC") {
    const col = allowed.has(orderBy) ? orderBy : "id";
    const dir = sortDir === "DESC" ? "DESC" : "ASC";
    return await fetchAll(`SELECT * FROM Teams ORDER BY ${col} ${dir}`);
}

export async function getTeam(id) {
    return await fetchAll("SELECT * FROM Teams WHERE id = ?", id);
}

export async function addTeam(name, image) {
    return await runQuery("INSERT INTO Teams(name, image, wins, losses, totalPoints) VALUES(?, ?, 0, 0, 0)", name, image);
}

export async function deleteTeam(id) {
    return await runQuery("DELETE FROM Teams WHERE id = (?);", id);
}

export async function updateTeam(id, name, image) {
    return await runQuery("UPDATE Teams SET name = ?, image = ? WHERE id = ?;", name, image, id);
}