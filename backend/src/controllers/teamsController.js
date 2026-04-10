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
        const {name, image} = req.body;
        if(req.params.id>0) {
            const result = await service.updateTeam(req.params.id, name, image);
            res.status(200).json({ message: "Team updated" });
        } else if(req.params.id==0) {
            const result = await service.addTeam(name, image);
            res.status(200).json({ message: "Team added" });
        }
    } catch(error) {
        return next(error);
    }
}

export async function deleteTeam(req, res, next) {
    try {
        service.deleteTeam(req.params.id);
        res.status(200).json({ message: "Team deleted" });
    } catch (err) {
        return next(err);
    }
}