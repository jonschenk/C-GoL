// @author: jonschenk (https://github.com/jonschenk)

import Cell from "./cell";

class Grid {
    private rows = 50;
    private cols = 100;

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
    }


    /**
     * Gets the cell's neighbors
     * 
     * @param cell The given cell
     * @returns an array of neighboring cells
     */
    getNeighbors(cell: Cell): Cell[] {
        let neighbors: Cell[] = [];
        let row = this.getRow(cell);
        let col = this.getCol(cell);

        // loop through the rows
        for (let i = -1; i <= 1; i++) {
            // loop through the columns
            for (let j = -1; j <= 1; j++) {
                // if the cell is the current cell, skip it
                if (i === 0 && j === 0) {
                    continue;
                }

                // get the neighbor
                let neighbor = this.getCell(row + i, col + j);

                // if the neighbor is valid, add it to the list of neighbors
                if (neighbor) {
                    neighbors.push(neighbor);
                }
            }
        }

        return neighbors;
    }


    getCol(cell: Cell): number {
        let col = -1;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.grid[i][j] === cell) {
                    col = j;
                }
            }
        }

        return col;
    }


    getRow(cell: Cell): number {
        let row = -1;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.grid[i][j] === cell) {
                    row = i;
                }
            }
        }

        return row;
    }


    /**
     * Counts currently alive neighbors surrounding the cell.
     * 
     * @param {*} row The row of the cell
     * @param {*} col The column of the cell
     * @returns {number} The number of living neighbors
     */
    numNeighborsAlive(row: number, col: number): number {
        let count = 0;
        let cell = this.getCell(row, col);

        if (!cell) {
            return 0;
        }

        let neighbors = this.getNeighbors(cell);
        for (let neighbor of neighbors) {
            if (neighbor.getStatus()) {
                count++;
            }
        }
    
        return count;
    }


    isInBounds(row: number, col: number): boolean {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
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
