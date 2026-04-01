import crypto from "crypto";
import bcrypt from "bcrypt";
import * as queries from "../../database/queries/sessionsQueries.js";

export async function addSession(user) {
    const token = crypto.randomBytes(64).toString("hex");
    try {
        const hashedToken = await bcrypt.hash(token, 10);
        const result = queries.addSession
    } catch (err) {

    }
}