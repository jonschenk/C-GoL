// @author: jonschenk (https://github.com/jonschenk)
import Grid from "./game-objects/grid";

console.log("Hello, world!");

// Create a new grid
let grid = new Grid();

// Generate the grid
grid.generate();

// Print the grid to the terminal
console.log(grid.toString());