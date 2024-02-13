// @author: jonschenk (https://github.com/jonschenk)

import Grid from "./game-objects/grid";


class Game {
    constructor() {
        // Create a new grid
        let grid: Grid = new Grid();
        
        // Generate the grid
        grid.generate();

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

        let cell2 = grid?.getCell(5, 2);

        cell?.setStatus(true);
        cell2?.setStatus(true);

        cell?.getNeighbor("down")?.setStatus(true);
        cell?.getNeighbor("downright")?.setStatus(true);

        cell2?.getNeighbor("upleft")?.setStatus(true);

        console.log(grid?.toString());

        let result = cell?.numNeighbors();

        console.log(result); // should be 2

        console.log("run completeeee!")
    }
}


new Game();