let sizeofGrid = 16;
const grid = document.querySelector('.grid');

const gridResetBtn = document.querySelector('#resetButton');

function createRows(gridSize) {
    for (var i = 0; i < gridSize; i++) {
        var div = document.createElement("div");
        div.className = "row";
        grid.appendChild(div);
    }; 
}

function createCols(rows, gridSize) {
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
    const rows = document.querySelectorAll('.row');
    createCols(rows, sizeofGrid)
    let cols = document.querySelectorAll('.col')
    cols.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
        })
    });
    
    gridResetBtn.addEventListener('click', () => {
        cols.forEach(item => {
            item.classList.remove('hovered')
        });
        document.querySelectorAll('.row').forEach(e => e.remove())
        let userSize = prompt("Enter the desired square size.")
        while (userSize > 100) {
            userSize = prompt('Please enter a number 100 or lower')
        }
        createGrid(userSize)
    });

}



createGrid(sizeofGrid)












