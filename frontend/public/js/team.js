import { PlayerCard, TeamCard } from "./cards.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


async function loadTeam(team) {
    const teamInfo = document.getElementById("team__info");

    let teamObj = new TeamCard(id, team.image, false, team.name);
    let teamCard = teamObj.createTeamCard();

    // Team statistics Lorenzo mee bezig volgens mij

    teamInfo.appendChild(teamCard);
}

async function loadPage() {
    let team = await fetch(`/api/teams/${id}`);
    let players = await fetch(`/api/players/team/${id}`);
    team = await team.json();
    team = team[0];
    players = await players.json();
    // console.log(players)
    
    document.title = team.name;
    document.getElementsByTagName("h1")[0].innerText = team.name;

    loadTeam(team)
    PlayerCard.createPlayerCards(players);   
}


loadPage()