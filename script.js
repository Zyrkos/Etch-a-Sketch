const gridSize = 16;
const container = document.querySelector('.container');
const resetButton = document.querySelector('button');

const createGrid = (amtOfGrids) => {
    for(let i = 0; i < amtOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for(let j = 0; j < amtOfGrids; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            //adding mouseenter effect
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black';
            })
            row.appendChild(gridBox)
        }
        container.appendChild(row);
    }
}

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt ('what dimensions do you want for the new grid'));

    while (userSize > 100) {
        userSize = Number(prompt ('Pick a smaller number and make sure it\s equal or less than 100'));
        createGrid(userSize);
    }
    
    
})

createGrid(gridSize);
