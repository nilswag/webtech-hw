const colorThemeButton = document.getElementById('colorMode');

var styleSheet;

for (const sheet of document.styleSheets) {
    if(sheet.title === "main-css"){
        styleSheet = sheet;
    }
}

// window.addEventListener("change", colorMode);

window.addEventListener("load", load);

colorThemeButton.addEventListener("input", colorModeSwitch);


// window.matchMedia("(prefers-color-sceme:light)").addEventListener("change", function(e) {console.log(e.matches? "light" : "dark");});

// function colorMode(){
    //     if(window.matchMedia("(prefers-color-sceme:light)").matches) {
        
    //     }
    // }

class ThemeColors{
    #backgroundColor;
    #primaryTextColor;
    #secundaryTextColor;
    #primaryThemeColor;
    #secundaryThemeColor;
    #tertiaryThemeColor;

    constructor(){

    }

}

function addThemeColors(name, backgroundColor, primaryTextColor, secundaryTextColor, primaryThemeColor, secundaryThemeColor, tertiaryThemeColor) {

    let child = document.createElement("option");
    let text = document.createTextNode(name);
    child.value = name;
    child.appendChild(text);
    let option = document.getElementById("colorMode");
    option.insertBefore(child, option.lastElementChild);

    let string = "." + name + " {";
    string += "--background-color: " + backgroundColor + ";";
    string += "--primary-text-color: " + primaryTextColor + ";";
    string += "--secundary-text-color: " + secundaryTextColor + ";";
    string += "--primary-theme-color: " + primaryThemeColor + ";";
    string += "--secundary-theme-color: " + secundaryThemeColor + ";";
    string += "--tertiary-theme-color: " + tertiaryThemeColor + ";";
    string += "}";
    // alert(string);
    styleSheet.insertRule(string, 2);
}

addThemeColors("teest", "#00ff00", "#FFFFFF", "#0055AA", "#105500", "#102099", "#101010");

function load() {
    let sessionColorCookie = sessionStorage.getItem("colorMode");
    let localColorCookie = localStorage.getItem("colorMode");
    colorThemeButton.value = sessionColorCookie !== null ? sessionColorCookie : localColorCookie !== null ? localColorCookie : "light-mode";
    colorModeSwitch();
}

function colorModeSwitch(){
    // if(colorThemeButton.value === "custom") {
        
    // }
    let classes = document.getElementsByTagName("html")[0].classList;
    localStorage.setItem("colorMode", colorThemeButton.value);
    sessionStorage.setItem("colorMode", colorThemeButton.value);
    classes.replace(classes.item(0), colorThemeButton.value);
}