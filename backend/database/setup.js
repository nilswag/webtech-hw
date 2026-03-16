// all DDL queries go in here
import { execQuery, runQuery } from "./database.js";

export async function test() {
    await execQuery(`
        CREATE TABLE IF NOT EXISTS Test(
            id INTEGER PRIMARY KEY,
            str TEXT
        );
    `);
};