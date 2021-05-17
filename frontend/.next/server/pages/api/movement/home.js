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
exports.id = "pages/api/movement/home";
exports.ids = ["pages/api/movement/home"];
exports.modules = {

/***/ "./pages/api/movement/home.js":
/*!************************************!*\
  !*** ./pages/api/movement/home.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  await fetch(\"http://localhost:3001/api/movement/home\").then(response => response.json()).then(data => res.status(200).json(_objectSpread({}, data))).catch(err => {\n    console.log(\"Error moving slider to home position!\");\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9tb3ZlbWVudC9ob21lLmpzPzViZjEiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUEsK0RBQWUsT0FBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLFFBQU1DLEtBQUssQ0FBQyx5Q0FBRCxDQUFMLENBQ0hDLElBREcsQ0FDRUMsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQVQsRUFEZCxFQUVIRixJQUZHLENBRUVHLElBQUksSUFBSUwsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsbUJBQTBCQyxJQUExQixFQUZWLEVBR0hFLEtBSEcsQ0FHR0MsR0FBRyxJQUFJO0FBQUVDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHVDQUFaO0FBQXNELEdBSGxFLENBQU47QUFJRCxDQUxIIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL21vdmVtZW50L2hvbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvbW92ZW1lbnQvaG9tZVwiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiByZXMuc3RhdHVzKDIwMCkuanNvbih7IC4uLmRhdGEgfSkpXG4gICAgICAuY2F0Y2goZXJyID0+IHsgY29uc29sZS5sb2coXCJFcnJvciBtb3Zpbmcgc2xpZGVyIHRvIGhvbWUgcG9zaXRpb24hXCIpIH0pO1xuICB9O1xuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/movement/home.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/movement/home.js"));
module.exports = __webpack_exports__;

})();