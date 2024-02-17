// @author: jonschenk (https://github.com/jonschenk)

import Grid from "./game-objects/grid";
import Cell from "./game-objects/cell";

let isDragging = false;

let colora = 'white';
let colorb = 'transparent';

class Game {
    private DEFAULT_SPEED = 1000; // default game speed
    private CHANCE = 0.8 // chance of a cell being alive in randomizer
    private gameSpeed = this.DEFAULT_SPEED; // game speed
    private intervalId?: any;

    constructor() {
        // Create a new grid
        let grid: Grid = new Grid();

        // Generate the grid
        grid.generate();
        this.updateGrid(grid);
        this.buttons(grid);
    }
    

    /**
     * Update the grid
     * 
     * @param grid The grid to update
     */
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
                cell.style.border = '1px solid #242424';

                // Set the cell's background color based on its status
                cell.style.backgroundColor = grid.getCell(i, j)?.getStatus() ? colora : colorb;


                cell.addEventListener('mousedown', (event) => {
                    isDragging = true;
                });

                cell.addEventListener('mousemove', (event) => {
                    if (isDragging) {
                        // Existing code to handle a cell click
                        grid.getCell(i, j)?.setStatus(true);

                        cell.style.backgroundColor = colora;
                    }
                });

                cell.addEventListener('mouseup', () => {
                    isDragging = false;
                });

                cell.addEventListener('click', () => {
                    grid.getCell(i, j)?.toggleState();
                    cell.style.backgroundColor = grid.getCell(i, j)?.getStatus() ? colora : colorb;
                });

                row.appendChild(cell);
            }
            table.appendChild(row);
        }

        this.updateCells(grid);
        gridDiv.appendChild(table);
    }


    /**
     * Update the cells of the grid
     * 
     * @param grid The grid to update the cells of
     */
    updateCells(grid: Grid) {
        let rows = grid.getRows();
        let cols = grid.getCols();
        let willLive: Cell[] = [];
        let willDie: Cell[] = [];

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j< cols; j++) {
                let cell = grid.getCell(i,j);

                if (cell?.willBeAlive(grid)) {
                    willLive.push(cell);
                }
            }
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j< cols; j++) {
                let cell = grid.getCell(i,j);

                cell?.updateStatus(grid);
            }
        }
    }


    /**
     * Toggle the game state of the grid
     * 
     * @param grid The grid to toggle the game state of
     */
    toggleGameState(grid: Grid) {
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
    }


    /**
     * Clear the grid
     * 
     * @param grid The grid to clear
     */
    clear(grid: Grid) {
        let rows = grid.getRows();
        let cols = grid.getCols();

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j< cols; j++) {
                let cell = grid.getCell(i,j);

                cell?.setStatus(false);
            }
        }
    }


    /**
     * Randomizes the cells on the grid.
     * 
     * @param The grid to randomize.
     */
    randomize(grid: Grid) {
        this.clear(grid);
        let rows = grid.getRows();
        let cols = grid.getCols();

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j< cols; j++) {
                let cell = grid.getCell(i,j);

                cell?.setStatus(Math.random() > this.CHANCE);
            }
        }
    }


    /**
     * Buttons to control the game
     */
    buttons(grid: Grid) {
        const toggleStartPause = document.getElementById('toggle-start-pause');
        const clearButton = document.getElementById('clear');
        const randomizeButton = document.getElementById('randomize');

        if (clearButton) {
            clearButton.addEventListener('click', () => {
                this.clear(grid);
                this.updateGrid(grid);
            });
        }

        if (randomizeButton) {
            randomizeButton.addEventListener('click', () => {
                this.randomize(grid);
                this.updateGrid(grid);
            });
        }

        if (toggleStartPause) {
            toggleStartPause.addEventListener('click', () => {

                this.toggleGameState(grid);
            });
        }
    }
}

new Game();