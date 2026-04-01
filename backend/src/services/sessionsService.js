import crypto from "crypto";
import bcrypt from "bcrypt";
import * as queries from "../../database/queries/sessionsQueries.js";
import { Session } from "../models/Session.js";

/**
 * Service function that creates a session.
 * @param {*} user User that session is created for.
 * @returns session
 */
export async function addSession(user) {
    let session = await queries.getSessionByUser(user);
    if (session && session.expire <= new Date()) {
        // session has expired and a new one is required.
        removeSession(user);
    }

    const token = crypto.randomBytes(64).toString("hex");
    const date = new Date();
    date.setDate(date.getDate() + 7); // expiration of cookie 7 days later

    try {
        session = new Session(null, user.id, token, date);
        await queries.addSession(session);

        return session;
    } catch (err) {
        if (err.code === "SQLITE_CONSTRAINT" && err.message?.includes("Sessions.userId")) {
            const newErr = new Error("User already logged in.", { status: 403 });
            newErr.status = 403;
            throw newErr;
        }
        throw err;
    }
}

/**
 * Removes session.
 * @param {*} user User of session. 
 */
export async function removeSession(user) {
    await queries.removeSession(user.id);
}