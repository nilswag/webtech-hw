import { fetchFirst } from "../database.js";

export async function getAdmin(userId) {
    return await fetchFirst(`
        SELECT userId FROM Admins
        WHERE userId = (?);    
    `, user);
}