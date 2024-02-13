"use strict";
// @author: jonschenk (https://github.com/jonschenk)
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The cell class
 */
var Cell = /** @class */ (function () {
    function Cell(row, col) {
        // Assign the row and column and status of the cell
        this._isAlive = false;
    }
    /**
     * The aliveness of the cell.
     *
     * @returns Whether or not the cell is alive
     */
    Cell.prototype.getStatus = function () {
        return this._isAlive;
    };
    /**
     * Gets the neighboring cell in the specified direction.
     *
     * @param {*} dir The direction of the neighbor
     *
     * @returns The neighbor in the specified direction or null if there is no neighbor
     */
    Cell.prototype.getNeighbor = function (dir) {
        return this.neighbors["_".concat(dir)] || null;
    };
    /**
     * Sets the neighboring cell in the specified direction.
     *
     * @param {*} dir The direction of the neighbor
     * @param {*} cell The cell to set as the neighbor
     *
     * @returns The neighbor in the specified direction or null if there is no neighbor
     */
    Cell.prototype.setNeighbor = function (dir, cell) {
        this.neighbors["_".concat(dir)] = cell;
    };
    /**
     * Counts currently alive neighbors surrounding the cell.
     *
     * @returns {number} The number of living neighbors
     */
    Cell.prototype.numNeighbors = function () {
        var count = 0;
        for (var direction in this.neighbors) {
            var neighbor = this.neighbors[direction];
            if (neighbor && neighbor.getStatus()) {
                count++;
            }
        }
        return count;
    };
    return Cell;
}());
exports.default = Cell; // Export the Cell class
