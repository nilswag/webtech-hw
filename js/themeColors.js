const colorThemeButton = document.getElementById('color-mode');
const colorModeForm = document.getElementById('color-mode-form');

var styleSheet;

for (const sheet of document.styleSheets) {
    if(sheet.title === "main-css"){
        styleSheet = sheet;
    }
}

// window.addEventListener("change", colorMode);

window.addEventListener("load", load);

colorThemeButton.addEventListener("input", colorModeSwitch);

colorModeForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(colorModeForm);

    addThemeColors(formData.get("theme name"), formData.get("background color"), formData.get("primary text color"), formData.get("secundary text color"), formData.get("primary theme color"), formData.get("secundary theme color"), formData.get("tertiary theme color"));

    document.getElementById("color-mode-screen").classList.remove("color-mode-screen--show");
});

document.getElementById("cancel").addEventListener("click", function() {
    document.getElementById("color-mode-screen").classList.remove("color-mode-screen--show");

    load();
});


// window.matchMedia("(prefers-color-sceme:light)").addEventListener("change", function(e) {console.log(e.matches? "light" : "dark");});

// function colorMode(){
    //     if(window.matchMedia("(prefers-color-sceme:light)").matches) {
        
    //     }
    // }

function load() {
    let sessionColorCookie = sessionStorage.getItem("color-mode");
    let localColorCookie = localStorage.getItem("color-mode");
    colorThemeButton.value = sessionColorCookie === null ? localColorCookie === null ? "light-mode" : localColorCookie : sessionColorCookie;
    colorModeSwitch();
}

function addThemeColors(name, backgroundColor, primaryTextColor, secundaryTextColor, primaryThemeColor, secundaryThemeColor, tertiaryThemeColor) {

    let child = document.createElement("option");
    let text = document.createTextNode(name);
    child.value = name.replaceAll(" ", "-");
    child.appendChild(text);
    colorThemeButton.insertBefore(child, colorThemeButton.lastElementChild);
    colorThemeButton.value = child.value;

    let string = "." + child.value + " {";
    string += "--background-color: " + backgroundColor + ";";
    string += "--primary-text-color: " + primaryTextColor + ";";
    string += "--secundary-text-color: " + secundaryTextColor + ";";
    string += "--primary-theme-color: " + primaryThemeColor + ";";
    string += "--secundary-theme-color: " + secundaryThemeColor + ";";
    string += "--tertiary-theme-color: " + tertiaryThemeColor + ";";
    string += "}";
    // alert(string);
    styleSheet.insertRule(string, 2);

    colorModeSwitch();
}

function colorModeSwitch(){
    if(colorThemeButton.value === "custom") {
        document.getElementById("color-mode-screen").classList.add("color-mode-screen--show");
    } else {
        let classes = document.getElementsByTagName("html")[0].classList;
        localStorage.setItem("colorMode", colorThemeButton.value);
        sessionStorage.setItem("colorMode", colorThemeButton.value);
        classes.replace(classes.item(0), colorThemeButton.value);
    }
}