/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cgol.ts":
/*!*****************!*\
  !*** ./cgol.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_objects_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-objects/grid */ \"./game-objects/grid.ts\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// @author: jonschenk (https://github.com/jonschenk)\n\n\nvar Game = /*#__PURE__*/function () {\n  // default game speed\n  function Game() {\n    var _this = this;\n    _classCallCheck(this, Game);\n    _defineProperty(this, \"gameSpeed\", 2000);\n    // Create a new grid\n    var grid = new _game_objects_grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, 10);\n\n    // Generate the grid\n    grid.generate();\n    this.testing(grid);\n    this.updateGrid(grid);\n    setInterval(function () {\n      grid.forEachCell(function (cell) {\n        return cell.updateStatus();\n      });\n      _this.updateGrid(grid);\n    }, this.gameSpeed);\n  }\n  _createClass(Game, [{\n    key: \"updateGrid\",\n    value: function updateGrid(grid) {\n      var rows = grid.getRows();\n      var cols = grid.getCols();\n      var gridDiv = document.getElementById(\"grid\");\n      if (!gridDiv) return;\n      gridDiv.innerHTML = '';\n\n      // create new table\n      var table = document.createElement('table');\n      table.style.borderCollapse = 'collapse';\n      var squareSize = Math.floor(gridDiv.clientWidth / cols) / 5;\n      var _loop = function _loop(i) {\n        var row = document.createElement('tr');\n        var _loop2 = function _loop2(j) {\n          var _grid$getCell, _grid$getCell2;\n          var cell = document.createElement('td');\n\n          // Style the cell as a square\n          cell.style.width = \"\".concat(squareSize, \"px\");\n          cell.style.height = \"\".concat(squareSize, \"px\");\n          cell.style.border = '1px solid black';\n\n          // Set the cell's background color based on its status\n          cell.style.backgroundColor = (_grid$getCell = grid.getCell(i, j)) !== null && _grid$getCell !== void 0 && _grid$getCell.getStatus() ? 'black' : 'white';\n          (_grid$getCell2 = grid.getCell(i, j)) === null || _grid$getCell2 === void 0 || _grid$getCell2.updateStatus();\n          cell.addEventListener('click', function () {\n            var _grid$getCell3, _grid$getCell4;\n            (_grid$getCell3 = grid.getCell(i, j)) === null || _grid$getCell3 === void 0 || _grid$getCell3.toggleState();\n            cell.style.backgroundColor = (_grid$getCell4 = grid.getCell(i, j)) !== null && _grid$getCell4 !== void 0 && _grid$getCell4.getStatus() ? 'black' : 'white';\n          });\n          row.appendChild(cell);\n        };\n        for (var j = 0; j < cols - 1; j++) {\n          _loop2(j);\n        }\n        table.appendChild(row);\n      };\n      for (var i = 0; i < rows - 1; i++) {\n        _loop(i);\n      }\n      var cell3 = grid === null || grid === void 0 ? void 0 : grid.getCell(3, 3); // TEMP\n      console.log(cell3 === null || cell3 === void 0 ? void 0 : cell3.getStatus()); // TEMP\n\n      gridDiv.appendChild(table);\n    }\n  }, {\n    key: \"testing\",\n    value: function testing(grid) {\n      var cell = grid === null || grid === void 0 ? void 0 : grid.getCell(2, 2);\n      var cell1 = grid === null || grid === void 0 ? void 0 : grid.getCell(3, 2);\n      var cell2 = grid === null || grid === void 0 ? void 0 : grid.getCell(4, 2);\n      var cell3 = grid === null || grid === void 0 ? void 0 : grid.getCell(3, 3);\n      cell === null || cell === void 0 || cell.setStatus(true);\n      cell1 === null || cell1 === void 0 || cell1.setStatus(true);\n      cell2 === null || cell2 === void 0 || cell2.setStatus(true);\n      var num = cell3 === null || cell3 === void 0 ? void 0 : cell3.numNeighbors();\n      console.log(num);\n      console.log(cell3 === null || cell3 === void 0 ? void 0 : cell3.getStatus());\n    }\n  }]);\n  return Game;\n}();\nnew Game();\n\n//# sourceURL=webpack://c-gol/./cgol.ts?");

/***/ }),

/***/ "./game-objects/cell.ts":
/*!******************************!*\
  !*** ./game-objects/cell.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// @author: jonschenk (https://github.com/jonschenk)\nvar Cell = /*#__PURE__*/function () {\n  function Cell() {\n    _classCallCheck(this, Cell);\n    this.neighbors = {\n      up: null,\n      down: null,\n      left: null,\n      right: null,\n      upleft: null,\n      upright: null,\n      downleft: null,\n      downright: null\n    };\n\n    // Assign the row and column and status of the cell\n    this._isAlive = false;\n  }\n\n  /**\n   * The aliveness of the cell.\n   * \n   * @returns Whether or not the cell is alive\n   */\n  _createClass(Cell, [{\n    key: \"getStatus\",\n    value: function getStatus() {\n      return this._isAlive;\n    }\n\n    /**\n    * The aliveness of the cell.\n    * \n    * @returns Whether or not the cell is alive\n    */\n  }, {\n    key: \"setStatus\",\n    value: function setStatus(status) {\n      this._isAlive = status;\n    }\n\n    /**\n     * Toggles the state of the cell.\n     */\n  }, {\n    key: \"toggleState\",\n    value: function toggleState() {\n      this._isAlive = !this._isAlive;\n    }\n\n    /**\n     * Gets the neighboring cell in the specified direction.\n     * \n     * @param {*} dir The direction of the neighbor\n     * \n     * @returns The neighbor in the specified direction or null if there is no neighbor\n     */\n  }, {\n    key: \"getNeighbor\",\n    value: function getNeighbor(dir) {\n      return this.neighbors[\"_\".concat(dir)] || null;\n    }\n\n    /**\n     * Sets the neighboring cell in the specified direction.\n     * \n     * @param {*} dir The direction of the neighbor\n     * @param {*} cell The cell to set as the neighbor\n     * \n     * @returns The neighbor in the specified direction or null if there is no neighbor\n     */\n  }, {\n    key: \"setNeighbor\",\n    value: function setNeighbor(dir, cell) {\n      this.neighbors[\"_\".concat(dir)] = cell;\n    }\n\n    /**\n     * Counts currently alive neighbors surrounding the cell.\n     * \n     * @returns {number} The number of living neighbors\n     */\n  }, {\n    key: \"numNeighbors\",\n    value: function numNeighbors() {\n      var count = 0;\n      for (var direction in this.neighbors) {\n        var neighbor = this.neighbors[direction];\n        if (neighbor !== null && neighbor !== void 0 && neighbor.getStatus()) {\n          count++;\n        }\n      }\n      return count;\n    }\n\n    /**\n     * Defines whether or not the cell can live.\n     */\n  }, {\n    key: \"updateStatus\",\n    value: function updateStatus() {\n      var numNeighbors = this.numNeighbors();\n      if (this._isAlive) {\n        this._isAlive = numNeighbors === 2 || numNeighbors === 3;\n      } else {\n        this._isAlive = numNeighbors === 3;\n      }\n    }\n  }]);\n  return Cell;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell); // Export the Cell class\n\n//# sourceURL=webpack://c-gol/./game-objects/cell.ts?");

/***/ }),

/***/ "./game-objects/grid.ts":
/*!******************************!*\
  !*** ./game-objects/grid.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ \"./game-objects/cell.ts\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// @author: jonschenk (https://github.com/jonschenk)\n\n\nvar Grid = /*#__PURE__*/function () {\n  function Grid(rows, cols) {\n    _classCallCheck(this, Grid);\n    this.grid = Array(rows).fill(null).map(function () {\n      return Array(cols).fill(null);\n    });\n    this.rows = rows;\n    this.cols = cols;\n  }\n\n  /**\n   * Generates the grid of cells\n   */\n  _createClass(Grid, [{\n    key: \"generate\",\n    value: function generate() {\n      this.grid = []; //initialize grid\n\n      // loop through the rows\n      for (var i = 0; i < this.rows; i++) {\n        this.grid[i] = []; // initialize the row\n        for (var j = 0; j < this.cols; j++) {\n          this.grid[i][j] = new _cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); // create a new cell and add it to the grid\n        }\n      }\n      this.assignNeighbors(this.grid); // assign the neighbors to each cell\n    }\n\n    /**\n     * Assigns the neighbors to each cell\n     * \n     * @param {*} grid The grid of cells\n     * \n     * @returns The grid of cells with neighbors assigned\n     */\n  }, {\n    key: \"assignNeighbors\",\n    value: function assignNeighbors(grid) {\n      // loop through the rows\n      for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.cols; j++) {\n          var _cell = grid[i][j]; // get the current cell\n          _cell.setNeighbor(\"up\", this.getCell(i - 1, j));\n          _cell.setNeighbor(\"down\", this.getCell(i + 1, j));\n          _cell.setNeighbor(\"left\", this.getCell(i, j - 1));\n          _cell.setNeighbor(\"right\", this.getCell(i, j + 1));\n          _cell.setNeighbor(\"upleft\", this.getCell(i - 1, j - 1));\n          _cell.setNeighbor(\"upright\", this.getCell(i - 1, j + 1));\n          _cell.setNeighbor(\"downleft\", this.getCell(i + 1, j - 1));\n          _cell.setNeighbor(\"downright\", this.getCell(i + 1, j + 1));\n        }\n      }\n      return grid;\n    }\n\n    /**\n     * Gets the cell at the specified row and column\n     * \n     * @param row // the row\n     * @param col // the column\n     * @param grid // the grid of cells\n     * @returns The cell at the specified row and column\n     */\n  }, {\n    key: \"getCell\",\n    value: function getCell(row, col) {\n      return this.grid[row][col];\n    }\n\n    /**\n     * Gets rows\n     * \n     * @returns The number of rows in the grid\n     */\n  }, {\n    key: \"getRows\",\n    value: function getRows() {\n      return this.rows;\n    }\n\n    /**\n     * Gets cols\n     * \n     * @returns The number of columns in the grid\n     */\n  }, {\n    key: \"getCols\",\n    value: function getCols() {\n      return this.cols;\n    }\n\n    /**\n     * Sets rows\n     * \n     * @param rows // the number of rows\n     */\n  }, {\n    key: \"setRows\",\n    value: function setRows(rows) {\n      this.rows = rows;\n    }\n\n    /**\n     * Sets cols\n     * \n     * @param cols // the number of columns\n     */\n  }, {\n    key: \"setCols\",\n    value: function setCols(cols) {\n      this.cols = cols;\n    }\n  }, {\n    key: \"forEachCell\",\n    value: function forEachCell(action) {\n      for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.cols; j++) {\n          action(this.getCell(i, j));\n        }\n      }\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      var gridRepresentation = \"\";\n      for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.cols; j++) {\n          var _cell2 = this.getCell(i, j); // Change this line\n          gridRepresentation += _cell2 && _cell2.getStatus() ? \"X\" : \"O\";\n        }\n        gridRepresentation += \"\\n\";\n      }\n      return gridRepresentation;\n    }\n  }]);\n  return Grid;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid); // export the grid class\n\n//# sourceURL=webpack://c-gol/./game-objects/grid.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./cgol.ts");
/******/ 	
/******/ })()
;