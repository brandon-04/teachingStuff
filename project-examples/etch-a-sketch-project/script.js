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
            cell.setAttribute("id", cellID)
            cell.style.width = cellPercentage;


            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = ;
            });
    
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

function getRandomColor() {
    
}

function getRandomNum() {
    
}
