// unable to get gridDivs to have correct height to allow for squares vs. just columns
// likely can use aspect ratio to ensure height and width are the same
// but this require setting a height or width and unsure how to do so if number of
// grids is set dynamically

const gridContainer = document.createElement('div');
const reset = document.querySelector('#reset');
const makeGrid = document.querySelector('#makeGrid');

let inputSides = document.querySelector('#sides');
let gridSides = 4;



// -------- EVENTS --------



// create initial grid on page load
document.addEventListener('DOMContentLoaded', () => {
    gridContainer.setAttribute('id', 'gridContainer');
    document.body.appendChild(gridContainer);
    createGrid(gridSides);
});

// remove all coloring
reset.addEventListener('click', () => {
    resetGrid();
});

// create new grid based on user input
makeGrid.addEventListener('click', () => {
    resetGrid();
    removeGrid();
    gridSides = getSides();
    createGrid(gridSides);
});



// -------- FUNCTIONS --------



const createGrid = function (gridSides) {
    for (let i = 0; i < gridSides; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        gridContainer.appendChild(gridRow);

        for (let i = 0; i < gridSides; i++) {
            let gridDiv = document.createElement('div');
            gridDiv.classList.add('gridDiv');
            gridRow.appendChild(gridDiv);
        };
    };
    let gridDivs = document.querySelectorAll('.gridDiv');
    
    for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].addEventListener('mouseover', () => {
            gridDivs[i].className = '';
            gridDivs[i].classList.add('gridDivBlack');
        });
    };
}

const removeGrid = function () {
    let gridRows = gridContainer.querySelectorAll('.gridRow');

    for (let i = 0; i < gridRows.length; i++) {
        gridContainer.removeChild(gridRows[i]);
    }
};

const resetGrid = function () {
    let gridDivs = document.querySelectorAll('.gridDivBlack');
    console.log(gridDivs);

    for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].className = '';
        gridDivs[i].classList.add('gridDiv');
    };
};

const getSides = function () {
    if (inputSides.value > 64) {
        alert('Max = 64');
        inputSides.value =  64;
    };
    return inputSides.value;
}