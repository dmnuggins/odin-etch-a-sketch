// Initialization
const gridContainer = document.querySelector('.grid');
let gridItems;
let opacityLevels = [];
let rainbowMode = false;
let pencilMode = false;
let eraserMode = false;
let penMode = true;

// flag will trigger when color is added to cell
let colored = false;


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

        opacityLevels[index] = 0;
        cell.addEventListener('mouseover', () => {
            opacityLevels[index] += 1;
            // console.log(cell.id + ": " + opacityLevels[index]);
            if(rainbowMode) {
                cell.style.backgroundColor = getRandomColor();
            }
            else if(pencilMode) {
                const hoverVal = opacityLevels[cell.id - 1];
                const opacityVal = Math.min(hoverVal * 0.3, 1);
                cell.style.backgroundColor =  `rgb(57, 62, 70, ${opacityVal})`;
            }
            else if(eraserMode) {
                cell.style.backgroundColor = "#F7F7F7";
                opacityLevels[cell.id - 1] = 0;
            } else {
                cell.style.backgroundColor = 'rgb(57, 62, 70)';
            }
        });
    });
}


function getGridElements() {
    gridItems = document.querySelectorAll('.cell');
    // console.log(gridItems);
}

function resetOpacityLevels() {
    opacityLevels = [];
}

function removeGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


//  bundles steps to reset functionality of etch-a-sketch
function resetEtchASketch() {
    resetOpacityLevels();
    getGridElements();
    initGridListeners();
}

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}



// INPUTS
const slider = document.getElementById('slider');
const columns = document.getElementById('col');
const rows = document.getElementById('row');
const clearButton = document.querySelector('.clear-board-button');
const redrawButton = document.querySelector(".redraw-button");
const rainbowButton = document.querySelector('.rgbiv-button');
const pencilButton = document.querySelector('.pencil-button');
const penButton = document.querySelector('.pen-button')
const eraserButton = document.querySelector('.eraser-button');


slider.addEventListener('input', () => {
    const sliderValue = slider.value;
    columns.textContent = sliderValue;
    rows.textContent = sliderValue;
})

redrawButton.addEventListener("click", () => {
    generateGrid(slider.value);
  });

// console.log(clearButton);
clearButton.addEventListener('click', () => {
    // console.log(gridItems);
    gridItems.forEach(cell => {
        cell.style.backgroundColor = "#F7F7F7";
    });
})

rainbowButton.addEventListener('click', () => {
    rainbowMode = true;
    pencilMode = false;
    eraserMode = false;
    penMode = false;
})

pencilButton.addEventListener('click', () => {
    pencilMode = true;
    rainbowMode = false;
    eraserMode = false;
    penMode = false;
})

penButton.addEventListener('click', () => {
    penMode = true;
    pencilMode = false;
    rainbowMode = false;
    eraserMode = false;
})

eraserButton.addEventListener('click', () => {
    eraserMode = true;
    rainbowMode = false;
    pencilMode = false;
    penMode = false;
})
