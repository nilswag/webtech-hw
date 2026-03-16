import { execQuery, queryAll, runQuery } from "../database.js";

export async function test() {
    return await queryAll("SELECT * FROM Test;");
}