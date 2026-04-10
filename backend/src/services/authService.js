import bcrypt from "bcrypt";
import { getSessions } from "./sessionsService.js";
import * as queries from "../../database/queries/adminsQueries.js";

export async function isAdmin(token) {
    if (!token) return false;

    const sessions = await getSessions();
    const session = sessions.find(s => bcrypt.compare(token, s.token));
    if (!session) return false;
    
    const result = await queries.getAdmin(session.userId); 
    return result ? true : false;
}