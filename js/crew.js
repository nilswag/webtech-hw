const main = document.getElementsByTagName("main")[0];
let players = [];
let teams = [];
const html = document.querySelector("html");

const optionsBlacklist = [
    "meta",
    "head",
    "script",
    "title",
    "link"
];

const selectOptions = document.querySelector(".crew-menus__select");
const updateSelectOptions = (seen, parent) => {
    for (let node of parent.childNodes) {
        if (node.nodeType !== Node.ELEMENT_NODE) continue;
        const name = node.tagName.toLowerCase();
        if (seen.has(name) || optionsBlacklist.includes(name)) continue;
        seen.add(name);
        if (node.childNodes.length != 0) updateSelectOptions(seen, node);
    
        let option = document.createElement("option");
        option.value = name;
        option.innerText = name;
    
        selectOptions.appendChild(option);
    }
};

const applyButton = document.querySelector(".crew-menus__apply");
applyButton.addEventListener("click", (e) => {    
    if (!selectOptions.value) {
        window.alert("Please select an element.");
        return;
    }
    const fontSize = document.querySelector(".crew-menus__font-size");
    const fontColor = document.querySelector(".crew-menus__font-color");
    const backgroundColor = document.querySelector(".crew-menus__background-color");    

    const tags = document.querySelectorAll(selectOptions.value);
    tags.forEach(tag => {
        if (fontSize) tag.style.setProperty("font-size", `${fontSize.value}px`, "important");
        if (fontColor) tag.style.setProperty("color", fontColor.value, "important");
        if (backgroundColor) tag.style.setProperty("background-color", backgroundColor.value, "important");
    });
});

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
    players = json.players.map(o => Player.fromJSON(o, teams));
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
