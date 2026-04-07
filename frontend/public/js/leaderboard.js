import { getData } from "./util/api.js";

async function updateLeaderboard() {
    const leaderboard = document.getElementById("leaderboard__body");
    let data;
    let leaderboardInfo = "";
    let rank = 1;

    data = await getData("/statistics/leaderboard");

    data.forEach(team => {
        const row = `
            <tr>
                <td>${rank}</td>
                <td>${team.name}</td>
                <td>${team.wins}</td>
                <td>${team.losses}</td>
                <td>${team.wins - team.losses}</td>
            </tr>
        `;
        leaderboardInfo += row;
        rank++;
    })

    leaderboard.innerHTML = leaderboardInfo;
};

updateLeaderboard();
setInterval(updateLeaderboard, 60000);