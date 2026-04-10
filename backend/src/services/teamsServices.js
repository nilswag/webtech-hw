import * as queries from "../../database/queries/teamsQueries.js";
import { addPlayer } from "./playersService.js";

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

export async function addTeam(name, image, wins, losses, totalPoints) {
    // console.log("Add team ", name);
    return await queries.addTeam(name, image, wins, losses, totalPoints);
}

export async function updateTeam(id, name, image) {
    if (name) await queries.updateTeamName(id, name);
    if (image) await queries.updateTeamImage(id, image);
}

export async function deleteTeam(id) {
    return await queries.deleteTeam(id);
}

// for (let index = 0; index < 10; index++) {
//     await addTeam("Team" + index, "/group20/public/media/images/portraits/maia_bennett.png", 3*index, index, 1234*index);
    
// }

// for (let index = 0; index < 20; index++) {
//     await addPlayer("Karel", index + "e", index + 20, "Captain", index, "/group20/public/media/images/portraits/anya_petrova.png", Math.ceil(index/3)+1)
// }