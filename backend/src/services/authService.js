import bcrypt from "bcrypt";
import { getSessions } from "./sessionsService";

export async function isAdmin(token) {
    const sessions = await getSessions();
    const session = sessions.find(s => bcrypt.compare(token, s.token));

    
}