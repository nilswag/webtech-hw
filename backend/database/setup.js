// all DDL queries go in here
import { execQuery, runQuery } from "./database.js";

// export async function test() {
//     await execQuery(`
//         CREATE TABLE IF NOT EXISTS Test(
//             id INTEGER PRIMARY KEY,
//             str TEXT
//         );
//     `);
// };

export async function players() {
    await execQuery(`
        CREATE TABLE IF NOT EXISTS Players(
            id INTEGER PRIMARY KEY,
            firstName TEXT,
            lastName TEXT,
            age INTEGER,
            role TEXT,
            number INTEGER,
            photo TEXT
        );
    `);
}

export async function users() {
    await execQuery(`
        CREATE TABLE IF NOT EXISTS Users(
            id INTEGER PRIMARY KEY,
            firstName TEXT,
            lastName TEXT,
            email TEXT
        );
    `);
}