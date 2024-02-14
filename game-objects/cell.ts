// @author: jonschenk (https://github.com/jonschenk)

import Grid from "./grid";

class Cell {
  private isAlive: boolean;
  private willLive: boolean;

  constructor() {
    // Assign the row and column and status of the cell
    this.isAlive = false;
  }


  /**
   * The aliveness of the cell.
   * 
   * @returns Whether or not the cell is alive
   */
  getStatus(): boolean {
    return this.isAlive;
  }


   /**
   * The aliveness of the cell.
   * 
   * @returns Whether or not the cell is alive
   */
   setStatus(status: boolean) {
    this.isAlive = status;
  }


  /**
   * Toggles the state of the cell.
   */
  toggleState() {
    this.isAlive = !this.isAlive;
  }


  willBeAlive(grid: Grid) {
    let result = false;

    let aliveNeighbors = grid.numNeighborsAlive(grid.getRow(this), grid.getCol(this));

    if (this.isAlive) {
      result = (aliveNeighbors === 2 || aliveNeighbors === 3);
    }
    else {
      result = (aliveNeighbors === 3);
    }

    this.willLive = result;
  }

  /**
   * Defines whether or not the cell can live.
   */
  updateStatus(grid: Grid) {
    this.isAlive = this.willLive;
  }
}

export default Cell; // Export the Cell class