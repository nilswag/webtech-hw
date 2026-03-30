async function updateCountdown() {
    const eventName = document.getElementById("event-countdown--name");
    const days = document.getElementById("event-countdown--units__days");
    const hours = document.getElementById("event-countdown--units__hours");
    const minutes = document.getElementById("event-countdown--units__minutes");
    const seconds = document.getElementById("event-countdown--units__seconds");

    let nextGame;
    let nextGameName;
    let nextGameDate;
    let currentTime = new Date();

    let timeDelta;

    // Gets the name and date of the next game
    nextGame = await fetch("/api/statistics/nextGame");
    nextGame = await nextGame.json();
    nextGameName = nextGame.name;
    nextGameDate = new Date(nextGame.date);

    // Calculates difference and transforms to correct unit
    timeDelta = nextGameDate - currentTime;

    daysDelta = Math.floor(timeDelta/(24*60*60*1000));
    hoursDelta = Math.floor(timeDelta/(60*60*1000)) % 24;
    minutesDelta = Math.floor(timeDelta/(60*1000)) % 60;
    secondsDelta = Math.floor(timeDelta/1000) % 60;

    // Change HTML text to correct values
    eventName.innerHTML = nextGameName;
    days.innerText = (daysDelta<10) ? `0${daysDelta}` : daysDelta;
    hours.innerText = (hoursDelta<10) ? `0${hoursDelta}` : hoursDelta;
    minutes.innerText = (minutesDelta<10) ? `0${minutesDelta}` : minutesDelta;
    seconds.innerText = (secondsDelta<10) ? `0${secondsDelta}` : secondsDelta;
}

updateCountdown();
setInterval(updateCountdown, 1000)