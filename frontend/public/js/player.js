import { PlayerCard } from "./cards.js";
import { getData } from "./util/api.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

function loadExtendedInfo(player, team) {
    const extendedInfo = document.createElement("article");
    const extendedInfoTitle = document.createElement("h2");
    extendedInfo.classList.add("player__extended-info");
    extendedInfoTitle.innerText = "Additional Information";
    extendedInfo.appendChild(extendedInfoTitle);
    
    Object.keys(player).forEach(key => {
        let value = player[key];
        const container = document.createElement("div");
        
        const pKey = document.createElement("p");
        const pSeperator = document.createElement("p");
        const pValue = document.createElement("p");
        pKey.classList.add("player__extended-info__key");
        pSeperator.classList.add("player__extended-info__separator");
        pValue.classList.add("player__extended-info__value");
        
        if(key === "teamId") {
            
            pKey.innerText = "Team";
            pSeperator.innerText = ":";
            pValue.innerText = team.name;
            
        }
        else if(key !== "photo" && key !== "id") {
            pKey.innerText = key;
            pSeperator.innerText = ":";
            pValue.innerText = value;            
        }

        container.appendChild(pKey);
        container.appendChild(pSeperator);
        container.appendChild(pValue);

        extendedInfo.appendChild(container);
    })

    console.log(extendedInfo)
    return extendedInfo;
}

async function loadPage() {
    const playerInfo = document.getElementById("player__info");
    const teamLink = document.getElementById("team__link");
    let player = await getData(`/players/${id}`);
    player = await player.json();
    player = player[0];
    let team = await getData(`/teams/${player.teamId}`);
    team = await team.json();
    team = team[0];
    console.log(player)
    // console.log(players)
    
    document.title = `${player.firstName} ${player.lastName}`;
    document.getElementsByTagName("h1")[0].innerText = `${player.firstName} ${player.lastName}`;

    let playerObj = new PlayerCard(id, player.photo, false, player.firstName, player.lastName);
    
    let playerCard = playerObj.createPlayerCard();
    playerInfo.appendChild(playerCard); 

    let extendedInfo = loadExtendedInfo(player, team);

    console.log(extendedInfo)
    playerInfo.appendChild(extendedInfo);

    teamLink.innerText = `Go to ${team.name}'s page`;
    teamLink.href = `../teams/team?id=${player.teamId}`;
}


loadPage()