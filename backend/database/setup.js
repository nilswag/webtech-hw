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

export async function init() {
    await execQuery("PRAGMA foreign_keys = ON;");
}

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

/**
 * Function to setup sessions database table.
 */
export async function sessions() {
    await execQuery(`
        CREATE TABLE IF NOT EXISTS Sessions(
            id INTEGER PRIMARY KEY,
            email TEXT NOT NULL,
            token TEXT NOT NULL,
            expires TEXT NOT NULL,
            FOREIGN KEY (email) REFERENCES Users(email) ON DELETE CASCADE
        );
    `);
}