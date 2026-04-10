import { getData } from "./util/api.js";

var orderBy = "id";
var sortDir = "DESC";

document.getElementById("leaderboard-header__team").addEventListener("click", () => {
    sortLeaderboard("name");
});
document.getElementById("leaderboard-header__wins").addEventListener("click", () => {
    sortLeaderboard("wins");
});
document.getElementById("leaderboard-header__losses").addEventListener("click", () => {
    sortLeaderboard("losses");
});
document.getElementById("leaderboard-header__total-points").addEventListener("click", () => {
    sortLeaderboard("totalPoints");
});

function sortLeaderboard(OrderBy){
    if(orderBy === OrderBy){
        sortDir = sortDir === "ASC"? "DESC" : "ASC";
    }
    orderBy = OrderBy;
    updateLeaderboard();
}

async function updateLeaderboard() {
    const leaderboard = document.getElementById("leaderboard__body");
    let data;
    let leaderboardInfo = "";
    let rank = 1;

    data = await getData(`/statistics/leaderboard/${orderBy}.${sortDir}`);

    data.forEach(team => {
        const row = `
            <tr>
                <td>${rank}</td>
                <td>${team.name}</td>
                <td>${team.wins}</td>
                <td>${team.losses}</td>
                <td>${team.totalPoints}</td>
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