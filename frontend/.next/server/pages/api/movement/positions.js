(function() {
var exports = {};
exports.id = "pages/api/movement/positions";
exports.ids = ["pages/api/movement/positions"];
exports.modules = {

/***/ "./pages/api/movement/positions.js":
/*!*****************************************!*\
  !*** ./pages/api/movement/positions.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  await fetch("http://localhost:3001/api/movement/positions").then(response => response.json()).then(data => res.json(_objectSpread({}, data))).catch(err => {
    console.log("Error fetching slider motor positions!");
  });
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/movement/positions.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9tb3ZlbWVudC9wb3NpdGlvbnMuanMiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLCtEQUFlLE9BQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxRQUFNQyxLQUFLLENBQUMsOENBQUQsQ0FBTCxDQUNIQyxJQURHLENBQ0VDLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBRGQsRUFFSEYsSUFGRyxDQUVFRyxJQUFJLElBQUlMLEdBQUcsQ0FBQ0ksSUFBSixtQkFBY0MsSUFBZCxFQUZWLEVBR0hDLEtBSEcsQ0FHR0MsR0FBRyxJQUFJO0FBQUVDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHdDQUFaO0FBQXVELEdBSG5FLENBQU47QUFJRCxDQUxELEUiLCJmaWxlIjoicGFnZXMvYXBpL21vdmVtZW50L3Bvc2l0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvbW92ZW1lbnQvcG9zaXRpb25zXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gcmVzLmpzb24oeyAuLi5kYXRhIH0pKVxuICAgIC5jYXRjaChlcnIgPT4geyBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIHNsaWRlciBtb3RvciBwb3NpdGlvbnMhXCIpIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=