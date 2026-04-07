import { PlayerCard } from "./cards.js";

async function showPlayers() {
    const playersList = document.getElementById("players__list");
    let emptyPlayer = new PlayerCard(0, "public/media/images/portraits/empty-image.jpg", true, "??", "??");

    let emptyPlayerCard = emptyPlayer.createPlayerCard();
    playersList.appendChild(emptyPlayerCard);
}

showPlayers();