// unable to get gridDivs to have correct height to allow for squares vs. just columns
// likely can use aspect ratio to ensure height and width are the same
// but this require setting a height or width and unsure how to do so if number of
// grids is set dynamically

const gridContainer = document.createElement('div');
const reset = document.querySelector('#reset');
const makeGrid = document.querySelector('#makeGrid');
let gridSides = document.querySelector('#sides');
let gridSize = 16;
let gridDivs;

document.addEventListener('DOMContentLoaded', () => {
    gridContainer.setAttribute('id', 'gridContainer');
    document.body.appendChild(gridContainer);
    createGrid(gridSize);
});

reset.addEventListener('click', () => {
    resetGrid();
});

makeGrid.addEventListener('click', () => {
    resetGrid();
    removeGrid(gridSize);
    gridSize = getSides() ** 2;
    createGrid(gridSize);
});

const createGrid = function (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
        gridContainer.appendChild(gridDiv);
    }
    let gridDivs = gridContainer.querySelectorAll('div');
    
    for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].addEventListener('mouseover', () => {
            gridDivs[i].className = '';
            gridDivs[i].classList.add('gridDivBlack');
        });
    };
}

const removeGrid = function () {
    let gridDivs = gridContainer.querySelectorAll('div');

    for (let i = 0; i < gridDivs.length; i++) {
        console.log(gridDivs[i]);
        gridContainer.removeChild(gridDivs[i]);
    }
};

const resetGrid = function () {
    let gridDivs = gridContainer.querySelectorAll('div');

    for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].className = '';
        gridDivs[i].classList.add('gridDiv');
    };
};

const getSides = function () {
    if (gridSides.value > 64) {
        alert('Max = 64');
        gridSides.value =  64;
    };
    return gridSides.value;
}