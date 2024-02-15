// @author: jonschenk (https://github.com/jonschenk)

import Grid from "./game-objects/grid";

let isDragging = false;

class Game {
    private DEFAULT_SPEED = 100; // default game speed
    private gameSpeed = this.DEFAULT_SPEED; // game speed
    private intervalId?: any;

    constructor() {
        // Create a new grid
        let grid: Grid = new Grid();
        
        // Generate the grid
        grid.generate();
        this.updateGrid(grid);

        // Use button toggle-start-pause to start and pause the game
        const toggleStartPause = document.getElementById('toggle-start-pause');

        if (toggleStartPause) {
            toggleStartPause.addEventListener('click', () => {
                if (this.intervalId) {
                    // If the game is running, pause it
                    clearInterval(this.intervalId);
                    this.intervalId = undefined;
                    this.gameSpeed = this.DEFAULT_SPEED; // Reset the game speed
                } else {
                    // If the game is not running, start it
                    this.gameSpeed = 0; // Set the game speed to 0
                    this.intervalId = setInterval(() => this.updateGrid(grid), this.gameSpeed);
                }
            });
        }
    }
    

    async updateGrid(grid: Grid) {
        let rows = grid.getRows();
        let cols = grid.getCols();

        const gridDiv = document.getElementById("grid");
        if (!gridDiv) return;

        gridDiv.innerHTML = '';

        // create new table
        const table = document.createElement('table');
        table.style.borderCollapse = 'collapse';

        const squareSize = Math.floor(gridDiv.clientWidth / cols) / 2;

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


                cell.addEventListener('mousedown', (event) => {
                    isDragging = true;
                    // Existing code to handle a cell click
                    grid.getCell(i, j)?.toggleState();
                    cell.style.backgroundColor = grid.getCell(i, j)?.getStatus() ? 'black' : 'white';
                });

                cell.addEventListener('mousemove', (event) => {
                    if (isDragging) {
                        // Existing code to handle a cell click
                        grid.getCell(i, j)?.toggleState();
                        cell.style.backgroundColor = grid.getCell(i, j)?.getStatus() ? 'black' : 'white';
                    }
                });

                cell.addEventListener('mouseup', () => {
                    isDragging = false;
                });

                cell.addEventListener('click', () => {
                    grid.getCell(i, j)?.toggleState();
                    cell.style.backgroundColor = grid.getCell(i, j)?.getStatus() ? 'black' : 'white';
                });

                row.appendChild(cell);
            }
            table.appendChild(row);
        }

        this.updateCells(grid);
        gridDiv.appendChild(table);
    }


    updateCells(grid: Grid) {
        let rows = grid.getRows();
        let cols = grid.getCols();

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j< cols; j++) {
                let cell = grid.getCell(i,j);

                cell?.willBeAlive(grid);
            }
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j< cols; j++) {
                let cell = grid.getCell(i,j);

                cell?.updateStatus(grid);
            }
        }
    }


    toggleStartPause(grid: Grid) {
        let toggleStartPause = document.getElementById('toggle-start-pause');
        if (toggleStartPause) {
            if (toggleStartPause.innerHTML === 'Start') {
                toggleStartPause.innerHTML = 'Pause';
                this.gameSpeed = 100;
            } else {
                toggleStartPause.innerHTML = 'Start';
                this.gameSpeed = 0;
            }
        }
    }


    testing(grid: Grid | null) {
        let cell = grid?.getCell(2, 2);
        let cell1 = grid?.getCell(3, 2);
        let cell2 = grid?.getCell(4, 2);
        let cell3 = grid?.getCell(3, 3);
        
        cell?.setStatus(true);
        cell1?.setStatus(true);
        cell2?.setStatus(true);

        console.log(cell3?.getStatus());
    }
}

new Game();