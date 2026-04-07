import { TeamCard } from "./cards.js";

async function showTeams() {
    const teamsList = document.getElementById("teams__list");

    let emptyTeam = new TeamCard(0, "media/images/portraits/empty-image.jpg", true, "??");
    let emptyTeamCard = emptyTeam.createTeamCard();

    teamsList.appendChild(emptyTeamCard);
}

showTeams();