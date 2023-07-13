// Initialization
const gridContainer = document.querySelector('.grid');
let gridItems;
let hoverCounts = [];
let rainbowOn = false;
let pencilOn = false;


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
            hoverCounts[index] += 1;
            // console.log(cell.id + ": " + hoverCounts[index]);
            if(rainbowOn) {
                cell.style.backgroundColor = getRandomColor();
            }
            else if(pencilOn) {
                const hoverVal = hoverCounts[cell.id - 1];
                const opacityVal = Math.min(hoverVal * 0.3, 1);
                cell.style.backgroundColor =  `rgb(57, 62, 70, ${opacityVal})`;
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

function resetHoverCounts() {
    hoverCounts = [];
}

function removeGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


//  bundles steps to reset functionality of etch-a-sketch
function resetEtchASketch() {
    resetHoverCounts();
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
const redrawButton = document.querySelector(".redraw-button");


slider.addEventListener('input', () => {
    const sliderValue = slider.value;
    columns.textContent = sliderValue;
    rows.textContent = sliderValue;
})

redrawButton.addEventListener("click", () => {
    generateGrid(slider.value);
  });

const clearButton = document.querySelector('.clear-board-button');
// console.log(clearButton);
clearButton.addEventListener('click', () => {
    // console.log(gridItems);
    gridItems.forEach(cell => {
        cell.style.backgroundColor = "#F7F7F7";
    });
})

const rainbowButton = document.querySelector('.rgbiv-button');

rainbowButton.addEventListener('click', () => {
    rainbowOn = !rainbowOn;
    pencilOn = false;
})

const pencilButton = document.querySelector('.pencil-button');
pencilButton.addEventListener('click', () => {
    pencilOn = !pencilOn;
    rainbowOn = false;
})