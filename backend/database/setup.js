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

// export async function test(){
//     await execQuery('DROP TABLE Teams;');
// }

/**
 * Function to setup teams database table.
 */
export async function teams() {
    // await execQuery('DROP TABLE Teams;');
    await execQuery(`
        CREATE TABLE IF NOT EXISTS Teams(
            id INTEGER PRIMARY KEY,
            name TEXT, 
            image TEXT,
            wins INTEGER,
            losses INTEGER,
            totalPoints INTEGER
        );`
    );
}

/**
 * Function to setup players database table.
 */
export async function players() {
    // execQuery("DROP TABLE Players")
    await execQuery(`
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
    await execQuery(`
        CREATE TABLE IF NOT EXISTS Users(
            id INTEGER PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            password TEXT NOT NULL
        );
    `);
}

/**
 * Function to setup users games table.
 */
export async function games() {
    //date is UNIX-TIME
    // await execQuery('DROP TABLE Games;');
    await execQuery(`
        CREATE TABLE IF NOT EXISTS Games(
            date BIGINT PRIMARY KEY NOT NULL,
            venue TEXT,
            defender TEXT,
            scoreDefender INTEGER,
            challenger TEXT,
            scoreChallenger INTEGER
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
            userId INTEGER NOT NULL,
            token TEXT UNIQUE NOT NULL,
            expires TEXT NOT NULL,
            FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
        );
    `);
}