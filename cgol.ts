// @author: jonschenk (https://github.com/jonschenk)
import Grid from "./game-objects/grid";

// Create a new grid
let grid = new Grid();

// Generate the grid
grid.generate();

grid.getCell(0, 0).setStatus = true;

// Print the grid to the terminal
console.log(grid.toString());