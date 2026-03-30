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

/**
 * Function to setup players database table.
 */
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

/**
 * Function to setup users database table.
 */
export async function users() {
    // We will not hash passwords for the sake of simplicity
    await execQuery(`
        CREATE TABLE IF NOT EXISTS Users(
            email TEXT PRIMARY KEY,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            password TEXT NOT NULL
        );
    `);
}