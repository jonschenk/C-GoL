"use strict";
// @author: jonschenk (https://github.com/jonschenk)
Object.defineProperty(exports, "__esModule", { value: true });
var cell_1 = require("./cell");
var _rows = 10; // default value for rows
var _cols = 10; // default value for cols
var Grid = /** @class */ (function () {
    function Grid() {
    }
    /**
     * Generates the grid of cells
     */
    Grid.prototype.generate = function () {
        var grid = []; //initialize grid
        // loop through the rows
        for (var i = 0; i < _rows; i++) {
            grid[i] = []; // initialize the row
            for (var j = 0; j < _cols; j++) {
                grid[i][j] = new cell_1.default(i, j); // create a new cell and add it to the grid
            }
        }
        this.assignNeighbors(grid); // assign the neighbors to each cell
    };
    /**
     * Assigns the neighbors to each cell
     *
     * @param {*} grid The grid of cells
     *
     * @returns The grid of cells with neighbors assigned
     */
    Grid.prototype.assignNeighbors = function (grid) {
        // loop through the rows
        for (var i = 0; i < _rows; i++) {
            for (var j = 0; j < _cols; j++) {
                var cell = grid[i][j]; // get the current cell
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
    };
    /**
     * Gets the cell at the specified row and column
     *
     * @param row // the row
     * @param col // the column
     * @param grid // the grid of cells
     * @returns The cell at the specified row and column or null if the cell does not exist
     */
    Grid.prototype.getCell = function (row, col, grid) {
        if (row >= 0 && row < _rows && col >= 0 && col < _cols) {
            return grid[row][col];
        }
        else {
            return null;
        }
    };
    /**
     * Gets rows
     *
     * @returns The number of rows in the grid
     */
    Grid.prototype.getRows = function () {
        return _rows;
    };
    /**
     * Gets cols
     *
     * @returns The number of columns in the grid
     */
    Grid.prototype.getCols = function () {
        return _cols;
    };
    /**
     * Sets rows
     *
     * @param rows // the number of rows
     */
    Grid.prototype.setRows = function (rows) {
        _rows = rows;
    };
    /**
     * Sets cols
     *
     * @param cols // the number of columns
     */
    Grid.prototype.setCols = function (cols) {
        _cols = cols;
    };
    Grid.prototype.toString = function () {
        return "Grid";
    };
    return Grid;
}());
exports.default = Grid; // export the grid class
