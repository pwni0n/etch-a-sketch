const gridContainer = document.querySelector(".grid-container");
const button = document.querySelector("button");
const GRID_PIXEL_SIZE = 700;
let gridSquares = 16;

button.addEventListener("click", newGrid)

function newGrid() {
    gridSquares = Math.floor(Number.parseFloat(prompt("How many squares? (1-100)", 16))) || 16;
    gridSquares > 100 ? gridSquares = 100 : gridSquares = gridSquares;
    gridSquares < 1 ? gridSquares = 1 : gridSquares = gridSquares;

    for (let element of document.querySelectorAll(".grid-container > div")) {
        element.remove();
    }

    for (let i = 0; i < gridSquares; i++) {
        for (let j = 0; j < gridSquares; j++) {
            const gridItem = document.createElement("div");
            gridItem.style.height = `${GRID_PIXEL_SIZE / gridSquares}px`;
            gridItem.style.width = `${GRID_PIXEL_SIZE / gridSquares}px`;
            gridContainer.appendChild(gridItem);
    
            gridItem.addEventListener("mouseenter", e => {
                e.target.style.backgroundColor = "black";
            })
        }
    }
}

newGrid();