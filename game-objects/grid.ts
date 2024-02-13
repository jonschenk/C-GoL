// @author: jonschenk (https://github.com/jonschenk)

import Cell from "./cell";

let _rows = 10; // default value for rows
let _cols = 10; // default value for cols


class Grid {
    constructor(rows: number, cols: number) {
        _rows = rows;
        _cols = cols;
    }

    /**
     * Generates the grid of cells
     */
    generateGrid(): void{
        let grid: Cell[][] = []; //initialize grid

        // loop through the rows
        for (let i = 0; i < _rows; i++) {
            grid[i] = []; // initialize the row
            for (let j = 0; j < _cols; j++) {
                grid[i][j] = new Cell(i, j); // create a new cell and add it to the grid
            }
        }

        this.assignNeighbors(grid); // assign the neighbors to each cell
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
        for (let i = 0; i < _rows; i++) {
            for (let j = 0; j < _cols; j++) {
                let cell = grid[i][j]; // get the current cell
                cell.setNeighbor("up", this.getCell(i - 1, j, grid));
                cell.setNeighbor("down", this.getCell(i + 1, j, grid));
                cell.setNeighbor("left", this.getCell(i, j - 1, grid));
                cell.setNeighbor("right", this.getCell(i, j + 1, grid));
                cell.setNeighbor("upleft", this.getCell(i - 1, j - 1, grid));
                cell.setNeighbor("upright", this.getCell(i - 1, j + 1, grid));
                cell.setNeighbor("downleft", this.getCell(i + 1, j - 1, grid));
                cell.setNeighbor("downright", this.getCell(i + 1, j + 1, grid));
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
     * @returns The cell at the specified row and column or null if the cell does not exist
     */
    getCell(row: number, col: number, grid: Cell[][]): Cell | null {
        if (row >= 0 && row < _rows && col >= 0 && col < _cols) {
            return grid[row][col];
        }
        else {
            return null;
        }
    }


    /**
     * Gets rows
     * 
     * @returns The number of rows in the grid
     */
    getRows(): number {
        return _rows;
    }


    /**
     * Gets cols
     * 
     * @returns The number of columns in the grid
     */
    getCols(): number {
        return _cols;
    }


    /**
     * Sets rows
     * 
     * @param rows // the number of rows
     */
    setRows(rows: number) {
        _rows = rows;
    }


    /**
     * Sets cols
     * 
     * @param cols // the number of columns
     */
    setCols(cols: number) {
        _cols = cols;
    }
}

export default Grid; // export the grid class
