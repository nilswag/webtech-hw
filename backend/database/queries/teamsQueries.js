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

export async function addTeam(name, image, wins, losses, totalPoints) {
    return await runQuery("INSERT INTO Teams(name, image, wins, losses, totalPoints) VALUES(?, ?, ?, ?, ?)", name, image, wins, losses, totalPoints);
}