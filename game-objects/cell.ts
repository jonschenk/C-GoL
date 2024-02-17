// @author: jonschenk (https://github.com/jonschenk)

import Grid from "./grid";

class Cell {
  private isAlive: boolean;
  private willLive: boolean;
  private row: number;
  private col: number;

  constructor(row: number, col: number) {
    // Assign the row and column and status of the cell
    this.isAlive = false;
    this.row = row;
    this.col = col;
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
   * The row of the cell.
   * 
   * @returns The row of the cell
   */
  getRow(): number {
    return this.row;
  }


  /**
   * Sets the row of the cell.
   * 
   * @param row The row of the cell
   */
  setRow(row: number) {
    this.row = row;
  }


  /**
   * The column of the cell.
   * 
   * @returns The column of the cell
   */
  getCol(): number {
    return this.col;
  }


  /**
   * Sets the column of the cell.
   * 
   * @param col The column of the cell
   */
  setCol(col: number) {
    this.col = col;
  }


  /**
   * Toggles the state of the cell.
   */
  toggleState() {
    this.isAlive = !this.isAlive;
  }


  /**
   * The future state of the cell.
   * 
   * @returns Whether or not the cell will be alive in the next generation
   */
  futureState() {
    return this.willLive;
  }


  /**
   * Determines whether or not the cell will be alive in the next generation.
   * 
   * @param grid The grid of cells
   */
  willBeAlive(grid: Grid) {
    let result = false;

    let aliveNeighbors = grid.numNeighborsAlive(this.row, this.col);

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