// all DDL queries go in here
import { execQuery, runQuery } from "./database.js";

// export async function test() {
//     await runQuery(`
//         CREATE TABLE IF NOT EXISTS Test(
//             id INTEGER PRIMARY KEY,
//             str TEXT
//         );
//     `);
// };

/**
 * Function to setup teams database table.
 */
export async function teams() {
    await runQuery(`
        CREATE TABLE IF NOT EXISTS Teams(
            id INTEGER PRIMARY KEY,
            name TEXT, 
            image TEXT
        );`
    )
}

/**
 * Function to setup players database table.
 */
export async function players() {
    // runQuery("DROP TABLE Players")
    await runQuery(`
        CREATE TABLE IF NOT EXISTS Players(
            id INTEGER PRIMARY KEY,
            firstName TEXT,
            lastName TEXT,
            age INTEGER,
            role TEXT,
            number INTEGER,
            photo TEXT, 
            teamId INTEGER
        );
    `);
}

/**
 * Function to setup users database table.
 */
export async function users() {
    await runQuery(`
        CREATE TABLE IF NOT EXISTS Users(
            id INTEGER PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            password TEXT NOT NULL,
            favoriteTeam TEXT
        );
    `);
}

/**
 * Function to setup sessions database table.
 */
export async function sessions() {
    await runQuery(`
        CREATE TABLE IF NOT EXISTS Sessions(
            id INTEGER PRIMARY KEY,
            userId INTEGER NOT NULL,
            token TEXT UNIQUE NOT NULL,
            expires TEXT NOT NULL,
            FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
        );
    `);
}

export async function admins() {
    await runQuery(`
        CREATE TABLE IF NOT EXISTS Admins(
            userId INTEGER UNIQUE NOT NULL,
            FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
        );
    `);
}