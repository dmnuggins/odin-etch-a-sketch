// Initialization
const gridContainer = document.querySelector('.grid');
let gridItems;
let hoverCounts = [];

generateGrid(16,16);


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
    console.log(gridItems);
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

// Get data from Modal
const form = document.querySelector('.form');
const colsInput = document.getElementById('colsInput');
const rowsInput = document.getElementById('rowsInput');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // need to limit the num of grids to 100 or less
    const columns = parseInt(colsInput.value, 10);

    const rows = parseInt(rowsInput.value, 10);
    console.log(columns);
    console.log(rows);

    removeGrid();

    generateGrid(columns, rows);
    resetEtchASketch();
    modal.close();
})

const clearButton = document.querySelector('.clear-board-button')
console.log(clearButton);
clearButton.addEventListener('click', () => {
    console.log(gridItems);
    gridItems.forEach(cell => {
        cell.classList.remove('hover');
    });
})

