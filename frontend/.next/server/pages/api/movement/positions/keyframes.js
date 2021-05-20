(function() {
var exports = {};
exports.id = "pages/api/movement/positions/keyframes";
exports.ids = ["pages/api/movement/positions/keyframes"];
exports.modules = {

/***/ "./pages/api/movement/positions/keyframes.js":
/*!***************************************************!*\
  !*** ./pages/api/movement/positions/keyframes.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  await fetch("http://localhost:3001/api/movement/positions/keyframes").then(response => response.json()).then(data => res.json(_objectSpread({}, data))).catch(err => {
    console.log("Error fetching keyframe positions!");
    res.status(500).end("Internal Server Error");
  });
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/movement/positions/keyframes.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9tb3ZlbWVudC9wb3NpdGlvbnMva2V5ZnJhbWVzLmpzIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSwrREFBZSxPQUFPQSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTUMsS0FBSyxDQUFDLHdEQUFELENBQUwsQ0FDSEMsSUFERyxDQUNFQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQURkLEVBRUhGLElBRkcsQ0FFRUcsSUFBSSxJQUFJTCxHQUFHLENBQUNJLElBQUosbUJBQWNDLElBQWQsRUFGVixFQUdIQyxLQUhHLENBR0dDLEdBQUcsSUFBSTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNBVCxPQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQixDQUFvQix1QkFBcEI7QUFDRCxHQU5HLENBQU47QUFPRCxDQVJELEUiLCJmaWxlIjoicGFnZXMvYXBpL21vdmVtZW50L3Bvc2l0aW9ucy9rZXlmcmFtZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL21vdmVtZW50L3Bvc2l0aW9ucy9rZXlmcmFtZXNcIilcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiByZXMuanNvbih7IC4uLmRhdGEgfSkpXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIGtleWZyYW1lIHBvc2l0aW9ucyFcIik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuZW5kKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIpO1xuICAgIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=