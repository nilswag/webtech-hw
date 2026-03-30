import { execQuery, fetchFirst, runQuery } from "../database.js";

/**
 * Function to add user to database.
 * @param {*} firstName First name of user.
 * @param {*} lastName Last name of user.
 * @param {*} email Email of user.
 * @param {*} password Password of user.
 * @returns 
 */
export async function addUser(firstName, lastName, email, password) {
    return await runQuery(
        "INSERT INTO Users(firstName, lastName, email, password) VALUES(?, ?, ?, ?);",
        firstName, lastName, email, password
    );
}

/**
 * Function to get specific user.
 * @param {*} email Email of user.
 */
export async function getUser(email) {
    return await fetchFirst(`SELECT * FROM Users WHERE email = ?;`, email);
}