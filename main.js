console.log("Etch-a-Sketch");

const gridContainer = document.querySelector('.grid');

function generateGrid(cols, rows) {
    // var grid = document.createElement('div');
    // grid.className = 'grid';

    for (var i = 0; i < cols; i++) {
        var column = document.createElement('div'); // generate column
        column.className = 'col';
        for (var j = 0; j < rows; j++) {
            var row = document.createElement('div'); // generate row
            row.className = 'row';
            row.textContent = (i + 1) + '-' + (j + 1);
            column.appendChild(row);
        }
        gridContainer.appendChild(column);
    }
}

function updateGridContainer(rows, cols) {
    const width = cols * 10;
    const height = rows * 10;
    gridContainer.style.width = String(width) + 'px';
    gridContainer.style.height = String(height) + 'px';
}

generateGrid(19,16);
// generateGrid(16,10);