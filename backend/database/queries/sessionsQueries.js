import bcrypt from "bcrypt";
import { execQuery, fetchFirst, runQuery } from "../database.js";

/**
 * Query to add a session.
 * @param {*} session Session object.
 */
export async function addSession(session) {
    return await runQuery(`
        INSERT INTO Sessions(userId, token, expires) VALUES (?, ?, ?);
    `, session.userId, await bcrypt.hash(session.token, 10), session.expires);
}

/**
 * Query to fetch a session using userId.
 * @param {*} id The user id.
 * @returns The session object.
 */
export async function getSessionByUser(userId) {
    return await fetchFirst("SELECT * FROM Sessions WHERE userId = ?;", userId);
}

/**
 * Query to remove session of user.
 * @param {*} userId User id.
 */
export async function removeSessionByUser(userId) {
    return await execQuery("DELETE FROM Sessions WHERE userId = ?;", userId);
}