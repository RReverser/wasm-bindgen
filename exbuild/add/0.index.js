(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./add.js":
/*!****************!*\
  !*** ./add.js ***!
  \****************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony import */ var _add_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_bg */ \"./add_bg.wasm\");\n/* tslint:disable */\n\n\n/**\n* @param {number} arg0\n* @param {number} arg1\n* @returns {number}\n*/\nfunction add(arg0, arg1) {\n    return _add_bg__WEBPACK_IMPORTED_MODULE_0__[\"add\"](arg0, arg1);\n}\n\n\n\n//# sourceURL=webpack:///./add.js?");

/***/ }),

/***/ "./add_bg.wasm":
/*!*********************!*\
  !*** ./add_bg.wasm ***!
  \*********************/
/*! exports provided: memory, add */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./add_bg.wasm?");

/***/ })

}]);