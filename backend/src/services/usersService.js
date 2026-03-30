import * as queries from "../../database/queries/usersQueries.js";
import bcrypt from "bcrypt";

/**
 * Service function to add user.
 * @param {*} firstName First name of user.
 * @param {*} lastName Last name of user.
 * @param {*} email Email of user.
 * @param {*} password Password of user.
 * @returns 
 */
export async function addUser(firstName, lastName, email, password) {
    try {
        const hashed = await bcrypt.hash(password, 10); // use is hash to compare
        const result = await queries.addUser(firstName, lastName, email, hashed); 
    } catch (err) {
        if (err.code === "SQLITE_CONSTRAINT" && err.message?.includes("Users.email")) {
            const newErr = new Error("User already registered with that email.", { status: 401 });
            newErr.status = 401;
            throw newErr;
        }
        throw err;
    }
}

/**
 * Service function to get user.
 * @param {*} email Email of user.
 * @returns User if found otherwise throws error.
 */
export async function getUser(email) {
    const result = await queries.getUser(email);
    if (result.length == 0) {
        const err = new Error("Unable to find user.");
        err.status = 404;
        throw err;
    }
    return result;
}