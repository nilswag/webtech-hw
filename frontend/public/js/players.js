import { PlayerCard } from "./cards.js";

async function showPlayers() {
    let players = await fetch(`/api/players`);
    players = await players.json();

    PlayerCard.createPlayerCards(players);
}

showPlayers();