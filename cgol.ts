// @author: jonschenk (https://github.com/jonschenk)

import Grid from "./game-objects/grid";

class Game {
    private gameSpeed = 2000; // default game speed
    constructor() {
        // Create a new grid
        let grid: Grid = new Grid();
        
        // Generate the grid
        grid.generate();
        this.testing(grid);
        this.updateGrid(grid);
        setInterval(() => this.updateGrid(grid), this.gameSpeed);
    }
    

    updateGrid(grid: Grid) {
        let rows = grid.getRows();
        let cols = grid.getCols();

        const gridDiv = document.getElementById("grid");
        if (!gridDiv) return;

        gridDiv.innerHTML = '';

        // create new table
        const table = document.createElement('table');
        table.style.borderCollapse = 'collapse';

        const squareSize = Math.floor(gridDiv.clientWidth / cols) / 5;

        for (let i = 0; i < rows - 1; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < cols - 1; j++) {
                const cell = document.createElement('td');

                // Style the cell as a square
                cell.style.width = `${squareSize}px`;
                cell.style.height = `${squareSize}px`;
                cell.style.border = '1px solid black';

                // Set the cell's background color based on its status
                cell.style.backgroundColor = grid.getCell(i, j)?.getStatus() ? 'black' : 'white';

                cell.addEventListener('click', () => {
                    grid.getCell(i, j)?.toggleState();
                    cell.style.backgroundColor = grid.getCell(i, j)?.getStatus() ? 'black' : 'white';
                });
                row.appendChild(cell);
            }

            table.appendChild(row);
        }


        gridDiv.appendChild(table);
    }


    testing(grid: Grid | null) {
        let cell = grid?.getCell(2, 2);
        let cell1 = grid?.getCell(3, 2);
        let cell2 = grid?.getCell(4, 2);
        let cell3 = grid?.getCell(3, 3);
        
        cell?.setStatus(true);
        cell1?.setStatus(true);
        cell2?.setStatus(true);
        let num = cell3?.numNeighbors();

        console.log(num);

        console.log(cell3?.getStatus());
    }
}

new Game();