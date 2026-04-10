import { TeamCard } from "./cards.js";
import { getData } from "./util/api.js";

async function showTeams() {
    let teams;

    teams = (await getData("/teams")).result;
    
    TeamCard.createTeamCards(teams);
}

showTeams();