import * as logging from "../util/logging.js";
import { validationResult } from "express-validator";

/**
 * Middleware to log requests.
 * @param {*} req Request object.
 * @param {*} res Result object.
 * @param {*} next Next middleware.
 */
export function log(req, res, next) {
    logging.log(`${req.method} request at ${req.url}`)
    next();
};

/**
 * Middleware to log errors.
 * @param {*} err The error to be logged.
 * @param {*} req Request object.
 * @param {*} res Result object.
 * @param {*} next Next middleware.
 */
export function error(err, req, res, next) {
    const message = err.message || "Internal server error";
    logging.error(message);
    res.status(err.status || 500).json({
        message: message
    });
};

/**
 * Middleware to handle express-validator errors.
 * @param {*} req Request object.
 * @param {*} res Result object.
 * @param {*} next Next middleware.
 */
export function validator(req, res, next) {
    const result = validationResult(req);
    if (result.isEmpty()) return next();
    res.status(400).json({ errors: result.array({ onlyFirstError: true }) });
}