import { PlayerCard, TeamCard } from "./cards.js";
import { getData, deleteData } from "./util/api.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const teamInfo = document.getElementById("team__info");
const deleteBtn = document.getElementById("remove__team");

deleteBtn.addEventListener("click", async () => {
    const confirmation = window.confirm(`Are you sure you want to delete team with ID ${id}?`);

    if(confirmation) {
        try {
            await deleteData(`/teams/delete/${id}`);
            console.log(document.referrer)
            document.referrer ? window.location.href = document.referrer : window.location.href = "/group20/teams";
        } catch (error) {
            throw error;
        }
    }
})

teamInfo.addEventListener("submit", async (event) => {
    event.preventDefault();
    const confirmation = window.confirm(`Are you sure you want to edit team with ID ${id}?`);

    if(confirmation) {
        try {
            const data = Object.fromEntries((new FormData(event.target)).entries());
            console.log(data)
            await fetch(`/group20/api/teams/add/${id}`, {method: "POST", headers: {"content-type": "application/json"}, body: JSON.stringify(data)});  
        } catch (error) {
            throw error;
        }
    }
})

function loadExtendedInfo(team) {
    const extendedInfo = document.createElement("article");
    const extendedInfoTitle = document.createElement('h2');
    extendedInfo.classList.add("team__extended-info");
    extendedInfoTitle.innerText = "Additional Information";
    extendedInfo.appendChild(extendedInfoTitle);

    Object.keys(team).forEach(key => {
        let value = team[key];
        const container = document.createElement("div");
        let pKey;
        const pSeperator = document.createElement("p");
        let pValue;

        if(key === "id" || key === "wins" || key === "losses" || key === "totalPoints") {
            pKey = document.createElement("p");
            pValue = document.createElement("p");
            pValue.innerText = value;
        } else {
            pKey = document.createElement("label");
            pKey.setAttribute("for", key);
            pValue = document.createElement("input");
            pValue.setAttribute("name", key);
            pValue.setAttribute("type", "text");

            pValue.value = value;
        }

        pValue.id = key;
        pValue.required = true;
        pKey.classList.add("team__extended-info__key");
        pValue.classList.add("team__extended-info__value");

        pKey.innerText = key;
        pSeperator.innerText = ":";

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

    // Team statistics Lorenzo mee bezig volgens mij
    
    teamInfo.appendChild(teamCard);
}

async function loadPage() {
    let team;
    let teamObj;
    let players = await getData(`/players/team/${id}`);

    if(id === 0) {
        team = {id: 0, name: "", image: ""};
        teamObj = new TeamCard(0, "public/media/images/portraits/empty-image.jpg", true, "??", "??");
    } else {
        team = await getData(`/teams/${id}`);
        team = team[0];
        teamObj = new TeamCard(id, team.image, false, team.name);
    }

    // console.log(players)
    
    document.title = team.name;
    document.getElementsByTagName("h1")[0].innerText = team.name;
    
    loadTeam(team)

    let extendedInfo = loadExtendedInfo(team);
    teamInfo.appendChild(extendedInfo);

    const submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Save player");
    submitBtn.classList.add("button__edit");
    teamInfo.appendChild(submitBtn);

    PlayerCard.createPlayerCards(players);   
}


loadPage()