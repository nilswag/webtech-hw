import * as queries from "../../database/queries/teamsQueries.js";

export async function getTeams() {
    return await queries.getTeams();
}

export async function getTeam(id) {
    let result = await queries.getTeam(id);

    if(result.length === 0) {
        const err  = new Error("Team could not be found.");
        err.status = 400;
        throw err;
    }

    return result;
}

export async function addTeam(name, image) {
    console.log("Add team ", name);
    return await queries.addTeam(name, image);
}

addTeam("1", "../media/images/portraits/anya_petrova.png");
addTeam("2", "../media/images/portraits/anya_petrova.png");
addTeam("3", "../media/images/portraits/anya_petrova.png");
addTeam("4", "../media/images/portraits/anya_petrova.png");