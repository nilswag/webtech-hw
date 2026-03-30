import { getData } from "./util/api.js";

let nextGame = null;

async function fetchNextGame() {
    nextGame = await getData("/statistics/nextGame");
}

async function updateCountdown() {
    if (!nextGame) return;

    const eventName = document.getElementById("event-countdown--name");
    const days = document.getElementById("event-countdown--units__days");
    const hours = document.getElementById("event-countdown--units__hours");
    const minutes = document.getElementById("event-countdown--units__minutes");
    const seconds = document.getElementById("event-countdown--units__seconds");

    // Gets the name and date of the next game
    const nextGameName = nextGame.name;
    const nextGameDate = new Date(nextGame.date);

    // Calculates difference and transforms to correct unit
    const currentTime = new Date();
    const timeDelta = nextGameDate - currentTime;

    const daysDelta = Math.floor(timeDelta/(24*60*60*1000));
    const hoursDelta = Math.floor(timeDelta/(60*60*1000)) % 24;
    const minutesDelta = Math.floor(timeDelta/(60*1000)) % 60;
    const secondsDelta = Math.floor(timeDelta/1000) % 60;

    // Change HTML text to correct values
    eventName.innerHTML = nextGameName;
    days.innerText = (daysDelta<10) ? `0${daysDelta}` : daysDelta;
    hours.innerText = (hoursDelta<10) ? `0${hoursDelta}` : hoursDelta;
    minutes.innerText = (minutesDelta<10) ? `0${minutesDelta}` : minutesDelta;
    seconds.innerText = (secondsDelta<10) ? `0${secondsDelta}` : secondsDelta;
}

setInterval(updateCountdown, 1000);
setInterval(fetchNextGame, 60000);

fetchNextGame();