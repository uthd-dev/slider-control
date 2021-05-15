self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/positioning-card.js":
/*!****************************************!*\
  !*** ./components/positioning-card.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PositioningCard; }
/* harmony export */ });
/* harmony import */ var C_Users_aubin_Desktop_sliderJS_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\aubin\\Desktop\\sliderJS\\frontend\\components\\positioning-card.js",
    _s = $RefreshSig$();

function _templateObject5() {
  var data = (0,C_Users_aubin_Desktop_sliderJS_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    height: 0;\n    width: 0;\n    border-top: 25px solid transparent;\n    border-bottom: 25px solid transparent; \n    border-left: 25px solid #C4C4C4;\n    :hover {\n        cursor: pointer;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_aubin_Desktop_sliderJS_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    height: 0;\n    width: 0;\n    border-top: 25px solid transparent;\n    border-bottom: 25px solid transparent; \n    border-right: 25px solid #C4C4C4;\n    :hover {\n        cursor: pointer;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_aubin_Desktop_sliderJS_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: flex;\n    justify-content: space-between;\n\n    margin: 10%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_aubin_Desktop_sliderJS_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    text-align: center;\n    color: #E5E5E5;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_aubin_Desktop_sliderJS_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    height: 140px;\n    width: 100px;\n\n    border-radius: 5px;\n\n    background-color: #36454F;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



function PositioningCard(_ref) {
  _s();

  var isMove = _ref.isMove;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {}, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Card, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Title, {
      children: isMove ? "Move" : "Rotate"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ButtonsContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ButtonLeft, {
        onMouseDown: function onMouseDown() {
          return handleClick(isMove, true);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ButtonRight, {
        onMouseDown: function onMouseDown() {
          return handleClick(isMove, false);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}
/* LOGIC */

_s(PositioningCard, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = PositioningCard;

function handleClick(isMove, isLeft) {
  if (isMove) {
    alert("yo");
  } else {}
}
/* STYLES */


var Card = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject());
_c2 = Card;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.h5(_templateObject2());
_c3 = Title;
var ButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject3());
_c4 = ButtonsContainer;
var ButtonLeft = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject4());
_c5 = ButtonLeft;
var ButtonRight = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject5());
_c6 = ButtonRight;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "PositioningCard");
$RefreshReg$(_c2, "Card");
$RefreshReg$(_c3, "Title");
$RefreshReg$(_c4, "ButtonsContainer");
$RefreshReg$(_c5, "ButtonLeft");
$RefreshReg$(_c6, "ButtonRight");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3NpdGlvbmluZy1jYXJkLmpzIl0sIm5hbWVzIjpbIlBvc2l0aW9uaW5nQ2FyZCIsImlzTW92ZSIsInVzZUVmZmVjdCIsImhhbmRsZUNsaWNrIiwiaXNMZWZ0IiwiYWxlcnQiLCJDYXJkIiwic3R5bGVkIiwiVGl0bGUiLCJCdXR0b25zQ29udGFpbmVyIiwiQnV0dG9uTGVmdCIsIkJ1dHRvblJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLGVBQVQsT0FBc0M7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDakRDLGtEQUFTLENBQUMsWUFBTSxDQUVmLENBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDSSw4REFBQyxJQUFEO0FBQUEsNEJBQ0ksOERBQUMsS0FBRDtBQUFBLGdCQUFTRCxNQUFNLEdBQUcsTUFBSCxHQUFZO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLDhEQUFDLGdCQUFEO0FBQUEsOEJBQ0ksOERBQUMsVUFBRDtBQUFZLG1CQUFXLEVBQUU7QUFBQSxpQkFBTUUsV0FBVyxDQUFDRixNQUFELEVBQVMsSUFBVCxDQUFqQjtBQUFBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLDhEQUFDLFdBQUQ7QUFBYyxtQkFBVyxFQUFFO0FBQUEsaUJBQU1FLFdBQVcsQ0FBQ0YsTUFBRCxFQUFTLEtBQVQsQ0FBakI7QUFBQTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDtBQUVEOztHQWhCd0JELGU7O0tBQUFBLGU7O0FBaUJ4QixTQUFTRyxXQUFULENBQXFCRixNQUFyQixFQUE2QkcsTUFBN0IsRUFBcUM7QUFDakMsTUFBSUgsTUFBSixFQUFZO0FBQ1JJLFNBQUssQ0FBQyxJQUFELENBQUw7QUFDSCxHQUZELE1BRU0sQ0FFTDtBQUNKO0FBRUQ7OztBQUNBLElBQU1DLElBQUksR0FBR0MsMERBQUgsbUJBQVY7TUFBTUQsSTtBQVNOLElBQU1FLEtBQUssR0FBR0QseURBQUgsb0JBQVg7TUFBTUMsSztBQUtOLElBQU1DLGdCQUFnQixHQUFHRiwwREFBSCxvQkFBdEI7TUFBTUUsZ0I7QUFPTixJQUFNQyxVQUFVLEdBQUdILDBEQUFILG9CQUFoQjtNQUFNRyxVO0FBV04sSUFBTUMsV0FBVyxHQUFHSiwwREFBSCxvQkFBakI7TUFBTUksVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NjY3N2Y4ZDZkNjk3NmQzOGMxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc2l0aW9uaW5nQ2FyZCAoeyBpc01vdmUgfSkge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8VGl0bGU+eyBpc01vdmUgPyBcIk1vdmVcIiA6IFwiUm90YXRlXCIgfTwvVGl0bGU+XHJcbiAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbkxlZnQgb25Nb3VzZURvd249eygpID0+IGhhbmRsZUNsaWNrKGlzTW92ZSwgdHJ1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uUmlnaHQgIG9uTW91c2VEb3duPXsoKSA9PiBoYW5kbGVDbGljayhpc01vdmUsIGZhbHNlKX0gLz5cclxuICAgICAgICAgICAgPC9CdXR0b25zQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn1cclxuXHJcbi8qIExPR0lDICovXHJcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGlzTW92ZSwgaXNMZWZ0KSB7XHJcbiAgICBpZiAoaXNNb3ZlKSB7XHJcbiAgICAgICAgYWxlcnQoXCJ5b1wiKTtcclxuICAgIH1lbHNlIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFNUWUxFUyAqL1xyXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjQ1NEY7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oNWBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRTVFNUU1O1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIG1hcmdpbjogMTAlO1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJvcmRlci10b3A6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50OyBcclxuICAgIGJvcmRlci1yaWdodDogMjVweCBzb2xpZCAjQzRDNEM0O1xyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25SaWdodCA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJvcmRlci10b3A6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50OyBcclxuICAgIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkICNDNEM0QzQ7XHJcbiAgICA6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuYDsiXSwic291cmNlUm9vdCI6IiJ9