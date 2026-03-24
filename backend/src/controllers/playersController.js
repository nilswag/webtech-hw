import * as service from "../services/playersService.js";

/**
 * Endpoint for getting all players.
 */
export async function getPlayers(req, res, next) {
    try {
        const result = await service.getPlayers();
        res.status(200).json(result);
    } catch (err) {
        return next(err);
    }
};

/**
 * Endpoint for getting a specific player.
 */
export async function getPlayer(req, res, next) {
    try {
        const result = await service.getPlayer(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        return next(err);
    }
}

/**
 * Endpoint for adding a player.
 */
export async function putPlayer(req, res, next) {
    try {
        const { firstName, lastName, age } = req.body;
        const result = await service.addPlayer(firstName, lastName, age);
        res.status(200);
    } catch (err) {
        return next(err);
    }
}