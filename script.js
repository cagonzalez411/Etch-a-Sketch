let sizeofGrid = 16;
const grid = document.querySelector('.grid');

function createRows(gridSize) {
    for (var i = 0; i < gridSize; i++) {
        var div = document.createElement("div");
        div.className = "row";
        grid.appendChild(div);
    }; 
}

function createCols(gridSize) {
    let rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        for (let i = 0; i < gridSize; i++) {
            var col = document.createElement("div");
            col.className = "col";
            row.appendChild(col);
        }
    }) 
};

function createGrid(sizeofGrid) {
    createRows(sizeofGrid)
    createCols(sizeofGrid)
    
    cols.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
        })
    });
}

let cols = document.querySelectorAll('.col')

createGrid(sizeofGrid)
const gridResetBtn = document.querySelector('#resetButton');

gridResetBtn.addEventListener('click', () => {
    cols.forEach(item => {
        item.classList.remove('hovered')
    });
    let userSize = prompt("Enter the desired square size.")
    createGrid(userSize)
});





