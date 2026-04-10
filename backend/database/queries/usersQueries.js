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
export async function getUserByEmail(email) {
    const result = await fetchFirst(`SELECT * FROM Users WHERE email = ?;`, email);
    return result ? User.from(result) : null;
}

export async function updateUserFirstName(firstName) {
    return await runQuery("UPDATE Users SET firstName = (?);", firstName);
}

export async function updateUserLastName(lastName) {
    return await runQuery("UPDATE Users SET lastName = (?);", lastName);
}

export async function updateUserEmail(email) {
    return await runQuery("UPDATE Users SET email = (?);", email);
}

export async function updateUserPassword(password) {
    return await runQuery("UPDATE Users SET password = (?);", password);
}

export async function updateUserFavoriteTeam(favoriteTeam) {
    return await runQuery("UPDATE Users SET favoriteTeam = (?);", favoriteTeam);
}