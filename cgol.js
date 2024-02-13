"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @author: jonschenk (https://github.com/jonschenk)
var grid_1 = require("./game-objects/grid");
var Game = /** @class */ (function () {
    function Game(rows, cols) {
        this.grid = new grid_1.default();
    }
    Game.prototype.test = function () {
        var grid = new grid_1.default();
        grid.generate();
        return grid.toString();
    };
    return Game;
}());
