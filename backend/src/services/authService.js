import bcrypt from "bcrypt";
import { getSessions } from "./sessionsService";
import * as queries from "../../database/queries/adminsQueries.js";

export async function isAdmin(token) {
    const sessions = await getSessions();
    const session = sessions.find(s => bcrypt.compare(token, s.token));
    const result = queries.getAdmin(session.userId); 
    return result ? true : false;
}