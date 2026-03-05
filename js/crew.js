
let players = [];
let teams = [];

const buildCrewDOM = (parent, articleClass, data) => {
    const article = document.createElement("article");
    article.setAttribute("class", articleClass);

    for (let object of data) {
        const el = document.createElement(object.el);
        el.setAttribute("class", object.class);
        el.setAttribute("title", object.title);

        switch (object.el) {
            case "img":
                el.setAttribute("src", object.src);
                el.setAttribute("alt", object.alt);
                break;
            case "ul":
                for (const teamName of object.teams) {
                    const li = document.createElement("li");
                    li.setAttribute("class", "players__teams-list-item")
                    const team = teams.find(t => t.title === teamName);
                    if (team)
                        li.innerText = `${team.title} from ${team.city} in ${team.country}`;
                    else
                        li.innerText = teamName;
                    el.appendChild(li);
                }
                break;
            default:
                el.innerText = object.content;
                break;
        }

        article.appendChild(el);
    }

    parent.appendChild(article);
};

const fileReader = new FileReader();
fileReader.onload = (e) => {
    const json = JSON.parse(e.target.result);
    if (!Array.isArray(json.players) || !Array.isArray(json.teams)) {
        window.alert("The specified json file is in the wrong format.");
        return;
    }

    players = json.players.map(o => Player.fromJSON(o));
    teams = json.teams.map(o => Team.fromJSON(o));

    // TODO: maybe other name idk
    const playerSection = document.querySelector(".players__section");
    players.forEach(p => buildCrewDOM(playerSection, "player", [
        { el: "h2", class: "player__full-name", content: `${p.firstName} ${p.lastName}`, title: "Full name" },
        { el: "p", class: "player__born", content: `${p.born.toDateString()}`, title: "Birthdate" },
        { el: "p", class: "player__nationality", content: `${p.nationality}`, title: "Nationality" },
        { el: "p", class: "player__role", content: `${p.role}`, title: "Role" },
        { el: "p", class: "player__number", content: `${p.number}`, title: "Number" },
        { el: "img", class: "player__photo", src: `../media/images/portraits/${p.firstName.toLowerCase()}_${p.lastName.toLowerCase()}.png`, alt: `Portrait of the player ${p.firstName} ${p.lastName}`, title: "Portrait" },
        { el: "ul", class: "player__teams-list", teams: p.formerTeams, title: "Former teams" }
    ]));
};


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
