
const fileInput = document.getElementById("file-input");

fileInput.onchange = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("application/json")) return;

    const fileReader = new FileReader();

    fileReader.onload = (e) => {
        const json = JSON.parse(e.target.result);
        let players = [];
        json.forEach(el => players.push(Player.from(el)));
        console.log(players);
    };

    fileReader.readAsText(file); 
};