import { PlayerCard } from "./cards.js";
import { getData } from "./util/api.js";

async function showPlayers() {
    let players = (await getData(`/players`)).result;

    PlayerCard.createPlayerCards(players);
}

showPlayers();