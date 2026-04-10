import { getData } from "./util/api.js";

async function updateGames() {
    const upcomingGames = document.getElementById("upcoming-games__body");
    const passedGames = document.getElementById("passed-games__body");
    let upcomingGamesData;
    let passedGamesData;
    let upcomingGamesInfo = "";
    let passedGamesInfo = "";

    upcomingGamesData = await getData("/statistics/upcoming-games");
    passedGamesData = await getData("/statistics/passed-games");
    // data = await data.json();

    upcomingGamesData.forEach(game => {
        const upcomingGamesRow = `
            <tr>
                <td>${new Date(game.date * 1000).toUTCString()}</td>
                <td>${game.venue}</td>
                <td>${game.defender}</td>
                <td>${game.challenger}</td>
            </tr>
        `;
        upcomingGamesInfo += upcomingGamesRow;
    });

    passedGamesData.forEach(game =>{
         const passedGamesRow = `
            <tr>
                <td>${new Date(game.date * 1000).toUTCString()}</td>
                <td>${game.venue}</td>
                <td>${game.defender}</td>
                <td>${game.scoreDefender} - ${game.scoreChallenger}</td>
                <td>${game.challenger}</td>
            </tr>
        `;
        passedGamesInfo += passedGamesRow;
    })

    upcomingGames.innerHTML = upcomingGamesInfo;
    passedGames.innerHTML = passedGamesInfo;
};

updateGames();
setInterval(updateGames, 60000);