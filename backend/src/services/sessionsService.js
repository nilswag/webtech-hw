import crypto from "crypto";
import * as queries from "../../database/queries/usersQueries.js";

export async function addSession(userId) {
    const token = crypto.randomBytes(64).toString("hex");
}