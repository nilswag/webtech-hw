import { fetchAll, runQuery } from "../database.js";

/**
 * Function to query all games.
 * @returns A promise containing all games.
 */
export async function getGames() {
    return await fetchAll("SELECT * FROM Games;");
}

/**
 * Function to query specific game.
 * @param {*} id The id of the game.
 * @param {*} date The date the game is played at in UNIX-TIME.
 * @returns A promise containing the game if found.
 */
export async function getGame(date = null) {
        return await fetchAll("SELECT * FROM Games WHERE date = ?;", date);
}

export async function getPassedGames() {
    let date = Date.now() / 1000;
    return await fetchAll("SELECT * FROM Games WHERE date < ?;", date);
}

export async function getFutureGames() {
    let date = Date.now() / 1000;
    return await fetchAll("SELECT * FROM Games WHERE date > ?;", date);
}

/**
 * Query to database to add player.
 * @param {*} date The date the game is played at in UNIX-TIME (seconds).
 * @param {*} venue The place the game is played at.
 * @param {*} defender The defending team.
 * @param {*} scoreDefender Score of defending team
 * @param {*} challenger The challenging team.
 * @param {*} scoreChallenger Score of challenging team
 * @returns An empty promise.
 */
export async function addGame(date, venue, defender, scoreDefender, challenger, scoreChallenger) {
    return await runQuery("INSERT INTO Games(date, venue, defender, scoreDefender, challenger, scoreChallenger) VALUES(?, ?, ?, ?, ?, ?);", date, venue, defender, scoreDefender, challenger, scoreChallenger);
}