
let players = [];
let teams = [];
const playersSection = document.querySelector(".players__section");

const selectOptions = document.querySelector(".crew-menus__select");
const updateSelectOptions = (seen, parent) => {
    for (let node of parent.childNodes) {
        if (node.nodeType !== Node.ELEMENT_NODE) continue;
        const name = node.tagName.toLowerCase();
        if (seen.has(name)) continue;
        seen.add(name);
        if (node.childNodes.length != 0) updateSelectOptions(seen, node);
    
        let option = document.createElement("option");
        option.value = name;
        option.innerText = name;
    
        selectOptions.appendChild(option);
    }
};

const fileReader = new FileReader();
fileReader.addEventListener("load", (e) => {
    const json = JSON.parse(e.target.result);
    if (!Array.isArray(json.players) || !Array.isArray(json.teams)) {
        window.alert("The specified json file is in the wrong format.");
        return;
    }

    players = json.players.map(Player.fromJSON);
    teams = json.teams.map(Team.fromJSON);
    players.forEach(p => Player.toHTML(p, playersSection));
    
    const seen = new Set();
    const body = document.querySelector("body")
    updateSelectOptions(seen, body);
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
