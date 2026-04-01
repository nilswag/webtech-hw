import { runQuery } from "../database.js";

/**
 * Query to add a session.
 * @param {*} id User id belonging to session.
 * @param {*} token Session token for user.
 * @param {*} expires Expiration date of token.
 * @returns 
 */
export async function addSession(id, token, expires) {
    return await runQuery(`
        INSERT INTO Sessions(userId, token, expires) VALUES (?, ?, ?);
    `, id, token, expires);
}