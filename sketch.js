const gridContainer = document.querySelector(".grid-container");
const GRID_PIXEL_SIZE = 700;
let gridSquares = 16;

for (let i = 0; i < gridSquares; i++) {
    for (let j = 0; j < gridSquares; j++) {
        const gridItem = document.createElement("div");
        gridItem.style.height = `${GRID_PIXEL_SIZE / gridSquares}px`;
        gridItem.style.width = `${GRID_PIXEL_SIZE / gridSquares}px`;
        gridItem.style.border = "1px solid black"
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener("mouseenter", e => {
            e.target.style.backgroundColor = "black";
        })
    }
}