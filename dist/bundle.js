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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_objects_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-objects/grid */ \"./game-objects/grid.ts\");\n// @author: jonschenk (https://github.com/jonschenk)\n\nconsole.log(\"Hello, world!\");\n\n// Create a new grid\nvar grid = new _game_objects_grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n// Generate the grid\ngrid.generate();\n\n// Print the grid to the terminal\nconsole.log(grid.toString());\n\n//# sourceURL=webpack://c-gol/./cgol.ts?");

/***/ }),

/***/ "./game-objects/cell.ts":
/*!******************************!*\
  !*** ./game-objects/cell.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// @author: jonschenk (https://github.com/jonschenk)\n/**\r\n * The cell class\r\n */\nvar Cell = /*#__PURE__*/function () {\n  function Cell() {\n    _classCallCheck(this, Cell);\n    this.neighbors = {\n      up: null,\n      down: null,\n      left: null,\n      right: null,\n      upleft: null,\n      upright: null,\n      downleft: null,\n      downright: null\n    };\n\n    // Assign the row and column and status of the cell\n    this._isAlive = false;\n  }\n\n  /**\r\n   * The aliveness of the cell.\r\n   * \r\n   * @returns Whether or not the cell is alive\r\n   */\n  _createClass(Cell, [{\n    key: \"getStatus\",\n    value: function getStatus() {\n      return this._isAlive;\n    }\n\n    /**\r\n     * Gets the neighboring cell in the specified direction.\r\n     * \r\n     * @param {*} dir The direction of the neighbor\r\n     * \r\n     * @returns The neighbor in the specified direction or null if there is no neighbor\r\n     */\n  }, {\n    key: \"getNeighbor\",\n    value: function getNeighbor(dir) {\n      return this.neighbors[\"_\".concat(dir)] || null;\n    }\n\n    /**\r\n     * Sets the neighboring cell in the specified direction.\r\n     * \r\n     * @param {*} dir The direction of the neighbor\r\n     * @param {*} cell The cell to set as the neighbor\r\n     * \r\n     * @returns The neighbor in the specified direction or null if there is no neighbor\r\n     */\n  }, {\n    key: \"setNeighbor\",\n    value: function setNeighbor(dir, cell) {\n      this.neighbors[\"_\".concat(dir)] = cell;\n    }\n\n    /**\r\n     * Counts currently alive neighbors surrounding the cell.\r\n     * \r\n     * @returns {number} The number of living neighbors\r\n     */\n  }, {\n    key: \"numNeighbors\",\n    value: function numNeighbors() {\n      var count = 0;\n      for (var direction in this.neighbors) {\n        var neighbor = this.neighbors[direction];\n        if (neighbor && neighbor.getStatus()) {\n          count++;\n        }\n      }\n      return count;\n    }\n  }]);\n  return Cell;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell); // Export the Cell class\n\n//# sourceURL=webpack://c-gol/./game-objects/cell.ts?");

/***/ }),

/***/ "./game-objects/grid.ts":
/*!******************************!*\
  !*** ./game-objects/grid.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ \"./game-objects/cell.ts\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// @author: jonschenk (https://github.com/jonschenk)\n\n\nvar _rows = 10; // default value for rows\nvar _cols = 10; // default value for cols\nvar Grid = /*#__PURE__*/function () {\n  function Grid() {\n    _classCallCheck(this, Grid);\n  }\n  _createClass(Grid, [{\n    key: \"generate\",\n    value:\n    /**\r\n     * Generates the grid of cells\r\n     */\n    function generate() {\n      this.grid = []; //initialize grid\n\n      // loop through the rows\n      for (var i = 0; i < _rows; i++) {\n        this.grid[i] = []; // initialize the row\n        for (var j = 0; j < _cols; j++) {\n          this.grid[i][j] = new _cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); // create a new cell and add it to the grid\n        }\n      }\n      this.assignNeighbors(this.grid); // assign the neighbors to each cell\n    }\n\n    /**\r\n     * Assigns the neighbors to each cell\r\n     * \r\n     * @param {*} grid The grid of cells\r\n     * \r\n     * @returns The grid of cells with neighbors assigned\r\n     */\n  }, {\n    key: \"assignNeighbors\",\n    value: function assignNeighbors(grid) {\n      // loop through the rows\n      for (var i = 0; i < _rows; i++) {\n        for (var j = 0; j < _cols; j++) {\n          var cell = grid[i][j]; // get the current cell\n          cell.setNeighbor(\"up\", this.getCell(i - 1, j, grid));\n          cell.setNeighbor(\"down\", this.getCell(i + 1, j, grid));\n          cell.setNeighbor(\"left\", this.getCell(i, j - 1, grid));\n          cell.setNeighbor(\"right\", this.getCell(i, j + 1, grid));\n          cell.setNeighbor(\"upleft\", this.getCell(i - 1, j - 1, grid));\n          cell.setNeighbor(\"upright\", this.getCell(i - 1, j + 1, grid));\n          cell.setNeighbor(\"downleft\", this.getCell(i + 1, j - 1, grid));\n          cell.setNeighbor(\"downright\", this.getCell(i + 1, j + 1, grid));\n        }\n      }\n      return grid;\n    }\n\n    /**\r\n     * Gets the cell at the specified row and column\r\n     * \r\n     * @param row // the row\r\n     * @param col // the column\r\n     * @param grid // the grid of cells\r\n     * @returns The cell at the specified row and column or null if the cell does not exist\r\n     */\n  }, {\n    key: \"getCell\",\n    value: function getCell(row, col, grid) {\n      if (row >= 0 && row < _rows && col >= 0 && col < _cols) {\n        return grid[row][col];\n      } else {\n        return null;\n      }\n    }\n\n    /**\r\n     * Gets rows\r\n     * \r\n     * @returns The number of rows in the grid\r\n     */\n  }, {\n    key: \"getRows\",\n    value: function getRows() {\n      return _rows;\n    }\n\n    /**\r\n     * Gets cols\r\n     * \r\n     * @returns The number of columns in the grid\r\n     */\n  }, {\n    key: \"getCols\",\n    value: function getCols() {\n      return _cols;\n    }\n\n    /**\r\n     * Sets rows\r\n     * \r\n     * @param rows // the number of rows\r\n     */\n  }, {\n    key: \"setRows\",\n    value: function setRows(rows) {\n      _rows = rows;\n    }\n\n    /**\r\n     * Sets cols\r\n     * \r\n     * @param cols // the number of columns\r\n     */\n  }, {\n    key: \"setCols\",\n    value: function setCols(cols) {\n      _cols = cols;\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      var gridRepresentation = \"\";\n      for (var i = 0; i < _rows; i++) {\n        for (var j = 0; j < _cols; j++) {\n          var cell = this.getCell(i, j, this.grid); // Change this line\n          gridRepresentation += cell && cell.getStatus() ? \"X\" : \"O\";\n        }\n        gridRepresentation += \"\\n\";\n      }\n      return gridRepresentation;\n    }\n  }]);\n  return Grid;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid); // export the grid class\n\n//# sourceURL=webpack://c-gol/./game-objects/grid.ts?");

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