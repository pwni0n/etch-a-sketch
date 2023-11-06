const gridContainer = document.querySelector(".grid-container");
const button = document.querySelector("button");
const GRID_PIXEL_SIZE = 700;
let gridSquares = 16;

function newGrid() {
    gridSquares = prompt();

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