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
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  await fetch("http://localhost:3001/api/movement/positions/slider-position").then(response => response.json()).then(data => res.json(_objectSpread({}, data))).catch(err => {
    console.log("Error fetching slider motor positions!");
  });
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9tb3ZlbWVudC9wb3NpdGlvbnMvc2xpZGVyLXBvc2l0aW9uLmpzIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSwrREFBZSxPQUFPQSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTUMsS0FBSyxDQUFDLDhEQUFELENBQUwsQ0FDSEMsSUFERyxDQUNFQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQURkLEVBRUhGLElBRkcsQ0FFRUcsSUFBSSxJQUFJTCxHQUFHLENBQUNJLElBQUosbUJBQWNDLElBQWQsRUFGVixFQUdIQyxLQUhHLENBR0dDLEdBQUcsSUFBSTtBQUFFQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx3Q0FBWjtBQUF1RCxHQUhuRSxDQUFOO0FBSUQsQ0FMRCxFIiwiZmlsZSI6InBhZ2VzL2FwaS9tb3ZlbWVudC9wb3NpdGlvbnMvc2xpZGVyLXBvc2l0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9tb3ZlbWVudC9wb3NpdGlvbnMvc2xpZGVyLXBvc2l0aW9uXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gcmVzLmpzb24oeyAuLi5kYXRhIH0pKVxuICAgIC5jYXRjaChlcnIgPT4geyBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIHNsaWRlciBtb3RvciBwb3NpdGlvbnMhXCIpIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=