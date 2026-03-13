const main = document.getElementsByTagName("main")[0];
let players = [];
let teams = [];
const html = document.querySelector("html");

const heading = document.createElement("h1");
heading.innerText = "Crew";
main.appendChild(heading);

const fileReaderInput = document.createElement("input");
fileReaderInput.type = "file";
fileReaderInput.id = "file-input";
main.appendChild(fileReaderInput);

const playersSection = document.createElement("section");
playersSection.classList.add("players__section");
main.appendChild(playersSection);


const fileReader = new FileReader();
fileReader.addEventListener("load", (e) => {
    const json = JSON.parse(e.target.result);
    if (!Array.isArray(json.players) || !Array.isArray(json.teams)) {
        window.alert("The specified json file is in the wrong format.");
        return;
    }

    teams = json.teams.map(Team.fromJSON);
    players = json.players.map(p => Player.fromJSON(p, teams));
    players.forEach(p => Player.toHTML(p, playersSection));
    
    const seen = new Set();
    updateSelectOptions(seen, html);
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

updateSelectOptions(new Set(), html);
