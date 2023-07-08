console.log("Etch-a-Sketch");

const gridContainer = document.querySelector('.grid');

function generateGrid(cols, rows) {


    for (var i = 0; i < cols; i++) {
        var column = document.createElement('div'); // generate column
        column.className = 'col';
        for (var j = 0; j < rows; j++) {
            var row = document.createElement('div'); // generate row
            row.className = 'row';
            // row.textContent = (i + 1) + '-' + (j + 1);
            column.appendChild(row);
        }
        gridContainer.appendChild(column);
    }
}

generateGrid(19,16);

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

    const columns = parseInt(colsInput.value, 10);

    const rows = parseInt(rowsInput.value, 10);
    console.log(columns);
    console.log(rows);

    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    generateGrid(columns, rows);
})