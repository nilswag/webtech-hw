import { fetchFirst } from "../database.js";

export async function getAdmin(user) {
    return await fetchFirst(`
        SELECT userId FROM Admins
        WHERE userId = (?);    
    `, user.id);
}