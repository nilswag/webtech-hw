import { log, error } from "../util/logging.js";

export function log(req, res, next) {
    log(`${req.method} request at ${req.url}`)
    next();
};

export function error(err, req, res, next) {
    const message = err.message || "Internal server error";
    error(message);
    res.status(err.status || 500).json({
        message: message
    });
};