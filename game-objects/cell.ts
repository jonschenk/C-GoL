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

// all possible neighboring directions to the cell
type Direction = "up" | "left" | "right" | "down" | "upleft" | "upright" | "downleft" | "downright";


/**
 * The cell class
 */
class Cell {
  private _row: number;
  private _col: number;
  private _isAlive: boolean;
  private neighbors: Neighbors;

  constructor(row: number, col: number, U: Cell, LU: Cell, RU: Cell, L: Cell, R: Cell, D: Cell, LD: Cell, RD: Cell) {
    this._row = row; // Row of the cell
    this._col = col; // Column of the cell
    this._isAlive = false; // Whether or not the cell is alive
    
    // Assign neighbors directly
    this.neighbors = {
      _up: U,
      _left: L,
      _right: R,
      _down: D,
      _upleft: LU,
      _upright: RU,
      _downleft: LD,
      _downright: RD
    };
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
  getNeighbor(dir): Cell | null {
    return this.neighbors[`_${dir}`] || null;
  }


  /**
   * Counts currently alive neighbors surrounding the cell.
   * 
   * @returns {number} The number of living neighbors
   */
  num_neighbors(): number {
    let count = 0;
    for (let direction in this.neighbors) {
      let neighbor = this.neighbors[direction as Direction];
      if (neighbor && neighbor.getStatus()) {
        count ++;
      }
    }

    return count;
  }
}

export default Cell; // Export the Cell class