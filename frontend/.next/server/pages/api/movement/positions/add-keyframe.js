(function() {
var exports = {};
exports.id = "pages/api/movement/positions/add-keyframe";
exports.ids = ["pages/api/movement/positions/add-keyframe"];
exports.modules = {

/***/ "./pages/api/movement/positions/add-keyframe.js":
/*!******************************************************!*\
  !*** ./pages/api/movement/positions/add-keyframe.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  console.log(req.body);

  if (req.body) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://localhost:3001/api/movement/positions/keyframes", _objectSpread({}, req.body)).then(() => {
      console.log(`Added Keyframe: ${req.body.mot1}, ${req.body.mot2}`);
      res.status(200).end("OK 200");
    }).catch(err => {
      console.log("Error: Could not POST backend API: '/api/movement/positions'");
      res.status(500).json({
        error: "INTERNAL_SERVER_ERROR"
      });
    });
  } else res.status(400).json({
    error: "MALFORMED_REQUEST"
  });
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/movement/positions/add-keyframe.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9tb3ZlbWVudC9wb3NpdGlvbnMvYWRkLWtleWZyYW1lLmpzIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiYXhpb3NcIiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImF4aW9zIiwidGhlbiIsIm1vdDEiLCJtb3QyIiwic3RhdHVzIiwiZW5kIiwiY2F0Y2giLCJlcnIiLCJqc29uIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLCtEQUFlLE9BQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQUcsQ0FBQ0ksSUFBaEI7O0FBQ0EsTUFBSUosR0FBRyxDQUFDSSxJQUFSLEVBQWM7QUFDWkMscURBQUEsQ0FDUSx3REFEUixvQkFDdUVMLEdBQUcsQ0FBQ0ksSUFEM0UsR0FFR0UsSUFGSCxDQUVRLE1BQU07QUFDVkosYUFBTyxDQUFDQyxHQUFSLENBQWEsbUJBQWtCSCxHQUFHLENBQUNJLElBQUosQ0FBU0csSUFBSyxLQUFJUCxHQUFHLENBQUNJLElBQUosQ0FBU0ksSUFBSyxFQUEvRDtBQUNBUCxTQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQixDQUFvQixRQUFwQjtBQUNELEtBTEgsRUFNR0MsS0FOSCxDQU1VQyxHQUFELElBQVM7QUFDZFYsYUFBTyxDQUFDQyxHQUFSLENBQ0UsOERBREY7QUFHQUYsU0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkksSUFBaEIsQ0FBcUI7QUFDbkJDLGFBQUssRUFBRTtBQURZLE9BQXJCO0FBR0QsS0FiSDtBQWNELEdBZkQsTUFlTWIsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkksSUFBaEIsQ0FBcUI7QUFDekJDLFNBQUssRUFBRTtBQURrQixHQUFyQjtBQUdQLENBcEJELEU7Ozs7Ozs7Ozs7O0FDRkEsbUMiLCJmaWxlIjoicGFnZXMvYXBpL21vdmVtZW50L3Bvc2l0aW9ucy9hZGQta2V5ZnJhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG4gIGlmIChyZXEuYm9keSkge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvbW92ZW1lbnQvcG9zaXRpb25zL2tleWZyYW1lc1wiLCB7IC4uLnJlcS5ib2R5IH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBZGRlZCBLZXlmcmFtZTogJHtyZXEuYm9keS5tb3QxfSwgJHtyZXEuYm9keS5tb3QyfWApO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuZW5kKFwiT0sgMjAwXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIFwiRXJyb3I6IENvdWxkIG5vdCBQT1NUIGJhY2tlbmQgQVBJOiAnL2FwaS9tb3ZlbWVudC9wb3NpdGlvbnMnXCJcbiAgICAgICAgKTtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgIGVycm9yOiBcIklOVEVSTkFMX1NFUlZFUl9FUlJPUlwiXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1lbHNlIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICBlcnJvcjogXCJNQUxGT1JNRURfUkVRVUVTVFwiXG4gIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9