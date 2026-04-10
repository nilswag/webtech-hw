import { PlayerCard, TeamCard } from "./cards.js";
import { getData } from "./util/api.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


function loadExtendedInfo(team) {
    const extendedInfo = document.createElement("article");
    const extendedInfoTitle = document.createElement("h2");
    extendedInfo.classList.add("team__extended-info");
    extendedInfoTitle.innerText = "Additional Information";
    extendedInfo.appendChild(extendedInfoTitle);

    Object.keys(team).forEach(key => {
        let value = team[key];
        const container = document.createElement("div");
        
        const pKey = document.createElement("p");
        const pSeperator = document.createElement("p");
        const pValue = document.createElement("p");
        pKey.classList.add("team__extended-info__key");
        pSeperator.classList.add("team__extended-info__separator");
        pValue.classList.add("team__extended-info__value");
        
        if(key !== "image" && key !== "id") {
            pKey.innerText = key;
            pSeperator.innerText = ":";
            pValue.innerText = value;            
        }
        else return;

        container.appendChild(pKey);
        container.appendChild(pSeperator);
        container.appendChild(pValue);

        extendedInfo.appendChild(container);
    })

    return extendedInfo;
}

async function loadTeam(team) {
    const teamInfo = document.getElementById("team__info");

    let teamObj = new TeamCard(id, team.image, false, team.name);
    let teamCard = teamObj.createTeamCard();

    teamInfo.appendChild(teamCard);
}

async function loadPage() {
    const teamInfo = document.getElementById("team__info");
    let team = await getData(`/teams/${id}`);
    let players = await getData(`/players/team/${id}`);
    team = team[0];
    
    document.title = team.name;
    document.getElementsByTagName("h1")[0].innerText = team.name;

    loadTeam(team)

    let extendedInfo = loadExtendedInfo(team);
    teamInfo.appendChild(extendedInfo);
    PlayerCard.createPlayerCards(players);   
}


loadPage()