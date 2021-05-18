(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Dev\\GitHub\\slider-control\\frontend\\components\\button.js";

function Button({
  text,
  textId,
  buttonId,
  whenClicked
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonContainer, {
    id: buttonId,
    onClick: () => {
      whenClicked();
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonText, {
      id: textId,
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
const ButtonContainer = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  width: 140px;
  height: 50px;

  padding: auto;
  margin: 0 20px;

  background-color: #f87171;
  border-radius: 5px;

  cursor: pointer;
  transition: 500ms;
`;
const ButtonText = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().p)`
  text-align: center;

  `;

/***/ }),

/***/ "./components/buttons/add-keyframe.js":
/*!********************************************!*\
  !*** ./components/buttons/add-keyframe.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ButtonExport; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button */ "./components/button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\Dev\\GitHub\\slider-control\\frontend\\components\\buttons\\add-keyframe.js";





const apiBaseUrl = "/api/movement/positions";

const fetcher = (...args) => fetch(...args).then(res => res.json());

function ButtonExport() {
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()("/api/movement/positions/slider-position", fetcher, {
    refreshInterval: 1000
  });
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

function AddKeyframeButton({
  pos
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    let buttonElement = document.getElementById("add-keyframe");
    buttonElement.style.backgroundColor = "#6B7280";
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_4__.default, {
    textId: "add-keyframe-text",
    buttonId: "add-keyframe",
    text: "Add Keyframe",
    whenClicked: () => {
      handleClick(pos);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

function handleClick(pos) {
  let textElement = document.getElementById("add-keyframe-text");
  let buttonElement = document.getElementById("add-keyframe");
  axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${apiBaseUrl}/add-keyframe`, {
    mot1: pos.positions.motorPositions.mot1,
    mot2: pos.positions.motorPositions.mot2
  }).then(res => {
    buttonElement.style.backgroundColor = "#10B981";
    setTimeout(() => {
      textElement.innerHTML = "Success!";
      setTimeout(() => {
        buttonElement.style.backgroundColor = "#6B7280";
        setTimeout(() => {
          textElement.innerHTML = "Add Keyframe";
        }, 150);
      }, 1000);
    }, 150);
  }).catch(err => {
    console.log(err);
    buttonElement.style.backgroundColor = "#DC2626";
    setTimeout(() => {
      textElement.innerHTML = "Error";
      setTimeout(() => {
        buttonElement.style.backgroundColor = "#6B7280";
        setTimeout(() => {
          textElement.innerHTML = "Add Keyframe";
        }, 150);
      }, 1000);
    }, 150);
  });
}

/***/ }),

/***/ "./components/buttons/home.js":
/*!************************************!*\
  !*** ./components/buttons/home.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TravelHomeButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./components/button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\Dev\\GitHub\\slider-control\\frontend\\components\\buttons\\home.js";




const apiBaseUrl = "/api/movement";
function TravelHomeButton() {
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    let buttonElement = document.getElementById("travel-home");
    buttonElement.style.backgroundColor = "#6B7280";
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__.default, {
    textId: "travel-home-text",
    buttonId: "travel-home",
    text: "Travel Home",
    whenClicked: () => {
      handleClick();
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

function handleClick() {
  let textElement = document.getElementById("travel-home-text");
  let buttonElement = document.getElementById("travel-home");
  axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${apiBaseUrl}/home`).then(res => {
    buttonElement.style.backgroundColor = "#10B981";
    setTimeout(() => {
      textElement.innerHTML = "Success!";
      setTimeout(() => {
        buttonElement.style.backgroundColor = "#6B7280";
        setTimeout(() => {
          textElement.innerHTML = "Travel Home";
        }, 150);
      }, 1000);
    }, 150);
  }).catch(err => {
    console.log(err);
    buttonElement.style.backgroundColor = "#DC2626";
    setTimeout(() => {
      textElement.innerHTML = "Error";
      setTimeout(() => {
        buttonElement.style.backgroundColor = "#6B7280";
        setTimeout(() => {
          textElement.innerHTML = "Travel Home";
        }, 150);
      }, 1000);
    }, 150);
  });
}

/***/ }),

/***/ "./components/buttons/unlock.js":
/*!**************************************!*\
  !*** ./components/buttons/unlock.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UnlockMotorsButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./components/button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\Dev\\GitHub\\slider-control\\frontend\\components\\buttons\\unlock.js";




const apiBaseUrl = "/api/movement";
function UnlockMotorsButton() {
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    let buttonElement = document.getElementById("unlock-motors");
    buttonElement.style.backgroundColor = "#6B7280";
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__.default, {
    textId: "unlock-motors-text",
    buttonId: "unlock-motors",
    text: "Unlock Motors",
    whenClicked: () => {
      handleClick();
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

function handleClick() {
  let textElement = document.getElementById("unlock-motors-text");
  let buttonElement = document.getElementById("unlock-motors");
  axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${apiBaseUrl}/unlock`).then(res => {
    buttonElement.style.backgroundColor = "#10B981";
    setTimeout(() => {
      textElement.innerHTML = "Success!";
      setTimeout(() => {
        buttonElement.style.backgroundColor = "#6B7280";
        setTimeout(() => {
          textElement.innerHTML = "Unlock Motors";
        }, 150);
      }, 1000);
    }, 150);
  }).catch(err => {
    console.log(err);
    buttonElement.style.backgroundColor = "#DC2626";
    setTimeout(() => {
      textElement.innerHTML = "Error";
      setTimeout(() => {
        buttonElement.style.backgroundColor = "#6B7280";
        setTimeout(() => {
          textElement.innerHTML = "Unlock Motors";
        }, 150);
      }, 1000);
    }, 150);
  });
}

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Dev\\GitHub\\slider-control\\frontend\\components\\header.js";

function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CameraSliderText, {
    children: "Slider Control"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
/* STYLES */

const CameraSliderText = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().h1)`
  @import url("https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@700&display=swap");

  font-family: 'Sulphur Point', sans-serif;
  font-size: 45px;
  line-height: 45px;
  text-align: center;

  background: -webkit-linear-gradient(right top, #ef4444, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

/***/ }),

/***/ "./components/positioning-card.js":
/*!****************************************!*\
  !*** ./components/positioning-card.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PositioningCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Dev\\GitHub\\slider-control\\frontend\\components\\positioning-card.js";



function PositioningCard({
  isMove
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {}, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
      children: isMove ? "Move" : "Rotate"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonsContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonLeft, {
        onPointerUp: () => {
          handleMouseUp(isMove, true);
        },
        onPointerDown: () => {
          handleMouseDown(isMove, true);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonRight, {
        onPointerUp: () => {
          handleMouseUp(isMove, false);
        },
        onPointerDown: () => {
          handleMouseDown(isMove, false);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
/* LOGIC */

const apiBaseURL = "http://localhost:3001/api/movement";

function handleMouseDown(isMove, isLeft) {
  if (isMove) {
    axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${apiBaseURL}/continuous-translate/press?forward=${isLeft}`).then(() => {}).catch(err => {
      console.log(err);
    });
  } else {
    axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${apiBaseURL}/continuous-rotate/press?clockwise=${isLeft ? false : true}`).then(() => {}).catch(err => {
      console.log(err);
    });
  }
}

function handleMouseUp(isMove, isLeft) {
  if (isMove) {
    axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${apiBaseURL}/continuous-translate/release?forward=${isLeft}`).then(() => {}).catch(err => {
      console.log(err);
    });
  } else {
    axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${apiBaseURL}/continuous-rotate/release?clockwise=${isLeft ? false : true}`).then(() => {}).catch(err => {
      console.log(err);
    });
  }
}
/* STYLES */


const Card = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  height: 140px;
  width: 100px;
  margin: 20px;

  border-radius: 5px;

  background-color: #36454f;
`;
const Title = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().h5)`
  text-align: center;
  color: #e5e5e5;
`;
const ButtonsContainer = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  justify-content: space-between;

  margin: 10%;
`;
const ButtonLeft = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  height: 0;
  width: 0;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-right: 25px solid #c4c4c4;
  :hover {
    cursor: pointer;
  }
`;
const ButtonRight = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  height: 0;
  width: 0;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 25px solid #c4c4c4;
  :hover {
    cursor: pointer;
  }
`;

/***/ }),

/***/ "./components/slider-visual.js":
/*!*************************************!*\
  !*** ./components/slider-visual.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SliderComponent; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slider_visual_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider-visual.module.css */ "./components/slider-visual.module.css");
/* harmony import */ var _slider_visual_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_slider_visual_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Dev\\GitHub\\slider-control\\frontend\\components\\slider-visual.js";





const fetcher = (...args) => fetch(...args).then(res => res.json());

function SliderComponent() {
  //Get stepper positions from backend
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()('/api/movement/positions/slider-position', fetcher, {
    refreshInterval: 1000
  });
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "failed to load"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 21
  }, this);
  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 21
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderVis, {
    coords: data.positions.motorPositions
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

function SliderVis({
  coords
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let translationStepTotal = coords.mot1 + coords.mot2;
    let translationNumber = translationStepTotal / 190000;
    let translationPercent = Math.round(translationNumber * 100);
    let rotationStepTotal = (coords.mot2 - coords.mot1) / 2;
    let rotationNumber = rotationStepTotal / 12000;
    let rotationPercent = Math.round(rotationNumber * 100);
    let rotationDegrees = Math.round(rotationPercent * 3.6);
    console.log(`Translation: ${translationPercent}`);
    console.log(`Rotation: ${rotationDegrees}`);
    document.getElementById("carriage").style.left = `calc(${translationPercent}% - 40px)`;
    document.getElementById("camera").style.transform = `rotate(${rotationDegrees}deg)`;
  }, [coords]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slider, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EndLeft, {
      className: `${(_slider_visual_module_css__WEBPACK_IMPORTED_MODULE_4___default().end)}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BarTop, {
      className: `${(_slider_visual_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BarBottom, {
      className: `${(_slider_visual_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EndRight, {
      className: `${(_slider_visual_module_css__WEBPACK_IMPORTED_MODULE_4___default().end)}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Track, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Carriage, {
        id: "carriage",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Camera, {
          id: "camera",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DirectionIndicator, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
/* STYLES */


const Slider = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  position: relative;
  width: 70%;
  max-width: 500px;
  height: 60px;
`;
const EndLeft = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)``;
const EndRight = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  position: absolute;
  top: 0;
  left: 100%;
`;
const BarTop = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  position: absolute;
  top: 15px;
  left: 20px;
`;
const BarBottom = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  position: absolute;
  bottom: 15px;
  left: 20px;
`;
const Track = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    position: absolute;
    top: 0;
    left: 60px;

    width: calc(100% - 60px);
    height: 60px;
`;
const Carriage = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  height: 40px;
  width: 40px;
  background-color: #36454f;

  position: absolute;
  top: 10px;
`;
const Camera = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #c4c4c4;

  position: relative;
  top: 5px;
  left: 5px;

  transform: rotate(30deg);
`;
const DirectionIndicator = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  height: 10px;
  width: 3px;
  background-color: white;

  position: absolute;
  top: -4px;
  left: 12.5px;
`;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_slider_visual_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/slider-visual.js */ "./components/slider-visual.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_positioning_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/positioning-card */ "./components/positioning-card.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/button */ "./components/button.js");
/* harmony import */ var _components_buttons_home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/buttons/home */ "./components/buttons/home.js");
/* harmony import */ var _components_buttons_unlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/buttons/unlock */ "./components/buttons/unlock.js");
/* harmony import */ var _components_buttons_add_keyframe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/buttons/add-keyframe */ "./components/buttons/add-keyframe.js");

var _jsxFileName = "D:\\Dev\\GitHub\\slider-control\\frontend\\pages\\index.js";











function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_slider_visual_js__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_positioning_card__WEBPACK_IMPORTED_MODULE_6__.default, {
        isMove: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_positioning_card__WEBPACK_IMPORTED_MODULE_6__.default, {
        isMove: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_buttons_unlock__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_buttons_home__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_buttons_add_keyframe__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
/* STYLES */

const PageContainer = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0 auto;

  background-color: #111827;
`;
const Row = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

/***/ }),

/***/ "./components/slider-visual.module.css":
/*!*********************************************!*\
  !*** ./components/slider-visual.module.css ***!
  \*********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"end": "slider-visual_end__TRkh_",
	"bar": "slider-visual_bar__3bIIZ"
};


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL2J1dHRvbnMvYWRkLWtleWZyYW1lLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9idXR0b25zL2hvbWUuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL2J1dHRvbnMvdW5sb2NrLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL3Bvc2l0aW9uaW5nLWNhcmQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL3NsaWRlci12aXN1YWwuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9zbGlkZXItdmlzdWFsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInN3clwiIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInRleHQiLCJ0ZXh0SWQiLCJidXR0b25JZCIsIndoZW5DbGlja2VkIiwiQnV0dG9uQ29udGFpbmVyIiwic3R5bGVkIiwiQnV0dG9uVGV4dCIsImFwaUJhc2VVcmwiLCJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJCdXR0b25FeHBvcnQiLCJkYXRhIiwiZXJyb3IiLCJ1c2VTV1IiLCJyZWZyZXNoSW50ZXJ2YWwiLCJBZGRLZXlmcmFtZUJ1dHRvbiIsInBvcyIsInVzZUVmZmVjdCIsImJ1dHRvbkVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoYW5kbGVDbGljayIsInRleHRFbGVtZW50IiwiYXhpb3MiLCJtb3QxIiwicG9zaXRpb25zIiwibW90b3JQb3NpdGlvbnMiLCJtb3QyIiwic2V0VGltZW91dCIsImlubmVySFRNTCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIlRyYXZlbEhvbWVCdXR0b24iLCJVbmxvY2tNb3RvcnNCdXR0b24iLCJIZWFkZXIiLCJDYW1lcmFTbGlkZXJUZXh0IiwiUG9zaXRpb25pbmdDYXJkIiwiaXNNb3ZlIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZU1vdXNlRG93biIsImFwaUJhc2VVUkwiLCJpc0xlZnQiLCJDYXJkIiwiVGl0bGUiLCJCdXR0b25zQ29udGFpbmVyIiwiQnV0dG9uTGVmdCIsIkJ1dHRvblJpZ2h0IiwiU2xpZGVyQ29tcG9uZW50IiwiU2xpZGVyVmlzIiwiY29vcmRzIiwidHJhbnNsYXRpb25TdGVwVG90YWwiLCJ0cmFuc2xhdGlvbk51bWJlciIsInRyYW5zbGF0aW9uUGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsInJvdGF0aW9uU3RlcFRvdGFsIiwicm90YXRpb25OdW1iZXIiLCJyb3RhdGlvblBlcmNlbnQiLCJyb3RhdGlvbkRlZ3JlZXMiLCJsZWZ0IiwidHJhbnNmb3JtIiwic3R5bGVzIiwiU2xpZGVyIiwiRW5kTGVmdCIsIkVuZFJpZ2h0IiwiQmFyVG9wIiwiQmFyQm90dG9tIiwiVHJhY2siLCJDYXJyaWFnZSIsIkNhbWVyYSIsIkRpcmVjdGlvbkluZGljYXRvciIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsInNpemVzIiwibGF5b3V0IiwicGVyY2VudFNpemVzIiwibSIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIndpZHRocyIsInMiLCJraW5kIiwid2lkdGgiLCJ3IiwicCIsInNyY1NldCIsImdldFdpZHRocyIsImxhc3QiLCJpIiwic3JjIiwibG9hZCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwiY29uZmlnTG9hZGVyIiwidW5vcHRpbWl6ZWQiLCJwcmlvcml0eSIsImFsbCIsInJlc3QiLCJ1bnNpemVkIiwiQm9vbGVhbiIsIkpTT04iLCJsb2FkaW5nIiwiaXNMYXp5Iiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW1nU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25maWdEb21haW5zIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJzZXRSZWYiLCJlbCIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsIkhvbWUiLCJQYWdlQ29udGFpbmVyIiwiUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBRWUsU0FBU0EsTUFBVCxDQUFnQjtBQUFFQyxNQUFGO0FBQVFDLFFBQVI7QUFBZ0JDLFVBQWhCO0FBQTBCQztBQUExQixDQUFoQixFQUF5RDtBQUN0RSxzQkFDRSw4REFBQyxlQUFEO0FBQWlCLE1BQUUsRUFBRUQsUUFBckI7QUFBK0IsV0FBTyxFQUFFLE1BQU07QUFBRUMsaUJBQVc7QUFBSSxLQUEvRDtBQUFBLDJCQUNFLDhEQUFDLFVBQUQ7QUFBWSxRQUFFLEVBQUVGLE1BQWhCO0FBQUEsZ0JBQTBCRDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7QUFFRCxNQUFNSSxlQUFlLEdBQUdDLDhEQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVpBO0FBY0EsTUFBTUMsVUFBVSxHQUFHRCw0REFBUztBQUM1QjtBQUNBO0FBQ0EsR0FIQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNRSxVQUFVLEdBQUcseUJBQW5COztBQUVBLE1BQU1DLE9BQU8sR0FBRyxDQUFDLEdB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LDZCQUNFLDhEQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7QUFFRDs7QUFDQSxNQUFNQyxhQUFhLEdBQUcxTCw4REFBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUkE7QUFVQSxNQUFNMkwsR0FBRyxHQUFHM0wsOERBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsQ0FKQSxDOzs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkEsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0MsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oeyB0ZXh0LCB0ZXh0SWQsIGJ1dHRvbklkLCB3aGVuQ2xpY2tlZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbkNvbnRhaW5lciBpZD17YnV0dG9uSWR9IG9uQ2xpY2s9eygpID0+IHsgd2hlbkNsaWNrZWQoKSB9fT5cbiAgICAgIDxCdXR0b25UZXh0IGlkPXt0ZXh0SWR9ID57dGV4dH08L0J1dHRvblRleHQ+XG4gICAgPC9CdXR0b25Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuXG4gIHBhZGRpbmc6IGF1dG87XG4gIG1hcmdpbjogMCAyMHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmODcxNzE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuYDtcblxuY29uc3QgQnV0dG9uVGV4dCA9IHN0eWxlZC5wYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgYDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2J1dHRvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGFwaUJhc2VVcmwgPSBcIi9hcGkvbW92ZW1lbnQvcG9zaXRpb25zXCI7XG5cbmNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uRXhwb3J0KCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXCIvYXBpL21vdmVtZW50L3Bvc2l0aW9ucy9zbGlkZXItcG9zaXRpb25cIiwgZmV0Y2hlciwge1xuICAgIHJlZnJlc2hJbnRlcnZhbDogMTAwMCxcbiAgfSk7XG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWlsZWQgdG8gbG9hZDwvZGl2PlxuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cblxuICByZXR1cm4gPEFkZEtleWZyYW1lQnV0dG9uIHBvcz17ZGF0YX0gLz5cbn1cblxuZnVuY3Rpb24gQWRkS2V5ZnJhbWVCdXR0b24oeyBwb3MgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQta2V5ZnJhbWVcIik7XG4gICAgYnV0dG9uRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM2QjcyODBcIjtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgdGV4dElkPXtcImFkZC1rZXlmcmFtZS10ZXh0XCJ9XG4gICAgICBidXR0b25JZD17XCJhZGQta2V5ZnJhbWVcIn1cbiAgICAgIHRleHQ9e1wiQWRkIEtleWZyYW1lXCJ9XG4gICAgICB3aGVuQ2xpY2tlZD17KCkgPT4ge1xuICAgICAgICBoYW5kbGVDbGljayhwb3MpO1xuICAgICAgfX1cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGljayhwb3MpIHtcbiAgbGV0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQta2V5ZnJhbWUtdGV4dFwiKTtcbiAgbGV0IGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1rZXlmcmFtZVwiKTtcbiAgYXhpb3NcbiAgICAucG9zdChgJHthcGlCYXNlVXJsfS9hZGQta2V5ZnJhbWVgLCB7XG4gICAgICBtb3QxOiBwb3MucG9zaXRpb25zLm1vdG9yUG9zaXRpb25zLm1vdDEsXG4gICAgICBtb3QyOiBwb3MucG9zaXRpb25zLm1vdG9yUG9zaXRpb25zLm1vdDIsXG4gICAgfSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBidXR0b25FbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzEwQjk4MVwiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRleHRFbGVtZW50LmlubmVySFRNTCA9IFwiU3VjY2VzcyFcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM2QjcyODBcIjtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRleHRFbGVtZW50LmlubmVySFRNTCA9IFwiQWRkIEtleWZyYW1lXCI7XG4gICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9LCAxNTApO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG5cbiAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjREMyNjI2XCI7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0ZXh0RWxlbWVudC5pbm5lckhUTUwgPSBcIkVycm9yXCI7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM2QjcyODBcIjtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRleHRFbGVtZW50LmlubmVySFRNTCA9IFwiQWRkIEtleWZyYW1lXCI7XG4gICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9LCAxNTApO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2J1dHRvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGFwaUJhc2VVcmwgPSBcIi9hcGkvbW92ZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhdmVsSG9tZUJ1dHRvbigpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhdmVsLWhvbWVcIik7XG4gICAgYnV0dG9uRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM2QjcyODBcIjtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgdGV4dElkPXtcInRyYXZlbC1ob21lLXRleHRcIn1cbiAgICAgIGJ1dHRvbklkPXtcInRyYXZlbC1ob21lXCJ9XG4gICAgICB0ZXh0PXtcIlRyYXZlbCBIb21lXCJ9XG4gICAgICB3aGVuQ2xpY2tlZD17KCkgPT4ge1xuICAgICAgICBoYW5kbGVDbGljaygpO1xuICAgICAgfX1cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgbGV0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmF2ZWwtaG9tZS10ZXh0XCIpO1xuICBsZXQgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhdmVsLWhvbWVcIik7XG4gIGF4aW9zXG4gICAgLmdldChgJHthcGlCYXNlVXJsfS9ob21lYClcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBidXR0b25FbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzEwQjk4MVwiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRleHRFbGVtZW50LmlubmVySFRNTCA9IFwiU3VjY2VzcyFcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM2QjcyODBcIjtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRleHRFbGVtZW50LmlubmVySFRNTCA9IFwiVHJhdmVsIEhvbWVcIjtcbiAgICAgICAgICB9LCAxNTApO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0sIDE1MCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcblxuICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNEQzI2MjZcIjtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRleHRFbGVtZW50LmlubmVySFRNTCA9IFwiRXJyb3JcIjtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBidXR0b25FbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzZCNzI4MFwiO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gXCJUcmF2ZWwgSG9tZVwiO1xuICAgICAgICAgIH0sIDE1MCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSwgMTUwKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBhcGlCYXNlVXJsID0gXCIvYXBpL21vdmVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVubG9ja01vdG9yc0J1dHRvbigpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5sb2NrLW1vdG9yc1wiKTtcbiAgICBidXR0b25FbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzZCNzI4MFwiO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uXG4gICAgICB0ZXh0SWQ9e1widW5sb2NrLW1vdG9ycy10ZXh0XCJ9XG4gICAgICBidXR0b25JZD17XCJ1bmxvY2stbW90b3JzXCJ9XG4gICAgICB0ZXh0PXtcIlVubG9jayBNb3RvcnNcIn1cbiAgICAgIHdoZW5DbGlja2VkPXsoKSA9PiB7XG4gICAgICAgIGhhbmRsZUNsaWNrKCk7XG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICBsZXQgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVubG9jay1tb3RvcnMtdGV4dFwiKTtcbiAgbGV0IGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVubG9jay1tb3RvcnNcIik7XG4gIGF4aW9zXG4gICAgLmdldChgJHthcGlCYXNlVXJsfS91bmxvY2tgKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMTBCOTgxXCI7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gXCJTdWNjZXNzIVwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBidXR0b25FbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzZCNzI4MFwiO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gXCJVbmxvY2sgTW90b3JzXCI7XG4gICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9LCAxNTApO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG5cbiAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjREMyNjI2XCI7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0ZXh0RWxlbWVudC5pbm5lckhUTUwgPSBcIkVycm9yXCI7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM2QjcyODBcIjtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRleHRFbGVtZW50LmlubmVySFRNTCA9IFwiVW5sb2NrIE1vdG9yc1wiO1xuICAgICAgICAgIH0sIDE1MCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSwgMTUwKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIDxDYW1lcmFTbGlkZXJUZXh0PlNsaWRlciBDb250cm9sPC9DYW1lcmFTbGlkZXJUZXh0Pjtcbn1cblxuLyogU1RZTEVTICovXG5jb25zdCBDYW1lcmFTbGlkZXJUZXh0ID0gc3R5bGVkLmgxYFxuICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3VscGh1citQb2ludDp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG5cbiAgZm9udC1mYW1pbHk6ICdTdWxwaHVyIFBvaW50Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0IHRvcCwgI2VmNDQ0NCwgIzYwYTVmYSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5gO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3NpdGlvbmluZ0NhcmQoeyBpc01vdmUgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAgPFRpdGxlPntpc01vdmUgPyBcIk1vdmVcIiA6IFwiUm90YXRlXCJ9PC9UaXRsZT5cbiAgICAgIDxCdXR0b25zQ29udGFpbmVyPlxuICAgICAgICA8QnV0dG9uTGVmdFxuICAgICAgICAgIG9uUG9pbnRlclVwPXsoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVNb3VzZVVwKGlzTW92ZSwgdHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblBvaW50ZXJEb3duPXsoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVNb3VzZURvd24oaXNNb3ZlLCB0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uUmlnaHRcbiAgICAgICAgICBvblBvaW50ZXJVcD17KCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlTW91c2VVcChpc01vdmUsIGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uUG9pbnRlckRvd249eygpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZU1vdXNlRG93bihpc01vdmUsIGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9CdXR0b25zQ29udGFpbmVyPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cblxuLyogTE9HSUMgKi9cbmNvbnN0IGFwaUJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvbW92ZW1lbnRcIjtcblxuZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGlzTW92ZSwgaXNMZWZ0KSB7XG4gIGlmIChpc01vdmUpIHtcbiAgICBheGlvc1xuICAgICAgLmdldChgJHthcGlCYXNlVVJMfS9jb250aW51b3VzLXRyYW5zbGF0ZS9wcmVzcz9mb3J3YXJkPSR7aXNMZWZ0fWApXG4gICAgICAudGhlbigoKSA9PiB7fSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBheGlvc1xuICAgIC5nZXQoYCR7YXBpQmFzZVVSTH0vY29udGludW91cy1yb3RhdGUvcHJlc3M/Y2xvY2t3aXNlPSR7aXNMZWZ0ID8gZmFsc2UgOiB0cnVlfWApXG4gICAgLnRoZW4oKCkgPT4ge30pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlTW91c2VVcChpc01vdmUsIGlzTGVmdCkge1xuICBpZiAoaXNNb3ZlKSB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYCR7YXBpQmFzZVVSTH0vY29udGludW91cy10cmFuc2xhdGUvcmVsZWFzZT9mb3J3YXJkPSR7aXNMZWZ0fWApXG4gICAgICAudGhlbigoKSA9PiB7fSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBheGlvc1xuICAgIC5nZXQoYCR7YXBpQmFzZVVSTH0vY29udGludW91cy1yb3RhdGUvcmVsZWFzZT9jbG9ja3dpc2U9JHtpc0xlZnQgPyBmYWxzZSA6IHRydWV9YClcbiAgICAudGhlbigoKSA9PiB7fSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKiBTVFlMRVMgKi9cbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDE0MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMjBweDtcblxuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDU0ZjtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmg1YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZTVlNWU1O1xuYDtcblxuY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBtYXJnaW46IDEwJTtcbmA7XG5cbmNvbnN0IEJ1dHRvbkxlZnQgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBib3JkZXItdG9wOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDI1cHggc29saWQgI2M0YzRjNDtcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IEJ1dHRvblJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDI1cHggc29saWQgI2M0YzRjNDtcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NsaWRlci12aXN1YWwubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbmNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyQ29tcG9uZW50ICgpIHtcbiAgICAvL0dldCBzdGVwcGVyIHBvc2l0aW9ucyBmcm9tIGJhY2tlbmRcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCcvYXBpL21vdmVtZW50L3Bvc2l0aW9ucy9zbGlkZXItcG9zaXRpb24nLCBmZXRjaGVyLCB7IHJlZnJlc2hJbnRlcnZhbDogMTAwMCB9KVxuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFpbGVkIHRvIGxvYWQ8L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG5cbiAgcmV0dXJuIDxTbGlkZXJWaXMgY29vcmRzPXtkYXRhLnBvc2l0aW9ucy5tb3RvclBvc2l0aW9uc30vPlxufVxuXG5mdW5jdGlvbiBTbGlkZXJWaXMoeyBjb29yZHMgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0cmFuc2xhdGlvblN0ZXBUb3RhbCA9IGNvb3Jkcy5tb3QxICsgY29vcmRzLm1vdDI7XG4gICAgbGV0IHRyYW5zbGF0aW9uTnVtYmVyID0gdHJhbnNsYXRpb25TdGVwVG90YWwgLyAxOTAwMDA7XG4gICAgbGV0IHRyYW5zbGF0aW9uUGVyY2VudCA9IE1hdGgucm91bmQodHJhbnNsYXRpb25OdW1iZXIgKiAxMDApO1xuXG4gICAgbGV0IHJvdGF0aW9uU3RlcFRvdGFsID0gKGNvb3Jkcy5tb3QyIC0gY29vcmRzLm1vdDEpIC8gMjtcbiAgICBsZXQgcm90YXRpb25OdW1iZXIgPSByb3RhdGlvblN0ZXBUb3RhbCAvIDEyMDAwO1xuICAgIGxldCByb3RhdGlvblBlcmNlbnQgPSBNYXRoLnJvdW5kKHJvdGF0aW9uTnVtYmVyICogMTAwKTtcbiAgICBsZXQgcm90YXRpb25EZWdyZWVzID0gTWF0aC5yb3VuZChyb3RhdGlvblBlcmNlbnQgKiAzLjYpO1xuXG4gICAgY29uc29sZS5sb2coYFRyYW5zbGF0aW9uOiAke3RyYW5zbGF0aW9uUGVyY2VudH1gKTtcbiAgICBjb25zb2xlLmxvZyhgUm90YXRpb246ICR7cm90YXRpb25EZWdyZWVzfWApO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImNhcnJpYWdlXCJcbiAgICApLnN0eWxlLmxlZnQgPSBgY2FsYygke3RyYW5zbGF0aW9uUGVyY2VudH0lIC0gNDBweClgO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJjYW1lcmFcIlxuICAgICkuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3JvdGF0aW9uRGVncmVlc31kZWcpYDtcbiAgfSwgW2Nvb3Jkc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNsaWRlcj5cbiAgICAgIDxFbmRMZWZ0IGNsYXNzTmFtZT17YCR7c3R5bGVzLmVuZH1gfSAvPlxuICAgICAgPEJhclRvcCBjbGFzc05hbWU9e2Ake3N0eWxlcy5iYXJ9YH0gLz5cbiAgICAgIDxCYXJCb3R0b20gY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmFyfWB9IC8+XG4gICAgICA8RW5kUmlnaHQgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZW5kfWB9IC8+XG4gICAgICA8VHJhY2s+XG4gICAgICAgIDxDYXJyaWFnZSBpZD1cImNhcnJpYWdlXCI+XG4gICAgICAgICAgPENhbWVyYSBpZD1cImNhbWVyYVwiPlxuICAgICAgICAgICAgPERpcmVjdGlvbkluZGljYXRvciAvPlxuICAgICAgICAgIDwvQ2FtZXJhPlxuICAgICAgICA8L0NhcnJpYWdlPlxuICAgICAgPC9UcmFjaz5cbiAgICA8L1NsaWRlcj5cbiAgKTtcbn1cblxuLyogU1RZTEVTICovXG5jb25zdCBTbGlkZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA3MCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNjBweDtcbmA7XG5cbmNvbnN0IEVuZExlZnQgPSBzdHlsZWQuZGl2YGA7XG5jb25zdCBFbmRSaWdodCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxMDAlO1xuYDtcbmNvbnN0IEJhclRvcCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAyMHB4O1xuYDtcbmNvbnN0IEJhckJvdHRvbSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNXB4O1xuICBsZWZ0OiAyMHB4O1xuYDtcblxuY29uc3QgVHJhY2sgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogNjBweDtcblxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgICBoZWlnaHQ6IDYwcHg7XG5gO1xuXG5jb25zdCBDYXJyaWFnZSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjQ1NGY7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG5gO1xuXG5jb25zdCBDYW1lcmEgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xuXG4gIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbmA7XG5cbmNvbnN0IERpcmVjdGlvbkluZGljYXRvciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IDEyLjVweDtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgY29uc3QgcGVyY2VudFNpemVzID0gWy4uLnNpemVzLm1hdGNoQWxsKC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nKV0ubWFwKChtKSA9PlxuICAgICAgcGFyc2VJbnQobVsyXSlcbiAgICApXG4gICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoXG4gICAgICAgICAgKHMpID0+IHMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICksXG4gICAgICAgIGtpbmQ6ICd3JyxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBhbGxTaXplcywga2luZDogJ3cnIH1cbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIGxvYWRlcjogSW1hZ2VMb2FkZXJcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICBzcmM6IHN0cmluZ1xuICBzcmNTZXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbiAgbG9hZGVyLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMsIHNyY1NldDogdW5kZWZpbmVkLCBzaXplczogdW5kZWZpbmVkIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpXG4gIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMVxuXG4gIHJldHVybiB7XG4gICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgc3JjU2V0OiB3aWR0aHNcbiAgICAgIC5tYXAoXG4gICAgICAgICh3LCBpKSA9PlxuICAgICAgICAgIGAke2xvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHcgfSl9ICR7XG4gICAgICAgICAgICBraW5kID09PSAndycgPyB3IDogaSArIDFcbiAgICAgICAgICB9JHtraW5kfWBcbiAgICAgIClcbiAgICAgIC5qb2luKCcsICcpLFxuXG4gICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgc3JjOiBsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3aWR0aHNbbGFzdF0gfSksXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICBzaXplczogdW5kZWZpbmVkLFxuICB9XG5cbiAgaWYgKGlzVmlzaWJsZSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgIHNyYyxcbiAgICAgIHVub3B0aW1pemVkLFxuICAgICAgbGF5b3V0LFxuICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgIHNpemVzLFxuICAgICAgbG9hZGVyLFxuICAgIH0pXG4gIH1cblxuICBpZiAodW5zaXplZCkge1xuICAgIHdyYXBwZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIHNpemVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBpbWdTdHlsZSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHt0b0Jhc2U2NChzaXplclN2Zyl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7IWlzVmlzaWJsZSAmJiAoXG4gICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHsuLi5nZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgICBsb2FkZXIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgICAgICBzaXplcz17c2l6ZXN9XG4gICAgICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgKX1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IFNsaWRlclZpcyBmcm9tIFwiLi4vY29tcG9uZW50cy9zbGlkZXItdmlzdWFsLmpzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IFBvc2l0aW9uaW5nQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3NpdGlvbmluZy1jYXJkXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvblwiO1xuaW1wb3J0IFRyYXZlbEhvbWVCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9ob21lXCI7XG5pbXBvcnQgVW5sb2NrTW90b3JzQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvdW5sb2NrXCI7XG5pbXBvcnQgQWRkS2V5ZnJhbWVCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9hZGQta2V5ZnJhbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8UGFnZUNvbnRhaW5lcj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxTbGlkZXJWaXMgLz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxQb3NpdGlvbmluZ0NhcmQgaXNNb3ZlPXt0cnVlfSAvPlxuICAgICAgICA8UG9zaXRpb25pbmdDYXJkIGlzTW92ZT17ZmFsc2V9IC8+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxVbmxvY2tNb3RvcnNCdXR0b24gLz5cbiAgICAgICAgPFRyYXZlbEhvbWVCdXR0b24gLz5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdz5cbiAgICAgICAgPEFkZEtleWZyYW1lQnV0dG9uIC8+XG4gICAgICA8L1Jvdz5cbiAgICA8L1BhZ2VDb250YWluZXI+XG4gICk7XG59XG5cbi8qIFNUWUxFUyAqL1xuY29uc3QgUGFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE4Mjc7XG5gO1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMjBweDtcbmA7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlbmRcIjogXCJzbGlkZXItdmlzdWFsX2VuZF9fVFJraF9cIixcblx0XCJiYXJcIjogXCJzbGlkZXItdmlzdWFsX2Jhcl9fM2JJSVpcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=