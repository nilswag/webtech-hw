// all DDL queries go in here
import { runQuery } from "./database.js";

export async function test() {
    await runQuery(`
        CREATE TABLE IF NOT EXISTS Test(
            id INT,
            str TEXT,
            PRIMARY KEY (id)
        );
    `);
};