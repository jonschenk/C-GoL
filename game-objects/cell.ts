// @author: jonschenk (https://github.com/jonschenk)

class Cell {
  private neighbors: { [key: string]: Cell | null };
  private _isAlive: boolean;

  constructor() {
      this.neighbors = {
      up: null,
      down: null,
      left: null,
      right: null,
      upleft: null,
      upright: null,
      downleft: null,
      downright: null
  };
      
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
   * The aliveness of the cell.
   * 
   * @returns Whether or not the cell is alive
   */
   setStatus(status: boolean) {
    this._isAlive = status;
  }


  /**
   * Toggles the state of the cell.
   */
  toggleState() {
    this._isAlive = !this._isAlive;
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
      if (neighbor?.getStatus()) {
        count ++;
      }
    }

    return count;
  }


  /**
   * Defines whether or not the cell can live.
   */
  updateStatus() {
    let numNeighbors = this.numNeighbors();

    if (this._isAlive) {
      this._isAlive = numNeighbors === 2 || numNeighbors === 3;
    } 
    else {
      this._isAlive = numNeighbors === 3;
    }
  }
}

export default Cell; // Export the Cell class