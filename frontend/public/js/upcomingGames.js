import { getData } from "./util/api.js";

async function updateGames() {
    const upcomingGames = document.getElementById("upcoming-games__body");
    const passedGames = document.getElementById("passed-games__body");
    let upcomingGamesData;
    let passedGamesData;

    upcomingGamesData = (await getData("/statistics/upcoming-games")).result;
    passedGamesData = (await getData("/statistics/passed-games")).result;
    // data = await data.json();

    upcomingGamesData.forEach(game => {
        const tableRow = document.createElement("tr");
        const data = [
            new Date(game.date * 1000).toUTCString(),
            game.venue,
            game.defender,
            game.challenger 
        ];
        data.forEach(el => {
            const td = document.createElement("td");
            td.innerText = `${el}`;
            tableRow.appendChild(td);
        })

        upcomingGames.appendChild(tableRow);
    });

    passedGamesData.forEach(game =>{
        const tableRow = document.createElement("tr");
        const data = [
            new Date(game.date * 1000).toUTCString(),
            game.venue,
            game.defender,
            game.scoreDefender - game.scoreChallenger,
            game.challenger  
        ];
        data.forEach(el => {
            const td = document.createElement("td");
            td.innerText = `${el}`;
            tableRow.appendChild(td);
        })
    })
};

updateGames();
setInterval(updateGames, 60000);