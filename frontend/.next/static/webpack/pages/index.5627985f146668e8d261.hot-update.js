self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/buttons/add-keyframe.js":
/*!********************************************!*\
  !*** ./components/buttons/add-keyframe.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ButtonExport; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./components/button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Dev\\GitHub\\slider-control\\frontend\\components\\buttons\\add-keyframe.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();






var apiBaseUrl = "/api/movement/positions";

var fetcher = function fetcher() {
  return fetch.apply(void 0, arguments).then(function (res) {
    return res.json();
  });
};

function ButtonExport() {
  _s();

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__.default)("/api/movement/positions/slider-position", fetcher, {
    refreshInterval: 1000
  }),
      data = _useSWR.data,
      error = _useSWR.error;

  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "failed to load"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 21
  }, this);
  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 21
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AddKeyframeButton, {
    pos: data
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 10
  }, this);
}

_s(ButtonExport, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = ButtonExport;

function AddKeyframeButton(_ref) {
  _s2();

  var pos = _ref.pos;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var buttonElement = document.getElementById("add-keyframe");
    buttonElement.style.backgroundColor = "#6B7280";
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__.default, {
    textId: "add-keyframe-text",
    buttonId: "add-keyframe",
    text: "Add Keyframe",
    whenClicked: function whenClicked() {
      handleClick(pos);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_s2(AddKeyframeButton, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c2 = AddKeyframeButton;

function handleClick(pos) {
  var textElement = document.getElementById("add-keyframe-text");
  var buttonElement = document.getElementById("add-keyframe");
  axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat(apiBaseUrl, "/add-keyframe"), {
    mot1: pos.positions.motorPositions.mot1,
    mot2: pos.positions.motorPositions.mot2
  }, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    buttonElement.style.backgroundColor = "#10B981";
    setTimeout(function () {
      textElement.innerHTML = "Success!";
      setTimeout(function () {
        buttonElement.style.backgroundColor = "#6B7280";
        setTimeout(function () {
          textElement.innerHTML = "Add Keyframe";
        }, 150);
      }, 1000);
    }, 150);
  })["catch"](function (err) {
    console.log(err);
    buttonElement.style.backgroundColor = "#DC2626";
    setTimeout(function () {
      textElement.innerHTML = "Error";
      setTimeout(function () {
        buttonElement.style.backgroundColor = "#6B7280";
        setTimeout(function () {
          textElement.innerHTML = "Add Keyframe";
        }, 150);
      }, 1000);
    }, 150);
  });
}

var _c, _c2;

$RefreshReg$(_c, "ButtonExport");
$RefreshReg$(_c2, "AddKeyframeButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b25zL2FkZC1rZXlmcmFtZS5qcyJdLCJuYW1lcyI6WyJhcGlCYXNlVXJsIiwiZmV0Y2hlciIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJCdXR0b25FeHBvcnQiLCJ1c2VTV1IiLCJyZWZyZXNoSW50ZXJ2YWwiLCJkYXRhIiwiZXJyb3IiLCJBZGRLZXlmcmFtZUJ1dHRvbiIsInBvcyIsInVzZUVmZmVjdCIsImJ1dHRvbkVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoYW5kbGVDbGljayIsInRleHRFbGVtZW50IiwiYXhpb3MiLCJtb3QxIiwicG9zaXRpb25zIiwibW90b3JQb3NpdGlvbnMiLCJtb3QyIiwiaGVhZGVycyIsInNldFRpbWVvdXQiLCJpbm5lckhUTUwiLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyx5QkFBbkI7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUFhQyxLQUFLLE1BQUwsb0JBQWVDLElBQWYsQ0FBb0IsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsR0FBcEIsQ0FBYjtBQUFBLENBQWhCOztBQUVlLFNBQVNDLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxnQkFDYkMsNENBQU0sQ0FBQyx5Q0FBRCxFQUE0Q04sT0FBNUMsRUFBcUQ7QUFDakZPLG1CQUFlLEVBQUU7QUFEZ0UsR0FBckQsQ0FETztBQUFBLE1BQzdCQyxJQUQ2QixXQUM3QkEsSUFENkI7QUFBQSxNQUN2QkMsS0FEdUIsV0FDdkJBLEtBRHVCOztBQUtyQyxNQUFJQSxLQUFKLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFWCxzQkFBTyw4REFBQyxpQkFBRDtBQUFtQixPQUFHLEVBQUVBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztHQVR1QkgsWTtVQUNFQyx3Qzs7O0tBREZELFk7O0FBV3hCLFNBQVNLLGlCQUFULE9BQW9DO0FBQUE7O0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQ2xDQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFwQjtBQUNBRixpQkFBYSxDQUFDRyxLQUFkLENBQW9CQyxlQUFwQixHQUFzQyxTQUF0QztBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxzQkFDRSw4REFBQyw0Q0FBRDtBQUNFLFVBQU0sRUFBRSxtQkFEVjtBQUVFLFlBQVEsRUFBRSxjQUZaO0FBR0UsUUFBSSxFQUFFLGNBSFI7QUFJRSxlQUFXLEVBQUUsdUJBQU07QUFDakJDLGlCQUFXLENBQUNQLEdBQUQsQ0FBWDtBQUNEO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0lBaEJRRCxpQjs7TUFBQUEsaUI7O0FBa0JULFNBQVNRLFdBQVQsQ0FBcUJQLEdBQXJCLEVBQTBCO0FBQ3hCLE1BQUlRLFdBQVcsR0FBR0wsUUFBUSxDQUFDQyxjQUFULENBQXdCLG1CQUF4QixDQUFsQjtBQUNBLE1BQUlGLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQXBCO0FBQ0FLLG1EQUFBLFdBQ1dyQixVQURYLG9CQUNzQztBQUNsQ3NCLFFBQUksRUFBRVYsR0FBRyxDQUFDVyxTQUFKLENBQWNDLGNBQWQsQ0FBNkJGLElBREQ7QUFFbENHLFFBQUksRUFBRWIsR0FBRyxDQUFDVyxTQUFKLENBQWNDLGNBQWQsQ0FBNkJDO0FBRkQsR0FEdEMsRUFLRTtBQUNFQyxXQUFPLEVBQUU7QUFDUDtBQUNBLHNCQUFnQjtBQUZUO0FBRFgsR0FMRixFQVdHdkIsSUFYSCxDQVdRLFVBQUNDLEdBQUQsRUFBUztBQUNiVSxpQkFBYSxDQUFDRyxLQUFkLENBQW9CQyxlQUFwQixHQUFzQyxTQUF0QztBQUNBUyxjQUFVLENBQUMsWUFBTTtBQUNmUCxpQkFBVyxDQUFDUSxTQUFaLEdBQXdCLFVBQXhCO0FBQ0FELGdCQUFVLENBQUMsWUFBTTtBQUNmYixxQkFBYSxDQUFDRyxLQUFkLENBQW9CQyxlQUFwQixHQUFzQyxTQUF0QztBQUNBUyxrQkFBVSxDQUFDLFlBQU07QUFDZlAscUJBQVcsQ0FBQ1EsU0FBWixHQUF3QixjQUF4QjtBQUNELFNBRlMsRUFFUCxHQUZPLENBQVY7QUFHRCxPQUxTLEVBS1AsSUFMTyxDQUFWO0FBTUQsS0FSUyxFQVFQLEdBUk8sQ0FBVjtBQVNELEdBdEJILFdBdUJTLFVBQUNDLEdBQUQsRUFBUztBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUVBZixpQkFBYSxDQUFDRyxLQUFkLENBQW9CQyxlQUFwQixHQUFzQyxTQUF0QztBQUVBUyxjQUFVLENBQUMsWUFBTTtBQUNmUCxpQkFBVyxDQUFDUSxTQUFaLEdBQXdCLE9BQXhCO0FBRUFELGdCQUFVLENBQUMsWUFBTTtBQUNmYixxQkFBYSxDQUFDRyxLQUFkLENBQW9CQyxlQUFwQixHQUFzQyxTQUF0QztBQUNBUyxrQkFBVSxDQUFDLFlBQU07QUFDZlAscUJBQVcsQ0FBQ1EsU0FBWixHQUF3QixjQUF4QjtBQUNELFNBRlMsRUFFUCxHQUZPLENBQVY7QUFHRCxPQUxTLEVBS1AsSUFMTyxDQUFWO0FBTUQsS0FUUyxFQVNQLEdBVE8sQ0FBVjtBQVVELEdBdENIO0FBdUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU2Mjc5ODVmMTQ2NjY4ZThkMjYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBhcGlCYXNlVXJsID0gXCIvYXBpL21vdmVtZW50L3Bvc2l0aW9uc1wiO1xuXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkV4cG9ydCgpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFwiL2FwaS9tb3ZlbWVudC9wb3NpdGlvbnMvc2xpZGVyLXBvc2l0aW9uXCIsIGZldGNoZXIsIHtcbiAgICByZWZyZXNoSW50ZXJ2YWw6IDEwMDAsXG4gIH0pO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFpbGVkIHRvIGxvYWQ8L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG5cbiAgcmV0dXJuIDxBZGRLZXlmcmFtZUJ1dHRvbiBwb3M9e2RhdGF9IC8+XG59XG5cbmZ1bmN0aW9uIEFkZEtleWZyYW1lQnV0dG9uKHsgcG9zIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWtleWZyYW1lXCIpO1xuICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNkI3MjgwXCI7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIHRleHRJZD17XCJhZGQta2V5ZnJhbWUtdGV4dFwifVxuICAgICAgYnV0dG9uSWQ9e1wiYWRkLWtleWZyYW1lXCJ9XG4gICAgICB0ZXh0PXtcIkFkZCBLZXlmcmFtZVwifVxuICAgICAgd2hlbkNsaWNrZWQ9eygpID0+IHtcbiAgICAgICAgaGFuZGxlQ2xpY2socG9zKTtcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2socG9zKSB7XG4gIGxldCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWtleWZyYW1lLXRleHRcIik7XG4gIGxldCBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQta2V5ZnJhbWVcIik7XG4gIGF4aW9zXG4gICAgLnBvc3QoYCR7YXBpQmFzZVVybH0vYWRkLWtleWZyYW1lYCwge1xuICAgICAgbW90MTogcG9zLnBvc2l0aW9ucy5tb3RvclBvc2l0aW9ucy5tb3QxLFxuICAgICAgbW90MjogcG9zLnBvc2l0aW9ucy5tb3RvclBvc2l0aW9ucy5tb3QyLFxuICAgIH0sXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAvLyBPdmVyd3JpdGUgQXhpb3MncyBhdXRvbWF0aWNhbGx5IHNldCBDb250ZW50LVR5cGVcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxMEI5ODFcIjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0ZXh0RWxlbWVudC5pbm5lckhUTUwgPSBcIlN1Y2Nlc3MhXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNkI3MjgwXCI7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0ZXh0RWxlbWVudC5pbm5lckhUTUwgPSBcIkFkZCBLZXlmcmFtZVwiO1xuICAgICAgICAgIH0sIDE1MCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSwgMTUwKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuXG4gICAgICBidXR0b25FbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0RDMjYyNlwiO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gXCJFcnJvclwiO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNkI3MjgwXCI7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0ZXh0RWxlbWVudC5pbm5lckhUTUwgPSBcIkFkZCBLZXlmcmFtZVwiO1xuICAgICAgICAgIH0sIDE1MCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSwgMTUwKTtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=