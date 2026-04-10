import * as service from "../services/teamsServices.js";

export async function getTeams(req, res, next) {
    try {
        const result = await service.getTeams();
        res.status(200).json(result);
    } catch (error) {
        return next(error);
    }
}

export async function getTeam(req, res, next) {
    try {
        const result = await service.getTeam(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        return next(error);
    }
}

export async function postTeam(req, res, next) {
    try {
        const {name} = req.body;
        const result = await service.addTeam(name);
        res.status(200).json({message: "Team added"});
    } catch(error) {
        return next(error);
    }
}

export async function deleteTeam(req, res, next) {
    try {
        
    } catch (err) {
        return next(err);
    }
}

export async function updateTeam(req, res, next) {
    try {

    } catch (err) {
        return next(err);
    }
}