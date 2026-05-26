let container = document.querySelector("#container");
let resetButton = document.querySelector("#reset");

let cellObjects = [];

let gridDimension = 50;
let cellPercentage = `${100/gridDimension}%`;

resetButton.addEventListener("click", () => {
    clearGrid();
});

gridGeneration(); 

function gridGeneration() {
    for(let i = 0; i < gridDimension; i++ ) {
        let row = document.createElement("div");
        row.setAttribute("class","row");
        row.style.height = cellPercentage;
    
        for(let x = 0; x < gridDimension; x++) {
            let cell = document.createElement("div");
            let cellID = `cell${i}-${x}`;

            cell.setAttribute("class", "cell");
            cell.setAttribute("id", cellID);

            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = getRandomHexCode();
            });

            cell.style.width = cellPercentage;

            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function clearGrid() {
    for(let i = 0; i < gridDimension; i++ ) {
        for(let x = 0; x < gridDimension; x++) {
            let cellID = `cell${i}-${x}`;
            let cell = document.querySelector(`#${cellID}`);

            cell.style.backgroundColor = "white";
        }
    }
}

function getRandomHexCode() {
    let arr = ["A","B","C","D","E","F","G","0","1","2","3","4","5","6","7","8","9"];
    let hex = "";

    for(let i = 0; i < 6; i++) {
        hex += arr[getRandomNum(arr.length)];
    }
    return `#${hex}`;
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}


