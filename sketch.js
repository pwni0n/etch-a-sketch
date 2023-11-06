const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridItem = document.createElement("div");
        gridItem.style.height = "30px";
        gridItem.style.width = "30px";
        gridItem.style.border = "1px solid black"
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener("mouseenter", e => {
            e.target.style.backgroundColor = "black";
        })
    }
}