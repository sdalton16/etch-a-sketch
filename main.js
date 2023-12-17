// -------- VARIABLES --------



const gridContainer = document.createElement('div');
const reset = document.querySelector('#reset');
const makeGrid = document.querySelector('#makeGrid');
const inputValue = document.querySelector('#sliderValue');

let isMouseDown = false;
let inputSides = document.querySelector('#sides');
let gridSides = 16;



// -------- EVENTS --------



document.addEventListener('DOMContentLoaded', () => {
    gridContainer.setAttribute('id', 'gridContainer');
    document.body.appendChild(gridContainer);
    createGrid(gridSides);
});

reset.addEventListener('click', () => {
    resetGrid();
});

makeGrid.addEventListener('click', () => {
    resetGrid();
    removeGrid();
    gridSides = getSides();
    createGrid(gridSides);
});

inputSides.oninput = () => {
    sliderValue.textContent = `${inputSides.value} x ${inputSides.value}`;
}


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
    console.log(gridDivs);
    
    for (let i = 0; i < gridDivs.length; i++) {
        console.log(gridDivs)
        gridDivs[i].addEventListener('mouseenter', () => {
            if (isMouseDown) {
                gridDivs[i].className = '';
                gridDivs[i].classList.add('gridDivBlack')
            }
        });
    };
};

const removeGrid = function () {
    let gridRows = gridContainer.querySelectorAll('.gridRow');

    for (let i = 0; i < gridRows.length; i++) {
        gridContainer.removeChild(gridRows[i]);
    };
};

const resetGrid = function () {
    let gridDivs = document.querySelectorAll('.gridDivBlack');

    for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].className = '';
        gridDivs[i].classList.add('gridDiv');
    };
};

const getSides = function () {
    return inputSides.value;
};

const handleMouseDown = function () {
    console.log('down'); 
    isMouseDown = true;
};

const handleMouseUp = function () {
    console.log('up');
    isMouseDown = false;
};

window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);