import { PlayerCard } from "./cards.js";
import { getData } from "./util/api.js";

const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get("id"));

function loadExtendedInfo(player, team) {
    const extendedInfo = document.createElement("article");
    const extendedInfoTitle = document.createElement("h2");
    extendedInfo.classList.add("player__extended-info");
    extendedInfoTitle.innerText = "Additional Information";
    extendedInfo.appendChild(extendedInfoTitle);
    
    Object.keys(player).forEach(key => {
        if(key === "id") {
            return;
        };

        let value = player[key];
        const container = document.createElement("div");
        
        const pKey = document.createElement("label");
        pKey.setAttribute("for", key);
        const pSeperator = document.createElement("p");
        const pValue = document.createElement("input");
        pValue.setAttribute("name", key);
        pValue.id = key;
        pValue.setAttribute("type", "text");
        pValue.required = true;
        pKey.classList.add("player__extended-info__key");
        pSeperator.classList.add("player__extended-info__separator");
        pValue.classList.add("player__extended-info__value");
        
        
        pKey.innerText = key;
        pSeperator.innerText = ":";
        pValue.value = value;  

        
        container.appendChild(pKey);
        container.appendChild(pSeperator);
        container.appendChild(pValue);
        
        extendedInfo.appendChild(container);

        if(key === "teamId") {
            const container = document.createElement("div");
            const pKey = document.createElement("p");
            const pSeperator = document.createElement('p');
            const pValue = document.createElement("p");

            pKey.classList.add("player__extended-info__key");
            pSeperator.classList.add("player__extended-info__separator");
            pValue.classList.add("player__extended-info__value");
            
            pKey.innerText = "Team";
            pSeperator.innerText = ":";
            pValue.innerText = team.name;

            container.appendChild(pKey);
            container.appendChild(pSeperator);
            container.appendChild(pValue);

            extendedInfo.appendChild(container);
        }
    })

    // console.log(extendedInfo)
    return extendedInfo;
}

async function loadPage() {
    const playerInfo = document.getElementById("player__info");
    const teamLink = document.getElementById("team__link");
    let player;
    let playerObj;
    let team;
    if(id === 0) {
        player = {id: 0, firstName: "??", lastName: "??", age: "??", role: "??", number: "??", photo: "media/images/portraits/empty-image.jpg", teamId: 0};
        playerObj = new PlayerCard(0, "media/images/portraits/empty-image.jpg", true, "??", "??");

        team = {id: 0, name: "??", image: "media/images/portraits/empty-image.jpg"};
    } else {
        player = await getData(`/players/${id}`);
        player = player[0];
        playerObj = new PlayerCard(id, player.photo, false, player.firstName, player.lastName);

        team = await getData(`/teams/${player.teamId}`);
        team = team[0];
    }
    
    document.title = `${player.firstName} ${player.lastName}`;
    document.getElementsByTagName("h1")[0].innerText = `${player.firstName} ${player.lastName}`;

    
    let playerCard = playerObj.createPlayerCard();
    playerInfo.appendChild(playerCard); 

    let extendedInfo = loadExtendedInfo(player, team);

    // console.log(extendedInfo)
    playerInfo.appendChild(extendedInfo);

    const submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Save");
    playerInfo.appendChild(submitBtn);
    
    teamLink.innerText = `Go to ${team.name}'s page`;
    teamLink.href = `../teams/team?id=${player.teamId}`;
}

player__info.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = new FormData(event.target);
    data = Object.fromEntries(data.entries());
})

loadPage()