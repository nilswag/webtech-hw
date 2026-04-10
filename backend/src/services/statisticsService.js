import * as gameQueries from "../../database/queries/gamesQueries.js";
import * as teamQueries from "../../database/queries/teamsQueries.js";


export async function getLeaderboard(orderBy = "id", sortDir = "ASC"){
    let teams = await teamQueries.getTeams(orderBy, sortDir);
    return teams;
}

export async function getNextGame(){
    let games = await gameQueries.getFutureGames();
    return games[0];
}

export async function getUpcomingGames(){
    return await gameQueries.getFutureGames();
}

export async function getPassedGames(){
    return await gameQueries.getPassedGames();
}



gameQueries.addGame(Date.now() / 1000 + 60, "Rome", "as", 0, "ole", 0);
gameQueries.addGame(Date.now() / 1000 + 3600, "Rome", "as", 0, "ole", 0);
