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

export async function getUser(id) {
    return await fetchFirst("SELECT * FROM Users WHERE id = (?);", id);
}

/**
 * Function to get specific user.
 * @param {*} email Email of user.
 */
export async function getUserByEmail(email) {
    const result = await fetchFirst(`SELECT * FROM Users WHERE email = ?;`, email);
    return result ? User.from(result) : null;
}

export async function updateUserFirstName(firstName, id) {
    return await runQuery("UPDATE Users SET firstName = (?) WHERE id = (?)", firstName, id);
}

export async function updateUserLastName(lastName, id) {
    return await runQuery("UPDATE Users SET lastName = (?) WHERE id = (?)", lastName, id);
}

export async function updateUserEmail(email, id) {
    return await runQuery("UPDATE Users SET email = (?) WHERE id = (?)", email, id);
}

export async function updateUserPassword(password, id) {
    return await runQuery("UPDATE Users SET password = (?) WHERE id = (?)", password, id);
}

export async function updateUserFavoriteTeam(favoriteTeam, id) {
    return await runQuery("UPDATE Users SET favoriteTeam = (?) WHERE id = (?)", favoriteTeam, id);
}