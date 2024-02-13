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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_objects_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-objects/grid */ \"./game-objects/grid.ts\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// @author: jonschenk (https://github.com/jonschenk)\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    var _this = this;\n    _classCallCheck(this, Game);\n    _defineProperty(this, \"speed\", 500);\n    // Create a new grid\n    var grid = new _game_objects_grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    // Generate the grid\n    grid.generate();\n    this.testing(grid);\n\n    // Testing\n    setInterval(function () {\n      return _this.updateGrid(grid);\n    }, this.speed);\n  }\n  _createClass(Game, [{\n    key: \"updateGrid\",\n    value: function updateGrid(grid) {\n      var rows = grid.getRows();\n      var cols = grid.getCols();\n      var gridDiv = document.getElementById(\"grid\");\n      if (!gridDiv) return;\n      gridDiv.innerHTML = '';\n\n      // create new table\n      var table = document.createElement('table');\n      table.style.borderCollapse = 'collapse';\n      for (var i = 0; i < rows; i++) {\n        var row = document.createElement('tr');\n        for (var j = 0; j < cols; j++) {\n          var _grid$getCell;\n          var _cell = document.createElement('td');\n\n          // Style the cell as a square\n          _cell.style.width = '20px';\n          _cell.style.height = '20px';\n          _cell.style.border = '1px solid black';\n\n          // Set the cell's background color based on its status\n          _cell.style.backgroundColor = (_grid$getCell = grid.getCell(i, j)) !== null && _grid$getCell !== void 0 && _grid$getCell.getStatus() ? 'black' : 'white';\n          row.appendChild(_cell);\n        }\n        table.appendChild(row);\n      }\n\n      //TESTING\n      var cell = grid === null || grid === void 0 ? void 0 : grid.getCell(0, 0);\n      if ((cell === null || cell === void 0 ? void 0 : cell.getStatus()) === true) {\n        cell.setStatus(false);\n      } else {\n        cell === null || cell === void 0 || cell.setStatus(true);\n      }\n      gridDiv.appendChild(table);\n    }\n  }, {\n    key: \"testing\",\n    value: function testing(grid) {\n      var _cell$getNeighbor, _cell$getNeighbor2, _cell2$getNeighbor;\n      var cell = grid === null || grid === void 0 ? void 0 : grid.getCell(0, 0);\n      var cell2 = grid === null || grid === void 0 ? void 0 : grid.getCell(5, 2);\n      cell === null || cell === void 0 || cell.setStatus(true);\n      cell2 === null || cell2 === void 0 || cell2.setStatus(true);\n      cell === null || cell === void 0 || (_cell$getNeighbor = cell.getNeighbor(\"down\")) === null || _cell$getNeighbor === void 0 || _cell$getNeighbor.setStatus(true);\n      cell === null || cell === void 0 || (_cell$getNeighbor2 = cell.getNeighbor(\"downright\")) === null || _cell$getNeighbor2 === void 0 || _cell$getNeighbor2.setStatus(true);\n      cell2 === null || cell2 === void 0 || (_cell2$getNeighbor = cell2.getNeighbor(\"upleft\")) === null || _cell2$getNeighbor === void 0 || _cell2$getNeighbor.setStatus(true);\n      console.log(grid === null || grid === void 0 ? void 0 : grid.toString());\n      var result = cell === null || cell === void 0 ? void 0 : cell.numNeighbors();\n      console.log(result); // should be 2\n\n      console.log(\"run completeeee!\");\n    }\n  }]);\n  return Game;\n}();\nnew Game();\n\n//# sourceURL=webpack://c-gol/./cgol.ts?");

/***/ }),

/***/ "./game-objects/cell.ts":
/*!******************************!*\
  !*** ./game-objects/cell.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// @author: jonschenk (https://github.com/jonschenk)\nvar Cell = /*#__PURE__*/function () {\n  function Cell() {\n    _classCallCheck(this, Cell);\n    this.neighbors = {\n      up: null,\n      down: null,\n      left: null,\n      right: null,\n      upleft: null,\n      upright: null,\n      downleft: null,\n      downright: null\n    };\n\n    // Assign the row and column and status of the cell\n    this._isAlive = false;\n  }\n\n  /**\r\n   * The aliveness of the cell.\r\n   * \r\n   * @returns Whether or not the cell is alive\r\n   */\n  _createClass(Cell, [{\n    key: \"getStatus\",\n    value: function getStatus() {\n      return this._isAlive;\n    }\n\n    /**\r\n    * The aliveness of the cell.\r\n    * \r\n    * @returns Whether or not the cell is alive\r\n    */\n  }, {\n    key: \"setStatus\",\n    value: function setStatus(status) {\n      this._isAlive = status;\n    }\n\n    /**\r\n     * Gets the neighboring cell in the specified direction.\r\n     * \r\n     * @param {*} dir The direction of the neighbor\r\n     * \r\n     * @returns The neighbor in the specified direction or null if there is no neighbor\r\n     */\n  }, {\n    key: \"getNeighbor\",\n    value: function getNeighbor(dir) {\n      return this.neighbors[\"_\".concat(dir)] || null;\n    }\n\n    /**\r\n     * Sets the neighboring cell in the specified direction.\r\n     * \r\n     * @param {*} dir The direction of the neighbor\r\n     * @param {*} cell The cell to set as the neighbor\r\n     * \r\n     * @returns The neighbor in the specified direction or null if there is no neighbor\r\n     */\n  }, {\n    key: \"setNeighbor\",\n    value: function setNeighbor(dir, cell) {\n      this.neighbors[\"_\".concat(dir)] = cell;\n    }\n\n    /**\r\n     * Counts currently alive neighbors surrounding the cell.\r\n     * \r\n     * @returns {number} The number of living neighbors\r\n     */\n  }, {\n    key: \"numNeighbors\",\n    value: function numNeighbors() {\n      var count = 0;\n      for (var direction in this.neighbors) {\n        var neighbor = this.neighbors[direction];\n        if (neighbor && neighbor.getStatus()) {\n          count++;\n        }\n      }\n      return count;\n    }\n  }]);\n  return Cell;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell); // Export the Cell class\n\n//# sourceURL=webpack://c-gol/./game-objects/cell.ts?");

/***/ }),

/***/ "./game-objects/grid.ts":
/*!******************************!*\
  !*** ./game-objects/grid.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ \"./game-objects/cell.ts\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// @author: jonschenk (https://github.com/jonschenk)\n\n\nvar _rows = 10; // default value for rows\nvar _cols = 10; // default value for cols\nvar Grid = /*#__PURE__*/function () {\n  function Grid() {\n    _classCallCheck(this, Grid);\n  }\n  _createClass(Grid, [{\n    key: \"generate\",\n    value:\n    /**\r\n     * Generates the grid of cells\r\n     */\n    function generate() {\n      this.grid = []; //initialize grid\n\n      // loop through the rows\n      for (var i = 0; i < _rows; i++) {\n        this.grid[i] = []; // initialize the row\n        for (var j = 0; j < _cols; j++) {\n          this.grid[i][j] = new _cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); // create a new cell and add it to the grid\n        }\n      }\n      this.assignNeighbors(this.grid); // assign the neighbors to each cell\n    }\n\n    /**\r\n     * Assigns the neighbors to each cell\r\n     * \r\n     * @param {*} grid The grid of cells\r\n     * \r\n     * @returns The grid of cells with neighbors assigned\r\n     */\n  }, {\n    key: \"assignNeighbors\",\n    value: function assignNeighbors(grid) {\n      // loop through the rows\n      for (var i = 0; i < _rows; i++) {\n        for (var j = 0; j < _cols; j++) {\n          var cell = grid[i][j]; // get the current cell\n          cell.setNeighbor(\"up\", this.getCell(i - 1, j));\n          cell.setNeighbor(\"down\", this.getCell(i + 1, j));\n          cell.setNeighbor(\"left\", this.getCell(i, j - 1));\n          cell.setNeighbor(\"right\", this.getCell(i, j + 1));\n          cell.setNeighbor(\"upleft\", this.getCell(i - 1, j - 1));\n          cell.setNeighbor(\"upright\", this.getCell(i - 1, j + 1));\n          cell.setNeighbor(\"downleft\", this.getCell(i + 1, j - 1));\n          cell.setNeighbor(\"downright\", this.getCell(i + 1, j + 1));\n        }\n      }\n      return grid;\n    }\n\n    /**\r\n     * Gets the cell at the specified row and column\r\n     * \r\n     * @param row // the row\r\n     * @param col // the column\r\n     * @param grid // the grid of cells\r\n     * @returns The cell at the specified row and column\r\n     */\n  }, {\n    key: \"getCell\",\n    value: function getCell(row, col) {\n      if (row >= 0 && row < this.grid.length && col >= 0 && col < (this.grid[row] ? this.grid[row].length : 0)) {\n        return this.grid[row][col];\n      } else {\n        return null;\n      }\n    }\n\n    /**\r\n     * Gets rows\r\n     * \r\n     * @returns The number of rows in the grid\r\n     */\n  }, {\n    key: \"getRows\",\n    value: function getRows() {\n      return _rows;\n    }\n\n    /**\r\n     * Gets cols\r\n     * \r\n     * @returns The number of columns in the grid\r\n     */\n  }, {\n    key: \"getCols\",\n    value: function getCols() {\n      return _cols;\n    }\n\n    /**\r\n     * Sets rows\r\n     * \r\n     * @param rows // the number of rows\r\n     */\n  }, {\n    key: \"setRows\",\n    value: function setRows(rows) {\n      _rows = rows;\n    }\n\n    /**\r\n     * Sets cols\r\n     * \r\n     * @param cols // the number of columns\r\n     */\n  }, {\n    key: \"setCols\",\n    value: function setCols(cols) {\n      _cols = cols;\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      var gridRepresentation = \"\";\n      for (var i = 0; i < _rows; i++) {\n        for (var j = 0; j < _cols; j++) {\n          var cell = this.getCell(i, j); // Change this line\n          gridRepresentation += cell && cell.getStatus() ? \"X\" : \"O\";\n        }\n        gridRepresentation += \"\\n\";\n      }\n      return gridRepresentation;\n    }\n  }]);\n  return Grid;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid); // export the grid class\n\n//# sourceURL=webpack://c-gol/./game-objects/grid.ts?");

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