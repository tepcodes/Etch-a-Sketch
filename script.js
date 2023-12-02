// script.js

// Set the slider attributes
const sizeSlider = document.getElementById('size-slider');
sizeSlider.setAttribute('min', 5);
sizeSlider.setAttribute('max', 60);

// Set the initial value (you can change this as needed)
sizeSlider.value = 30;

// Store the initial value in a variable
let gridSize = sizeSlider.value;

// Function to create the grid
function createGrid() {
    const gridContainer = document.getElementById('grid-container');

    // Clear the existing grid
    gridContainer.innerHTML = '';

    const squareSize = ${100/gridSize}%

    // Create rows and columns based on the slider value
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.width = squareSize;
            square.style.height = squareSize;
            row.appendChild(square);
        }

        gridContainer.appendChild(row);
    }
}

// Initial grid creation
createGrid();

// Event listener for slider changes
sizeSlider.addEventListener('input', function () {
    gridSize = sizeSlider.value;
    createGrid();
});
