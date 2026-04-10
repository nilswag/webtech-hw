import * as service from "../services/authService.js";

export async function authAdmin(req, res, next) {
    const isAdmin = await service.isAdmin(req.cookies.auth);
    req.isAdmin = isAdmin;
    next();
}