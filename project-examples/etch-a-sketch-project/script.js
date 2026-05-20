let container = document.querySelector("#container");

let gridDimension = 50;
let cellPercentage = 100/gridDimension;

for(let i = 0; i < gridDimension; i++ ) {
    let row = document.createElement("div");
    row.setAttribute("class","row");
    // row.setAttribute("height",`${cellPercentage}%`)

    for(let x = 0; x < gridDimension; x++) {
        let cell = document.createElement("div");

    }
    container.appendChild(row);
}