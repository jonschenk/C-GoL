// @author: jonschenk (https://github.com/jonschenk)

import Cell from "./cell";

class Grid {
    private rows = 10;
    private cols = 10;

    private grid: Cell[][];

    /**
     * Generates the grid of cells
     */
    generate(): void{
        this.grid = []; //initialize grid

        // loop through the rows
        for (let i = 0; i < this.rows; i++) {
            this.grid[i] = []; // initialize the row
            for (let j = 0; j < this.cols; j++) {
                this.grid[i][j] = new Cell(); // create a new cell and add it to the grid
            }
        }

        this.assignNeighbors(this.grid); // assign the neighbors to each cell
    }


    /**
     * Assigns the neighbors to each cell
     * 
     * @param {*} grid The grid of cells
     * 
     * @returns The grid of cells with neighbors assigned
     */
    assignNeighbors(grid: Cell[][]): Cell[][] {

        // loop through the rows
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let cell = grid[i][j]; // get the current cell
                cell.setNeighbor("up", this.getCell(i - 1, j));
                cell.setNeighbor("down", this.getCell(i + 1, j));
                cell.setNeighbor("left", this.getCell(i, j - 1));
                cell.setNeighbor("right", this.getCell(i, j + 1));
                cell.setNeighbor("upleft", this.getCell(i - 1, j - 1));
                cell.setNeighbor("upright", this.getCell(i - 1, j + 1));
                cell.setNeighbor("downleft", this.getCell(i + 1, j - 1));
                cell.setNeighbor("downright", this.getCell(i + 1, j + 1));
            }
        }

        return grid;
    }


    /**
     * Gets the cell at the specified row and column
     * 
     * @param row // the row
     * @param col // the column
     * @param grid // the grid of cells
     * @returns The cell at the specified row and column
     */
    getCell(row: number, col: number): Cell | null {
        if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
            return null;
        }
        else {
            return this.grid[row][col];
        }
    }


    /**
     * Gets rows
     * 
     * @returns The number of rows in the grid
     */
    getRows(): number {
        return this.rows;
    }


    /**
     * Gets cols
     * 
     * @returns The number of columns in the grid
     */
    getCols(): number {
        return this.cols;
    }


    /**
     * Sets rows
     * 
     * @param rows // the number of rows
     */
    setRows(rows: number) {
        this.rows = rows;
    }


    /**
     * Sets cols
     * 
     * @param cols // the number of columns
     */
    setCols(cols: number) {
        this.cols = cols;
    }


    /**
     * Loops through each cell in the grid and calls the callback function
     * 
     * @param callback // the callback function
     */
    forEachCell(callback: (cell: Cell, row: number, col: number) => void): void {
        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid[row].length; col++) {
                callback(this.grid[row][col], row, col);
            }
        }
    }


    /**
     * Loops through each cell in the grid and calls the callback function
     * 
     * @returns The string representation of the grid
     */
    toString(): string {
        let gridRepresentation = "";
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const cell = this.getCell(i, j); // Change this line
                gridRepresentation += cell && cell.getStatus() ? "X" : "O";
            }
            gridRepresentation += "\n";
        }

        return gridRepresentation;
    }
}

export default Grid; // export the grid class
