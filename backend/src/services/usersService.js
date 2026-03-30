import * as queries from "../../database/queries/usersQueries.js";

/**
 * Service function to add user.
 * @param {*} firstName First name of user.
 * @param {*} lastName Last name of user.
 * @param {*} email Email of user.
 * @param {*} password Password of user.
 * @returns 
 */
export async function addUser(firstName, lastName, email, password) {
    return await queries.addUser(firstName, lastName, email, password);
}

/**
 * Service function to get user.
 * @param {*} id Id of user.
 * @returns User if found otherwise throws error.
 */
export async function getUser(id) {
    const result = await queries.getUser(id);
    if (result.length == 0) {
        const err = new Error("Unable to find user.");
        err.status = 404;
        throw err;
    }
    return result;
}