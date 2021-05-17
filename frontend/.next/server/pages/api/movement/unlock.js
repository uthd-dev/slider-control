/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/movement/unlock";
exports.ids = ["pages/api/movement/unlock"];
exports.modules = {

/***/ "./pages/api/movement/unlock.js":
/*!**************************************!*\
  !*** ./pages/api/movement/unlock.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  await fetch(\"http://localhost:3001/api/movement/unlock\").then(response => response.json()).then(data => res.status(200).json(_objectSpread({}, data))).catch(err => {\n    console.log(\"Error unlocking slider motors!\");\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9tb3ZlbWVudC91bmxvY2suanM/ZGYyMCJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQSwrREFBZSxPQUFPQSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDL0IsUUFBTUMsS0FBSyxDQUFDLDJDQUFELENBQUwsQ0FDSEMsSUFERyxDQUNFQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQURkLEVBRUhGLElBRkcsQ0FFRUcsSUFBSSxJQUFJTCxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixtQkFBMEJDLElBQTFCLEVBRlYsRUFHSEUsS0FIRyxDQUdHQyxHQUFHLElBQUk7QUFBRUMsV0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVo7QUFBK0MsR0FIM0QsQ0FBTjtBQUlELENBTEgiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbW92ZW1lbnQvdW5sb2NrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL21vdmVtZW50L3VubG9ja1wiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiByZXMuc3RhdHVzKDIwMCkuanNvbih7IC4uLmRhdGEgfSkpXG4gICAgICAuY2F0Y2goZXJyID0+IHsgY29uc29sZS5sb2coXCJFcnJvciB1bmxvY2tpbmcgc2xpZGVyIG1vdG9ycyFcIikgfSk7XG4gIH07XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/movement/unlock.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/movement/unlock.js"));
module.exports = __webpack_exports__;

})();