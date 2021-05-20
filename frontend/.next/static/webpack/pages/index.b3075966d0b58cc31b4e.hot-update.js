self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/keyframe-selector.js":
/*!*****************************************!*\
  !*** ./components/keyframe-selector.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SelectorExport; }
/* harmony export */ });
/* harmony import */ var D_Dev_GitHub_slider_control_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Dev\\GitHub\\slider-control\\frontend\\components\\keyframe-selector.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,D_Dev_GitHub_slider_control_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    width: 60px;\n    height: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var fetcher = function fetcher() {
  return fetch.apply(void 0, arguments).then(function (res) {
    return res.json();
  });
};

function SelectorExport() {
  _s();

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__.default)("/api/movement/positions/keyframes", fetcher, {
    refreshInterval: 1000
  }),
      keyframes = _useSWR.keyframes,
      err = _useSWR.err;

  if (err) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: "Error"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 20
  }, this); //if(!keyframes) return <div>Loading</div>

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(KeyframeSelector, {
    keframes: keyframes
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 12
  }, this);
}

_s(SelectorExport, "u0jp9HGx03dgu/xwFRQFazMpQIM=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = SelectorExport;

function KeyframeSelector(_ref) {
  var _this = this;

  var keyframes = _ref.keyframes;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SelectorContainer, {
    name: "keyframe-selector",
    id: "keyframe-selector",
    children: keyframes.positions.map(function (keyframe, index) {
      /*#__PURE__*/
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
        value: "".concat(index),
        children: "Keyframe #".concat(index + 1)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}
/* STYLES */


_c2 = KeyframeSelector;
var SelectorContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.select(_templateObject());
_c3 = SelectorContainer;

var _c, _c2, _c3;

$RefreshReg$(_c, "SelectorExport");
$RefreshReg$(_c2, "KeyframeSelector");
$RefreshReg$(_c3, "SelectorContainer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9rZXlmcmFtZS1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIlNlbGVjdG9yRXhwb3J0IiwidXNlU1dSIiwicmVmcmVzaEludGVydmFsIiwia2V5ZnJhbWVzIiwiZXJyIiwiS2V5ZnJhbWVTZWxlY3RvciIsInBvc2l0aW9ucyIsIm1hcCIsImtleWZyYW1lIiwiaW5kZXgiLCJTZWxlY3RvckNvbnRhaW5lciIsInN0eWxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FBYUMsS0FBSyxNQUFMLG9CQUFlQyxJQUFmLENBQW9CLFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEdBQXZCLENBQWI7QUFBQSxDQUFoQjs7QUFFZSxTQUFTQyxjQUFULEdBQTJCO0FBQUE7O0FBQUEsZ0JBQ2JDLDRDQUFNLENBQUMsbUNBQUQsRUFBc0NOLE9BQXRDLEVBQStDO0FBQUVPLG1CQUFlLEVBQUU7QUFBbkIsR0FBL0MsQ0FETztBQUFBLE1BQy9CQyxTQUQrQixXQUMvQkEsU0FEK0I7QUFBQSxNQUNwQkMsR0FEb0IsV0FDcEJBLEdBRG9COztBQUd0QyxNQUFHQSxHQUFILEVBQVEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUCxDQUg4QixDQUl0Qzs7QUFFQSxzQkFBTyw4REFBQyxnQkFBRDtBQUFrQixZQUFRLEVBQUVEO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNIOztHQVB1QkgsYztVQUNLQyx3Qzs7O0tBRExELGM7O0FBU3hCLFNBQVNLLGdCQUFULE9BQTBDO0FBQUE7O0FBQUEsTUFBYkYsU0FBYSxRQUFiQSxTQUFhO0FBQ3RDLHNCQUNJLDhEQUFDLGlCQUFEO0FBQW1CLFFBQUksRUFBRSxtQkFBekI7QUFBOEMsTUFBRSxFQUFFLG1CQUFsRDtBQUFBLGNBQ0tBLFNBQVMsQ0FBQ0csU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQXFCO0FBQzFDO0FBQUE7QUFBUSxhQUFLLFlBQUtBLEtBQUwsQ0FBYjtBQUFBLHNDQUF5Q0EsS0FBSyxHQUFHLENBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNILEtBRkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSDtBQUVEOzs7TUFWU0osZ0I7QUFXVCxJQUFNSyxpQkFBaUIsR0FBR0MsNkRBQUgsbUJBQXZCO01BQU1ELGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIzMDc1OTY2ZDBiNThjYzMxYjRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxlY3RvckV4cG9ydCAoKSB7XG4gICAgY29uc3Qge2tleWZyYW1lcywgZXJyfSA9IHVzZVNXUihcIi9hcGkvbW92ZW1lbnQvcG9zaXRpb25zL2tleWZyYW1lc1wiLCBmZXRjaGVyLCB7IHJlZnJlc2hJbnRlcnZhbDogMTAwMCB9KVxuXG4gICAgaWYoZXJyKSByZXR1cm4gPGRpdj5FcnJvcjwvZGl2PlxuICAgIC8vaWYoIWtleWZyYW1lcykgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuXG4gICAgcmV0dXJuIDxLZXlmcmFtZVNlbGVjdG9yIGtlZnJhbWVzPXtrZXlmcmFtZXN9IC8+XG59XG5cbmZ1bmN0aW9uIEtleWZyYW1lU2VsZWN0b3IgKHsga2V5ZnJhbWVzIH0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxTZWxlY3RvckNvbnRhaW5lciBuYW1lPXtcImtleWZyYW1lLXNlbGVjdG9yXCJ9IGlkPXtcImtleWZyYW1lLXNlbGVjdG9yXCJ9ID5cbiAgICAgICAgICAgIHtrZXlmcmFtZXMucG9zaXRpb25zLm1hcCgoa2V5ZnJhbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17YCR7aW5kZXh9YH0+e2BLZXlmcmFtZSAjJHtpbmRleCArIDF9YH08L29wdGlvbj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L1NlbGVjdG9yQ29udGFpbmVyPlxuICAgICk7XG59XG5cbi8qIFNUWUxFUyAqL1xuY29uc3QgU2VsZWN0b3JDb250YWluZXIgPSBzdHlsZWQuc2VsZWN0YFxuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogMTBweDtcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==