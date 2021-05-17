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
exports.id = "pages/api/movement/positions/slider-position";
exports.ids = ["pages/api/movement/positions/slider-position"];
exports.modules = {

/***/ "./pages/api/movement/positions/slider-position.js":
/*!*********************************************************!*\
  !*** ./pages/api/movement/positions/slider-position.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  await fetch(\"http://localhost:3001/api/movement/positions/slider-position\").then(response => response.json()).then(data => res.json(_objectSpread({}, data))).catch(err => {\n    console.log(\"Error fetching slider motor positions!\");\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9tb3ZlbWVudC9wb3NpdGlvbnMvc2xpZGVyLXBvc2l0aW9uLmpzPzk4YmYiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUEsK0RBQWUsT0FBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU1DLEtBQUssQ0FBQyw4REFBRCxDQUFMLENBQ0hDLElBREcsQ0FDRUMsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQVQsRUFEZCxFQUVIRixJQUZHLENBRUVHLElBQUksSUFBSUwsR0FBRyxDQUFDSSxJQUFKLG1CQUFjQyxJQUFkLEVBRlYsRUFHSEMsS0FIRyxDQUdHQyxHQUFHLElBQUk7QUFBRUMsV0FBTyxDQUFDQyxHQUFSLENBQVksd0NBQVo7QUFBdUQsR0FIbkUsQ0FBTjtBQUlELENBTEQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbW92ZW1lbnQvcG9zaXRpb25zL3NsaWRlci1wb3NpdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvbW92ZW1lbnQvcG9zaXRpb25zL3NsaWRlci1wb3NpdGlvblwiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHJlcy5qc29uKHsgLi4uZGF0YSB9KSlcbiAgICAuY2F0Y2goZXJyID0+IHsgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyBzbGlkZXIgbW90b3IgcG9zaXRpb25zIVwiKSB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/movement/positions/slider-position.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/movement/positions/slider-position.js"));
module.exports = __webpack_exports__;

})();