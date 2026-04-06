import * as service from "../services/usersService.js";

/**
 * Endpoint to register user.
 */
export async function register(req, res, next) {
    try {
        const { firstName, lastName, email, password } = req.body;
        const result = await service.addUser(firstName, lastName, email, password);
        res.status(200).json({ message: "User added" });
    } catch(err) {
        return next(err);
    }
}

/**
 * Endpoint to log user in.
 */
export async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        const { user, session } = await service.login(email, password);

        res.status(200)
            .cookie("auth", session.token, { 
                expire: session.expires,
                httpOnly: true
             })
            .cookie("loggedIn", true, {
                expire: session.expires
            })
            .json({ message: "Sucessfully logged in." });
    } catch (err) {
        return next(err);
    }
}