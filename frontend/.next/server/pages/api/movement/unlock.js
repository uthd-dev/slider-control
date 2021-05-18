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
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  await fetch("http://localhost:3001/api/movement/unlock").then(response => response.json()).then(data => res.status(200).json(_objectSpread({}, data))).catch(err => {
    console.log("Error unlocking slider motors!");
    res.status(500).end("Internal Server Error");
  });
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9tb3ZlbWVudC91bmxvY2suanMiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLCtEQUFlLE9BQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxRQUFNQyxLQUFLLENBQUMsMkNBQUQsQ0FBTCxDQUNIQyxJQURHLENBQ0VDLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBRGQsRUFFSEYsSUFGRyxDQUVFRyxJQUFJLElBQUlMLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLG1CQUEwQkMsSUFBMUIsRUFGVixFQUdIRSxLQUhHLENBR0dDLEdBQUcsSUFBSTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBVixPQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCSyxHQUFoQixDQUFvQix1QkFBcEI7QUFDRCxHQU5HLENBQU47QUFPRCxDQVJELEUiLCJmaWxlIjoicGFnZXMvYXBpL21vdmVtZW50L3VubG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvbW92ZW1lbnQvdW5sb2NrXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gcmVzLnN0YXR1cygyMDApLmpzb24oeyAuLi5kYXRhIH0pKVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciB1bmxvY2tpbmcgc2xpZGVyIG1vdG9ycyFcIik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuZW5kKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIpO1xuICAgIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=