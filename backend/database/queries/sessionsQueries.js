import { fetchFirst, runQuery } from "../database.js";

/**
 * Query to add a session.
 * @param {*} userId User id belonging to session.
 * @param {*} token Session token for user.
 * @param {*} expires Expiration date of token.
 */
export async function addSession(userId, token, expires) {
    return await runQuery(`
        INSERT INTO Sessions(userId, token, expires) VALUES (?, ?, ?);
    `, userId, token, expires);
}

/**
 * Query to fetch a session using userId.
 * @param {*} id The user id.
 * @returns The session object.
 */
export async function getSessionByUser(userId) {
    return await fetchFirst("SELECT * FROM Sessions WHERE userId = ?;", userId);
}