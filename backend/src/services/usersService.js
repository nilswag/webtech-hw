import * as queries from "../../database/queries/usersQueries.js";
import bcrypt from "bcrypt";
import { User } from "../../../shared/models/User.js";
import { addSession, removeSession, getSessions } from "./sessionsService.js";

/**
 * Service helper function to get user.
 * @param {*} email Email of user.
 * @returns User if found otherwise throws error.
 */
async function getUser(email) {
    const result = await queries.getUserByEmail(email);
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
        const result = await queries.addUser(new User(null, firstName, lastName, email, hashed)); 
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
 * @returns object containing user and session.
 */
export async function login(email, password) {
    const user = await getUser(email);

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        const err = new Error("Invalid password.");
        err.status = 401;
        throw err;
    }

    const session = await addSession(user);

    return { user, session };
}

export async function logout(token) {
    const sessions = await getSessions();
    const session = sessions.find(s => bcrypt.compare(token, s.token));
    await removeSession(await queries.getUser(session.userId));
}

export async function updateInformation(token, firstName, lastName, email, password, favoriteTeam) {
    const sessions = await getSessions();
    const session = sessions.find(s => bcrypt.compare(token, s.token));
    const id = session.userId;

    if (firstName) await queries.updateUserFirstName(firstName, id);
    if (lastName) await queries.updateUserLastName(lastName, id);
    if (email) await queries.updateUserEmail(email, id);
    if (password) await queries.updateUserPassword(await bcrypt.hash(password, 10), id);
    if (favoriteTeam) await queries.updateUserFavoriteTeam(favoriteTeam, id);
}