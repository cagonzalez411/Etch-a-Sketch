const gridSize = 16*16;
const grid = document.querySelector('.grid');
const gridResetBtn = document.querySelector('#resetButton')

for (var i = 0; i < gridSize; i++) {
    var div = document.createElement("div")
    div.className = "gridDiv"
    grid.appendChild(div)
};

const gridDivs = document.querySelectorAll('.gridDiv')

gridDivs.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('hovered');
    })
});

gridResetBtn.addEventListener('click', () => {
    gridDivs.forEach(item => {
        item.classList.remove('hovered')
    });
});





