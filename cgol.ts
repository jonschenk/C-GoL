// @author: jonschenk (https://github.com/jonschenk)

import Grid from "./game-objects/grid";


class Game {
    constructor() {
        // Create a new grid
        let grid: Grid = new Grid();
        
        // Generate the grid
        grid.generate();

        // Testing
        this.testing(grid);
    }


    testing(grid: Grid | null) {
        let cell = grid?.getCell(0, 0);

        let cell2 = grid?.getCell(5, 2);

        cell?.setStatus(true);
        cell2?.setStatus(true);

        cell?.getNeighbor("down")?.setStatus(true);
        cell?.getNeighbor("downright")?.setStatus(true);

        cell2?.getNeighbor("upleft")?.setStatus(true);

        console.log(grid?.toString());

        let result = cell?.numNeighbors();

        console.log(result); // should be 2

        console.log("run complete!")
    }
}


new Game();