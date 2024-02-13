// @author: jonschenk (https://github.com/jonschenk)

interface Neighbors {
  _up: Cell | null;
  _left: Cell | null;
  _right: Cell | null;
  _down: Cell | null;
  _upleft: Cell | null;
  _upright: Cell | null;
  _downleft: Cell | null;
  _downright: Cell | null;
}


/**
 * The cell class
 */
class Cell {
  private _isAlive: boolean;
  private neighbors: Neighbors;

  constructor(row: number, col: number) {
      
    // Assign the row and column and status of the cell
    this._isAlive = false;
  }


  /**
   * The aliveness of the cell.
   * 
   * @returns Whether or not the cell is alive
   */
  getStatus(): boolean {
    return this._isAlive;
  }


  /**
   * Gets the neighboring cell in the specified direction.
   * 
   * @param {*} dir The direction of the neighbor
   * 
   * @returns The neighbor in the specified direction or null if there is no neighbor
   */
  getNeighbor(dir: String): Cell | null {
    return this.neighbors[`_${dir}`] || null;
  }


  /**
   * Sets the neighboring cell in the specified direction.
   * 
   * @param {*} dir The direction of the neighbor
   * @param {*} cell The cell to set as the neighbor
   * 
   * @returns The neighbor in the specified direction or null if there is no neighbor
   */
    setNeighbor(dir: String, cell: Cell | null) {
      this.neighbors[`_${dir}`] = cell;
    }


  /**
   * Counts currently alive neighbors surrounding the cell.
   * 
   * @returns {number} The number of living neighbors
   */
  numNeighbors(): number {
    let count = 0;
    for (let direction in this.neighbors) {
      let neighbor = this.neighbors[direction];
      if (neighbor && neighbor.getStatus()) {
        count ++;
      }
    }

    return count;
  }
}

export default Cell; // Export the Cell class