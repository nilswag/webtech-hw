import * as service from "../services/statisticsService.js";

export async function getLeaderboard(req, res, next) {
    try {
        const result = await service.getLeaderboard();
        res.status(200).json(result);
    } catch(err) {
        return next(err);
    }
};

export async function getNextGame(req, res, next) {
    try {
        let game = await service.getNextGame();
        // console.log(game, game[0].venue, game[0].date);
        const result = {name: game.venue, date: game.date};
        res.status(200).json(result);
    } catch(err) {
        return next(err);
    }
}

export async function getUpcomingGames(req, res, next) {
    try {
        let games = await service.getUpcomingGames();
        // console.log(games, games[0].venue, games[0].date);
        res.status(200).json(games);
    } catch(err) {
        return next(err);
    }
}

export async function getPassedGames(req, res, next) {
    try {
        let games = await service.getPassedGames();
        // console.log(games, games[0].venue, games[0].date);
        res.status(200).json(games);
    } catch(err) {
        return next(err);
    }
}
