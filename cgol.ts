// @author: jonschenk (https://github.com/jonschenk)

import Grid from "./game-objects/grid";

class Game {
    private gameSpeed = 500; // default game speed
    constructor() {
        // Create a new grid
        let grid: Grid = new Grid();
        
        // Generate the grid
        grid.generate();
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

        for (let i = 0; i < rows; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < cols; j++) {
                const cell = document.createElement('td');

                // Style the cell as a square
                cell.style.width = `${squareSize}px`;
                cell.style.height = `${squareSize}px`;
                cell.style.border = '1px solid black';

                // Set the cell's background color based on its status
                cell.style.backgroundColor = grid.getCell(i, j)?.getStatus() ? 'black' : 'white';
                grid.getCell(i, j)?.updateStatus();

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
        let cell = grid?.getCell(0, 0);
        cell?.setStatus(true);

        cell?.getNeighbor("down")?.setStatus(true);
        cell?.getNeighbor("downright")?.setStatus(true);
        cell?.getNeighbor("right")?.setStatus(true);
    }
}

new Game();