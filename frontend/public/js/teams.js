import { TeamCard } from "./cards.js";

async function showTeams() {
    let teams;

    teams = await fetch ("/api/teams");
    teams = await teams.json();
    
    TeamCard.createTeamCards(teams);
}

showTeams();