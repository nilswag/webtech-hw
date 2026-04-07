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
 * Endpoint for getting players of specific team.
 */
export async function getPlayersOfTeam(req, res, next) {
    try {
        const result = await service.getPlayersOfTeam(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        return next(error);
    }
}

/**
 * Endpoint for adding a player.
 */
export async function postPlayer(req, res, next) {
    try {
        const { firstName, lastName, age } = req.body;
        const result = await service.addPlayer(firstName, lastName, age);
        res.status(200).json({ message: "Player added" });
    } catch (err) {
        return next(err);
    }
}