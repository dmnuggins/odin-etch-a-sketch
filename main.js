// Initialization
const gridContainer = document.querySelector('.grid');
let gridItems;
let hoverCounts = [];

// generateGrid(16,16);
generateGrid(16);

function generateGrid(size) {
    // Clear existin grid
    gridContainer.innerHTML = '';

    // Set grid dimensions
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Greate grid cells
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.id = String(i + 1);
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }

    getGridElements();
    initGridListeners();
}


function initGridListeners() {
    gridItems.forEach((cell, index) => {

        hoverCounts[index] = 0;
        cell.addEventListener('mouseover', () => {
            hoverCounts[index]++;
            // console.log(cell.id + ": " + hoverCounts[index]);
            cell.classList.add('hover');
        });
    });
}


function getGridElements() {
    gridItems = document.querySelectorAll('.cell');
    // console.log(gridItems);
}

function resetHoverCounts() {
    hoverCounts = [];
}

function removeGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function clearGrid() {
    gridItems.forEach(cell => {
        cell.style.color = "#E4DCCF";
    });
}

//  bundles steps to reset functionality of etch-a-sketch
function resetEtchASketch() {
    resetHoverCounts();
    getGridElements();
    initGridListeners();
}

// Slider input
const slider = document.getElementById('slider');
const columns = document.getElementById('col');
const rows = document.getElementById('row');
const redrawButton = document.querySelector(".redraw-button");


slider.addEventListener('input', () => {
    const sliderValue = slider.value;
    columns.textContent = sliderValue;
    rows.textContent = sliderValue;
})

redrawButton.addEventListener("click", () => {
    generateGrid(slider.value);
  });

const clearButton = document.querySelector('.clear-board-button')
// console.log(clearButton);
clearButton.addEventListener('click', () => {
    // console.log(gridItems);
    gridItems.forEach(cell => {
        cell.classList.remove('hover');
    });
})

