
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

    const fileReader = new FileReader();

    fileReader.onload = (e) => {
        const json = JSON.parse(e.target.result);
        if (!Array.isArray(json.players) || !Array.isArray(json.teams)) {
            window.alert("The specified json file is in the wrong format.");
            return;
        }

        let players = json.players.map(o => Player.fromJSON(o));
        let teams = json.teams.map(o => Team.fromJSON(o));
        console.log(players);
        console.log(teams);
    };

    fileReader.readAsText(file); 
});