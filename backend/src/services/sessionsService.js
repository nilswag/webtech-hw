import crypto from "crypto";
import bcrypt from "bcrypt";
import * as queries from "../../database/queries/sessionsQueries.js";
import { Session } from "../models/Session.js";

/**
 * Service function that creates a session.
 * @param {*} user User that session is created for.
 * @returns object containing session and unhashed token.
 */
export async function addSession(user) {
    const token = crypto.randomBytes(64).toString("hex");
    const date = new Date();
    date.setDate(date.getDate() + 7); // expiration of cookie 7 days later

    try {
        const hashedToken = await bcrypt.hash(token, 10);

        const session = new Session(null, user.id, hashedToken, date);
        await queries.addSession(session);

        return { session: session, token: token };
    } catch (err) {
        if (err.code === "SQLITE_CONSTRAINT" && err.message?.includes("Sessions.userId")) {
            const newErr = new Error("User already logged in.", { status: 403 });
            newErr.status = 403;
            throw newErr;
        }
        throw err;
    }
}