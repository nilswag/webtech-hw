import * as service from "../services/playersService.js";

export async function getPlayers(req, res) {
    try {
        const result = await service.getPlayers();
        res.status(200).json(result);
    } catch (err) {
        return next(err);
    }
};

export async function getPlayer(req, res) {
    try {
        const result = await service.getPlayer(req.params.id);
        if (result.length == 0)
            return res.status(404).json({ message: `Player not found.` });
        res.status(200).json(result);
    } catch (err) {
        return next(err);
    }
}