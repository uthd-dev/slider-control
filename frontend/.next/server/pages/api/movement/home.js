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
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  await fetch("http://localhost:3001/api/movement/home").then(response => response.json()).then(data => res.status(200).json(_objectSpread({}, data))).catch(err => {
    console.log("Error moving slider to home position!");
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/movement/home.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9tb3ZlbWVudC9ob21lLmpzIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSwrREFBZSxPQUFPQSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDL0IsUUFBTUMsS0FBSyxDQUFDLHlDQUFELENBQUwsQ0FDSEMsSUFERyxDQUNFQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQURkLEVBRUhGLElBRkcsQ0FFRUcsSUFBSSxJQUFJTCxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixtQkFBMEJDLElBQTFCLEVBRlYsRUFHSEUsS0FIRyxDQUdHQyxHQUFHLElBQUk7QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVksdUNBQVo7QUFDQVYsT0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkssR0FBaEIsQ0FBb0IsdUJBQXBCO0FBQ0QsR0FORyxDQUFOO0FBT0QsQ0FSSCxFIiwiZmlsZSI6InBhZ2VzL2FwaS9tb3ZlbWVudC9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL21vdmVtZW50L2hvbWVcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gcmVzLnN0YXR1cygyMDApLmpzb24oeyAuLi5kYXRhIH0pKVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgbW92aW5nIHNsaWRlciB0byBob21lIHBvc2l0aW9uIVwiKTtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmVuZChcIkludGVybmFsIFNlcnZlciBFcnJvclwiKTtcbiAgICAgIH0pO1xuICB9O1xuICAiXSwic291cmNlUm9vdCI6IiJ9