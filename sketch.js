const gridContainer = document.querySelector(".grid-container");
const newGridBtn = document.querySelector(".new-grid");
const colorGridBtn = document.querySelector(".color-grid");
const GRID_PIXEL_SIZE = 700;
let gridSquares = 16;

newGridBtn.addEventListener("click", e => {
    gridContainer.classList.remove("color");
    newGrid();
});
colorGridBtn.addEventListener("click", e => {
    gridContainer.classList.add("color");
    newGrid();
});

function randomVal() {
    return Math.floor(Math.random() * 255) + 1
}

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
            const randomR = randomVal();
            const randomG = randomVal();
            const randomB = randomVal();
            let transparency = 1;

            gridItem.style.height = `${GRID_PIXEL_SIZE / gridSquares}px`;
            gridItem.style.width = `${GRID_PIXEL_SIZE / gridSquares}px`;
            gridContainer.appendChild(gridItem);
    
            gridItem.addEventListener("mouseenter", e => {
                gridContainer.classList.contains("color")
                ? e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB}, ${transparency / 10})`
                : e.target.style.backgroundColor = `rgb(0, 0, 0, ${transparency / 10})`;
                transparency++;
            });
        }
    }
}

newGrid();