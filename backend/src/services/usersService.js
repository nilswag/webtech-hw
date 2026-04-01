import * as queries from "../../database/queries/usersQueries.js";
import bcrypt from "bcrypt";
import { User } from "../../../shared/models/User.js";

/**
 * Service helper function to get user.
 * @param {*} email Email of user.
 * @returns User if found otherwise throws error.
 */
async function getUser(email) {
    const result = await queries.getUser(email);
    if (!result) {
        const err = new Error("No user with that email.");
        err.status = 404;
        throw err;
    }
    return result;
}

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
        const result = await queries.addUser(new User(firstName, lastName, email, hashed)); 
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
 * Service function to log in user.
 * @param {*} email Email address of user.
 * @param {*} password Password of user.
 */
export async function login(email, password) {
    const user = await getUser(email);

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        const err = new Error("Invalid password.");
        err.status = 401;
        throw err;
    }

    // TODO: add httpsecure cookie with session
    // TODO: generate session

    return user;
}