const main = document.getElementsByTagName("main")[0];
let players = [];
let teams = [];

const heading = document.createElement("h1");
heading.innerText = "Crew";
main.appendChild(heading);

const fileReaderInput = document.createElement("input");
fileReaderInput.type = "file";
fileReaderInput.id = "file-input";
main.appendChild(fileReaderInput);

const playerSection = document.createElement("section");
playerSection.classList.add("players__section");
main.appendChild(playerSection);


const fileReader = new FileReader();
fileReader.addEventListener("load", (e) => {
    const json = JSON.parse(e.target.result);
    if (!Array.isArray(json.players) || !Array.isArray(json.teams)) {
        window.alert("The specified json file is in the wrong format.");
        return;
    }

    teams = json.teams.map(o => Team.fromJSON(o));    
    players = json.players.map(o => Player.fromJSON(o, teams));

    const playerSection = document.querySelector(".players__section");
    players.forEach(p => Player.toHTML(p, playerSection));
});

const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) {
        window.alert("Invalid file, please try uploading again.");
        return;
    }

    if (!file.type.startsWith("application/json")) {
        window.alert("Please only upload JSON files.");
        return;
    }

    fileReader.readAsText(file); 
});
