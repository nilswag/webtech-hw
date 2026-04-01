import { execQuery, fetchFirst, runQuery } from "../database.js";
import { User } from "../../../shared/models/User.js";

/**
 * Function to add user to database.
 * @param {*} user User.
 */
export async function addUser(user) {
    return await runQuery(
        "INSERT INTO Users(firstName, lastName, email, password) VALUES(?, ?, ?, ?);",
        user.firstName, user.lastName, user.email, user.password
    );
}

/**
 * Function to get specific user.
 * @param {*} email Email of user.
 */
export async function getUser(email) {
    const result = await fetchFirst(`SELECT * FROM Users WHERE email = ?;`, email);
    return result ? User.from(result) : null;
}