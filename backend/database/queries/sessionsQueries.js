import bcrypt from "bcrypt";
import { execQuery, fetchAll, fetchFirst, runQuery } from "../database.js";
import { Session } from "../../src/models/Session.js";
import { User } from "../../../shared/models/User.js";

/**
 * Query to add a session.
 * @param {*} session Session object.
 */
export async function addSession(session) {
    return await runQuery(`
        INSERT INTO Sessions(userId, token, expires) VALUES (?, ?, ?);
    `, session.userId, await bcrypt.hash(session.token, 10), session.expires.toString());
}

/**
 * Query to fetch a session using user.
 * @param {*} user The user.
 * @returns The session object.
 */
export async function getSessionByUser(user) {
    const result = await fetchFirst("SELECT * FROM Sessions WHERE userId = ?;", user.id);
    if (result) {
        const dateString = result.expires;
        result.expires = new Date(dateString);
    }
    return result ? Session.from(result) : null;
}

/**
 * Query to remove session of user.
 * @param {*} userId User id.
 */
export async function removeSessionByUser(userId) {
    return await execQuery("DELETE FROM Sessions WHERE userId = ?;", userId);
}

export async function getSessions() {
    const result = await fetchAll("SELECT * FROM Sessions;");
    return result.map(Session.from);
}