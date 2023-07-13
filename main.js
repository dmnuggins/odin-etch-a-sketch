// Initialization
const gridContainer = document.querySelector('.grid');
let gridItems;
let hoverCounts = [];

// generateGrid(16,16);
generateGrid(16);


function generateGrid(cols, rows) {

    for (var i = 0; i < cols; i++) {
        var column = document.createElement('div'); // generate column
        column.className = 'col';
        for (var j = 0; j < rows; j++) {
            var row = document.createElement('div'); // generate row
            row.className = 'row cell';
            row.id = String(i + 1) + '-' + String(j + 1);
            // row.textContent = (i + 1) + '-' + (j + 1);
            column.appendChild(row);
        }
        gridContainer.appendChild(column);
    }

    getGridElements();
    initGridListeners();

}

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


slider.addEventListener('input', () => {
    const sliderValue = slider.value;
    columns.textContent = sliderValue;
    rows.textContent = sliderValue;
})

// Modal
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".redraw-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

// MODAL
const form = document.querySelector('.form');
const colsInput = document.getElementById('colsInput');
const rowsInput = document.getElementById('rowsInput');

colsInput.addEventListener('input', () => {
    const numCols = parseInt(colsInput.value, 10);

    if(isNaN(numCols) || numCols < 0 || numCols > 100) {
        console.log("INVALID INPUT");
    } else {
        colsInput.value = numCols;
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // need to limit the num of grids to 100 or less
    const columns = parseInt(colsInput.value, 10);

    const rows = parseInt(rowsInput.value, 10);
    // console.log(columns);
    // console.log(rows);

    removeGrid();

    generateGrid(columns, rows);
    resetEtchASketch();
    modal.close();
})

const clearButton = document.querySelector('.clear-board-button')
// console.log(clearButton);
clearButton.addEventListener('click', () => {
    // console.log(gridItems);
    gridItems.forEach(cell => {
        cell.classList.remove('hover');
    });
})

