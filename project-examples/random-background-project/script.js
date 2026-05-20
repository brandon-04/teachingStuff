let page = document.getElementById("main-page");
let colorDisplay = document.querySelector("#color-display");
let changeButton = document.querySelector("#change-button");

changeButton.addEventListener("click", () => {
    updateColor(getRandomHexCode());
});

function updateColor(hex) {
    colorDisplay.textContent = `color: ${hex}`;
    page.style.backgroundColor = hex; 
}

function getRandomHexCode() {
    let arr = ["a","b","c","d","e","f","g","0","1","2","3","4","5","6","7","8","9"];
    let hex = "";

    for(let i = 0; i < 6; i++) {
        hex += arr[getRandomNum(arr.length)];
    }
    return `#${hex}`;
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}