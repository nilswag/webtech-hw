
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
        let players = [];
        json.forEach(el => players.push(Player.from(el)));
        console.log(players);
    };

    fileReader.readAsText(file); 
});