let counterDisplay = document.querySelector("#counter-display");
let resetButton = document.querySelector("#reset-button");
let increaseButton = document.querySelector("#increase-button");
let decreaseButton = document.querySelector("#decrease-button");

let counterNum = 0;

resetButton.addEventListener("click", () => {
    counterNum = 0;
    counterDisplay.textContent = 0;
});

increaseButton.addEventListener("click", () => {
    counterNum += 1;
    counterDisplay.textContent = counterNum;
});

decreaseButton.addEventListener("click", () => {
    let amount = counterNum == 0 ? 0 : 1;

    counterNum -= amount;
    counterDisplay.textContent = counterNum;
});



