/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Valentine.ttf */ "./src/Valentine.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! pasta.jpg */ "./src/pasta.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*::before,
*::after {
    box-sizing: border-box;
}

* {
    margin: 0;
}

@font-face {
    font-family: "valentine";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}

header {
    padding: 16px;
}

header nav {
    display: flex;
    justify-content: center;
    gap: 50px;
}

header button {
    border: none;
    background-color: inherit;
    font-size: 1.2rem;
    border-bottom: 2px solid transparent;
    position: relative;
    box-sizing: border-box;
    font-family: "valentine-cute";
}

header button::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 50%;
    background-color: #e9c46a;
    height: 2px;
    transition: all 0.3s ease;
}

header button:hover::before {
    left: 0;
    right: 0;
}

header button:hover {
    cursor: pointer;
}

.hero-container {
    padding: 4px 16px;
}

.hero {
    border-radius: 24px;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center;
    height: 90vh;
    width: 100%;
    background-size: cover;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    border-radius: 24px;
    opacity: 0.4;
}

.hero h1 {
    z-index: 1;
    color: #fff;
    position: relative;
    font-size: 10rem;
    font-family: valentine;
    letter-spacing: 0.2rem;
}

.restaurant-info {
    text-align: center;
    padding: 4px 16px;
    margin: 16px 0;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
}

.restaurant-info button {
    margin: 16px 0;
    background-color: inherit;
    border: 1px solid black;
    border-radius: 36px;
    padding: 8px 16px;
    font-size: 1.3rem;
}

.restaurant-info button:hover {
    background-color: #e9c46a;
    cursor: pointer;
}

.restaurant-info p {
    color: #333;
    font-size: 1.3rem;
}

.menus-container {
    display: flex;
    padding: 4px 8rem;
    margin-top: 16px;
    gap: 32px;
    margin-bottom: 40px;
}

.menus-container > div {
    flex-grow: 1;
}

.menus-container h1 {
    font-family: valentine;
    border-bottom: 1px solid #333;
    font-size: 3rem;
    color: #000;
    font-weight: 100;
    margin-bottom: 20px;
}

.menus-container h3 {
    font-size: 1.5rem;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
}

.menus-container p {
    text-wrap: wrap;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
}

.page-title {
    font-family: valentine;
    font-size: 10rem;
    text-align: center;
    margin: 16px 0;
}

.about-content {
    width: 75%;
    margin: 0 auto;
    margin-bottom: 40px;
}

.about-text {
    text-align: center;
    font-size: 1.8rem;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,+DAA4C;AAChD;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,iBAAiB;IACjB,oCAAoC;IACpC,kBAAkB;IAClB,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,UAAU;IACV,yBAAyB;IACzB,WAAW;IACX,yBAAyB;AAC7B;;AAEA;IACI,OAAO;IACP,QAAQ;AACZ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,oEAA6C;IAC7C,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;IACd;kBACc;AAClB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,gBAAgB;IAChB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,6BAA6B;IAC7B,eAAe;IACf,WAAW;IACX,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB;kBACc;AAClB;;AAEA;IACI,eAAe;IACf;kBACc;AAClB;;AAEA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB;kBACc;AAClB","sourcesContent":["*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"valentine\";\r\n    src: url(\"Valentine.ttf\") format(\"truetype\");\r\n}\r\n\r\nheader {\r\n    padding: 16px;\r\n}\r\n\r\nheader nav {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 50px;\r\n}\r\n\r\nheader button {\r\n    border: none;\r\n    background-color: inherit;\r\n    font-size: 1.2rem;\r\n    border-bottom: 2px solid transparent;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    font-family: \"valentine-cute\";\r\n}\r\n\r\nheader button::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 50%;\r\n    right: 50%;\r\n    background-color: #e9c46a;\r\n    height: 2px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\nheader button:hover::before {\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\nheader button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.hero-container {\r\n    padding: 4px 16px;\r\n}\r\n\r\n.hero {\r\n    border-radius: 24px;\r\n    background: url(\"pasta.jpg\") no-repeat center;\r\n    height: 90vh;\r\n    width: 100%;\r\n    background-size: cover;\r\n    text-align: center;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.hero::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: #000;\r\n    border-radius: 24px;\r\n    opacity: 0.4;\r\n}\r\n\r\n.hero h1 {\r\n    z-index: 1;\r\n    color: #fff;\r\n    position: relative;\r\n    font-size: 10rem;\r\n    font-family: valentine;\r\n    letter-spacing: 0.2rem;\r\n}\r\n\r\n.restaurant-info {\r\n    text-align: center;\r\n    padding: 4px 16px;\r\n    margin: 16px 0;\r\n    font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\",\r\n        sans-serif;\r\n}\r\n\r\n.restaurant-info button {\r\n    margin: 16px 0;\r\n    background-color: inherit;\r\n    border: 1px solid black;\r\n    border-radius: 36px;\r\n    padding: 8px 16px;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.restaurant-info button:hover {\r\n    background-color: #e9c46a;\r\n    cursor: pointer;\r\n}\r\n\r\n.restaurant-info p {\r\n    color: #333;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.menus-container {\r\n    display: flex;\r\n    padding: 4px 8rem;\r\n    margin-top: 16px;\r\n    gap: 32px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.menus-container > div {\r\n    flex-grow: 1;\r\n}\r\n\r\n.menus-container h1 {\r\n    font-family: valentine;\r\n    border-bottom: 1px solid #333;\r\n    font-size: 3rem;\r\n    color: #000;\r\n    font-weight: 100;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.menus-container h3 {\r\n    font-size: 1.5rem;\r\n    font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\",\r\n        sans-serif;\r\n}\r\n\r\n.menus-container p {\r\n    text-wrap: wrap;\r\n    font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\",\r\n        sans-serif;\r\n}\r\n\r\n.page-title {\r\n    font-family: valentine;\r\n    font-size: 10rem;\r\n    text-align: center;\r\n    margin: 16px 0;\r\n}\r\n\r\n.about-content {\r\n    width: 75%;\r\n    margin: 0 auto;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.about-text {\r\n    text-align: center;\r\n    font-size: 1.8rem;\r\n    font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\",\r\n        sans-serif;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ component)
/* harmony export */ });
function component() {
    const content = document.querySelector("#content");

    const pageTitle = document.createElement("h1");
    const aboutContent = document.createElement("div");
    const para = document.createElement("p");

    pageTitle.classList.add("page-title");
    pageTitle.textContent = "About";
    para.classList.add("about-text");
    aboutContent.classList.add("about-content");
    para.innerText = `Welcome to Pasta La Vista, where your taste buds say “ciao” to ordinary and “buongiorno” to extraordinary! 🍝

    Our chefs are the Michelangelo of marinara, crafting each dish with love, laughter, and a pinch of Italian magic. From classic spaghetti to our secret family recipes, every meal is a masterpiece.
    
    Join us for a cozy dinner, a family feast, or a solo carb-loading session. Can’t make it? We’ll bring the pasta party to you with our speedy delivery service.`;

    aboutContent.appendChild(para);
    content.appendChild(pageTitle);
    content.appendChild(aboutContent);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ component)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



function createElement(tag, className, content) {
    const element = document.createElement(tag);
    if (content) element.textContent = content;
    if (className) element.classList.add(className);

    return element;
}

function component() {
    const content = document.querySelector("#content");
    const heroContainer = createElement("div", "hero-container");
    const hero = createElement("div", "hero");
    const restaurantTitle = createElement("h1", "", "Pasta La Vista");
    const main = createElement("main", "restaurant-info");
    const infoHeading = createElement("h1", "", "Welcome");
    const infoPara = createElement(
        "p",
        "",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sunt non, maiores quia earum repudiandae distinctio soluta. Tenetur hic officiis eveniet obcaecati suscipit blanditiis facere, vitae distinctio a perferendis molestias sequi cupiditate doloremque voluptate quod error modi esse officia fugit ea! Suscipit harum error iusto fugiat nesciunt, reiciendis asperiores repellendus."
    );
    const infoBtn = createElement("button", "", "View Our Menus");

    content.appendChild(heroContainer);
    heroContainer.appendChild(hero);
    hero.appendChild(restaurantTitle);
    content.appendChild(main);
    main.appendChild(infoHeading);
    main.appendChild(infoPara);
    main.appendChild(infoBtn);

    infoBtn.addEventListener("click", () => {
        content.innerHTML = "";
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ component)
/* harmony export */ });
/* harmony import */ var _menu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.jpg */ "./src/menu.jpg");
/* harmony import */ var _pastaMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pastaMenu */ "./src/pastaMenu.js");
/* harmony import */ var _pizzaMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pizzaMenu */ "./src/pizzaMenu.js");




function component() {
    const content = document.querySelector("#content");
    const heroContainer = document.createElement("div");
    const hero = document.createElement("div");
    const pageTitle = document.createElement("h1");
    const menusContainer = document.createElement("div");
    const pastasContainer = document.createElement("div");
    const pizzasContainer = document.createElement("div");
    const pastasHeading = document.createElement("h1");
    const pizzasHeading = document.createElement("h1");
    const pastaMenuItemContainer = document.createElement("div");
    const pizzaMenuItemContainer = document.createElement("div");

    function createMenuItem(item, container) {
        const heading = document.createElement("h3");
        const para = document.createElement("p");

        const menuItemName = document.createTextNode(
            `${item.name} - ${item.price}`
        );
        const menuItemIngredients = document.createTextNode(item.ingredients);

        heading.appendChild(menuItemName);
        para.appendChild(menuItemIngredients);
        container.appendChild(heading);
        container.appendChild(para);
    }

    _pastaMenu__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((item) => {
        createMenuItem(item, pastaMenuItemContainer);
    });

    _pizzaMenu__WEBPACK_IMPORTED_MODULE_2__["default"].forEach((item) => {
        createMenuItem(item, pizzaMenuItemContainer);
    });

    heroContainer.classList.add("hero-container");
    hero.classList.add("hero");
    pageTitle.textContent = "Menu";
    hero.style.height = "45vh";
    hero.style.backgroundImage = `url(${_menu_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
    menusContainer.classList.add("menus-container");
    pastasHeading.textContent = "Pastas";
    pizzasHeading.textContent = "Pizzas";

    content.appendChild(heroContainer);
    heroContainer.appendChild(hero);
    hero.appendChild(pageTitle);
    pastasContainer.appendChild(pastasHeading);
    pizzasContainer.appendChild(pizzasHeading);
    menusContainer.appendChild(pastasContainer);
    pastasContainer.appendChild(pastaMenuItemContainer);
    pizzasContainer.appendChild(pizzaMenuItemContainer);
    menusContainer.appendChild(pizzasContainer);
    content.appendChild(menusContainer);
}


/***/ }),

/***/ "./src/pastaMenu.js":
/*!**************************!*\
  !*** ./src/pastaMenu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pastaMenu = [
    {
        name: "Spaghetti Carbonara",
        price: 450,
        ingredients: [
            "Spaghetti",
            "pancetta",
            "eggs",
            "Parmesan cheese",
            "black pepper",
        ],
    },
    {
        name: "Fettuccine Alfredo",
        price: 500,
        ingredients: [
            "Fettuccine",
            "butter",
            "heavy cream",
            "Parmesan cheese",
            "garlic",
        ],
    },
    {
        name: "Penne Arrabbiata",
        price: 400,
        ingredients: [
            "Penne",
            "tomatoes",
            "garlic",
            "red chili flakes",
            "olive oil",
            "parsley",
        ],
    },
    {
        name: "Lasagna Bolognese",
        price: 600,
        ingredients: [
            "Lasagna noodles",
            "ground beef",
            "tomatoes",
            "onions",
            "garlic",
            "béchamel sauce",
            "Parmesan cheese",
        ],
    },
    {
        name: "Pesto Linguine",
        price: 450,
        ingredients: [
            "Linguine",
            "basil pesto",
            "pine nuts",
            "Parmesan cheese",
            "garlic",
            "olive oil",
        ],
    },
    {
        name: "Ravioli di Ricotta e Spinaci",
        price: 550,
        ingredients: [
            "Ravioli",
            "ricotta cheese",
            "spinach",
            "Parmesan cheese",
            "nutmeg",
            "butter sage sauce",
        ],
    },
    {
        name: "Seafood Marinara",
        price: 650,
        ingredients: [
            "Spaghetti",
            "shrimp",
            "mussels",
            "calamari",
            "tomatoes",
            "garlic",
            "white wine",
            "parsley",
        ],
    },
    {
        name: "Gnocchi al Pomodoro",
        price: 450,
        ingredients: [
            "Gnocchi",
            "tomatoes",
            "garlic",
            "basil",
            "olive oil",
            "Parmesan cheese",
        ],
    },
    {
        name: "Tagliatelle al Funghi",
        price: 500,
        ingredients: [
            "Tagliatelle",
            "mixed mushrooms",
            "garlic",
            "white wine",
            "cream",
            "Parmesan cheese",
        ],
    },
    {
        name: "Tortellini in Brodo",
        price: 550,
        ingredients: [
            "Tortellini",
            "chicken broth",
            "Parmesan cheese",
            "nutmeg",
        ],
    },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pastaMenu);


/***/ }),

/***/ "./src/pizzaMenu.js":
/*!**************************!*\
  !*** ./src/pizzaMenu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pizzaMenu = [
    {
        name: "Margherita",
        price: 8.99,
        ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Basil"],
    },
    {
        name: "Pepperoni",
        price: 10.99,
        ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni"],
    },
    {
        name: "BBQ Chicken",
        price: 12.99,
        ingredients: [
            "BBQ Sauce",
            "Mozzarella Cheese",
            "Grilled Chicken",
            "Red Onions",
            "Cilantro",
        ],
    },
    {
        name: "Veggie",
        price: 9.99,
        ingredients: [
            "Tomato Sauce",
            "Mozzarella Cheese",
            "Bell Peppers",
            "Olives",
            "Mushrooms",
            "Onions",
        ],
    },
    {
        name: "Hawaiian",
        price: 11.99,
        ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Ham", "Pineapple"],
    },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pizzaMenu);


/***/ }),

/***/ "./src/Valentine.ttf":
/*!***************************!*\
  !*** ./src/Valentine.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a46e3c635a924dd30eeb.ttf";

/***/ }),

/***/ "./src/menu.jpg":
/*!**********************!*\
  !*** ./src/menu.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9dc1a24ea4d2f0d45953.jpg";

/***/ }),

/***/ "./src/pasta.jpg":
/*!***********************!*\
  !*** ./src/pasta.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7facb4c5eaf834211f8d.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");




const content = document.querySelector("#content");
const navbar = document.querySelector("nav");

navbar.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        if (event.target.id === "home") {
            content.innerHTML = "";
            (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
        } else if (event.target.id === "menu") {
            content.innerHTML = "";
            (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
        } else if (event.target.id === "about") {
            content.innerHTML = "";
            (0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
        }
    }
});

(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlHQUFnQztBQUM1RSw0Q0FBNEMsaUdBQTRCO0FBQ3hFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQUs7QUFDYixLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDK0I7QUFDSztBQUNBO0FBQ3BDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXLElBQUksV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJLGtEQUFTO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxzQ0FBSyxDQUFDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUh6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDQztBQUNDO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFJO0FBQ2hCLFVBQVU7QUFDVjtBQUNBLFlBQVksaURBQUs7QUFDakIsVUFBVTtBQUNWO0FBQ0EsWUFBWSxrREFBSztBQUNqQjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Bhc3RhTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGl6emFNZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJWYWxlbnRpbmUudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwicGFzdGEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJ2YWxlbnRpbmVcIjtcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuaGVhZGVyIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDUwcHg7XHJcbn1cclxuXHJcbmhlYWRlciBidXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiBcInZhbGVudGluZS1jdXRlXCI7XHJcbn1cclxuXHJcbmhlYWRlciBidXR0b246OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWM0NmE7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbmhlYWRlciBidXR0b246aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbmhlYWRlciBidXR0b246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGVyby1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNHB4IDE2cHg7XHJcbn1cclxuXHJcbi5oZXJvIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZXJvOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbn1cclxuXHJcbi5oZXJvIGgxIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTByZW07XHJcbiAgICBmb250LWZhbWlseTogdmFsZW50aW5lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxufVxyXG5cclxuLnJlc3RhdXJhbnQtaW5mbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcclxuICAgIG1hcmdpbjogMTZweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsXHJcbiAgICAgICAgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnJlc3RhdXJhbnQtaW5mbyBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLnJlc3RhdXJhbnQtaW5mbyBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5YzQ2YTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnJlc3RhdXJhbnQtaW5mbyBwIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuXHJcbi5tZW51cy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDRweCA4cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGdhcDogMzJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5tZW51cy1jb250YWluZXIgPiBkaXYge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4ubWVudXMtY29udGFpbmVyIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YWxlbnRpbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5tZW51cy1jb250YWluZXIgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIixcclxuICAgICAgICBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubWVudXMtY29udGFpbmVyIHAge1xyXG4gICAgdGV4dC13cmFwOiB3cmFwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsXHJcbiAgICAgICAgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnBhZ2UtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhbGVudGluZTtcclxuICAgIGZvbnQtc2l6ZTogMTByZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE2cHggMDtcclxufVxyXG5cclxuLmFib3V0LWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmFib3V0LXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIixcclxuICAgICAgICBzYW5zLXNlcmlmO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsK0RBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG9FQUE2QztJQUM3QyxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZDtrQkFDYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQjtrQkFDYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZjtrQkFDYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakI7a0JBQ2M7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwidmFsZW50aW5lXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIlZhbGVudGluZS50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwidmFsZW50aW5lLWN1dGVcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgYnV0dG9uOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgcmlnaHQ6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5YzQ2YTtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBidXR0b246aG92ZXI6OmJlZm9yZSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcInBhc3RhLmpwZ1xcXCIpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogOTB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm86OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbi5oZXJvIGgxIHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxMHJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhbGVudGluZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RhdXJhbnQtaW5mbyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNHB4IDE2cHg7XFxyXFxuICAgIG1hcmdpbjogMTZweCAwO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkdpbGwgU2Fuc1xcXCIsIFxcXCJHaWxsIFNhbnMgTVRcXFwiLCBDYWxpYnJpLCBcXFwiVHJlYnVjaGV0IE1TXFxcIixcXHJcXG4gICAgICAgIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5yZXN0YXVyYW50LWluZm8gYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luOiAxNnB4IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xcclxcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yZXN0YXVyYW50LWluZm8gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5YzQ2YTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdGF1cmFudC1pbmZvIHAge1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51cy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiA0cHggOHJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gICAgZ2FwOiAzMnB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudXMtY29udGFpbmVyID4gZGl2IHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudXMtY29udGFpbmVyIGgxIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhbGVudGluZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51cy1jb250YWluZXIgaDMge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgQ2FsaWJyaSwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsXFxyXFxuICAgICAgICBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudXMtY29udGFpbmVyIHAge1xcclxcbiAgICB0ZXh0LXdyYXA6IHdyYXA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLFxcclxcbiAgICAgICAgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogdmFsZW50aW5lO1xcclxcbiAgICBmb250LXNpemU6IDEwcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMTZweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLFxcclxcbiAgICAgICAgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIHBhZ2VUaXRsZS5jbGFzc0xpc3QuYWRkKFwicGFnZS10aXRsZVwiKTtcclxuICAgIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcclxuICAgIHBhcmEuY2xhc3NMaXN0LmFkZChcImFib3V0LXRleHRcIik7XHJcbiAgICBhYm91dENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImFib3V0LWNvbnRlbnRcIik7XHJcbiAgICBwYXJhLmlubmVyVGV4dCA9IGBXZWxjb21lIHRvIFBhc3RhIExhIFZpc3RhLCB3aGVyZSB5b3VyIHRhc3RlIGJ1ZHMgc2F5IOKAnGNpYW/igJ0gdG8gb3JkaW5hcnkgYW5kIOKAnGJ1b25naW9ybm/igJ0gdG8gZXh0cmFvcmRpbmFyeSEg8J+NnVxyXG5cclxuICAgIE91ciBjaGVmcyBhcmUgdGhlIE1pY2hlbGFuZ2VsbyBvZiBtYXJpbmFyYSwgY3JhZnRpbmcgZWFjaCBkaXNoIHdpdGggbG92ZSwgbGF1Z2h0ZXIsIGFuZCBhIHBpbmNoIG9mIEl0YWxpYW4gbWFnaWMuIEZyb20gY2xhc3NpYyBzcGFnaGV0dGkgdG8gb3VyIHNlY3JldCBmYW1pbHkgcmVjaXBlcywgZXZlcnkgbWVhbCBpcyBhIG1hc3RlcnBpZWNlLlxyXG4gICAgXHJcbiAgICBKb2luIHVzIGZvciBhIGNvenkgZGlubmVyLCBhIGZhbWlseSBmZWFzdCwgb3IgYSBzb2xvIGNhcmItbG9hZGluZyBzZXNzaW9uLiBDYW7igJl0IG1ha2UgaXQ/IFdl4oCZbGwgYnJpbmcgdGhlIHBhc3RhIHBhcnR5IHRvIHlvdSB3aXRoIG91ciBzcGVlZHkgZGVsaXZlcnkgc2VydmljZS5gO1xyXG5cclxuICAgIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChwYXJhKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50KTtcclxufVxyXG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgbWVudXMgZnJvbSBcIi4vbWVudVwiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSwgY29udGVudCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgIGlmIChjb250ZW50KSBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgIGlmIChjbGFzc05hbWUpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29uc3QgaGVyb0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJoZXJvLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGhlcm8gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaGVyb1wiKTtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnRUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcIlwiLCBcIlBhc3RhIExhIFZpc3RhXCIpO1xyXG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQoXCJtYWluXCIsIFwicmVzdGF1cmFudC1pbmZvXCIpO1xyXG4gICAgY29uc3QgaW5mb0hlYWRpbmcgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJcIiwgXCJXZWxjb21lXCIpO1xyXG4gICAgY29uc3QgaW5mb1BhcmEgPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgIFwicFwiLFxyXG4gICAgICAgIFwiXCIsXHJcbiAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvciBzdW50IG5vbiwgbWFpb3JlcyBxdWlhIGVhcnVtIHJlcHVkaWFuZGFlIGRpc3RpbmN0aW8gc29sdXRhLiBUZW5ldHVyIGhpYyBvZmZpY2lpcyBldmVuaWV0IG9iY2FlY2F0aSBzdXNjaXBpdCBibGFuZGl0aWlzIGZhY2VyZSwgdml0YWUgZGlzdGluY3RpbyBhIHBlcmZlcmVuZGlzIG1vbGVzdGlhcyBzZXF1aSBjdXBpZGl0YXRlIGRvbG9yZW1xdWUgdm9sdXB0YXRlIHF1b2QgZXJyb3IgbW9kaSBlc3NlIG9mZmljaWEgZnVnaXQgZWEhIFN1c2NpcGl0IGhhcnVtIGVycm9yIGl1c3RvIGZ1Z2lhdCBuZXNjaXVudCwgcmVpY2llbmRpcyBhc3BlcmlvcmVzIHJlcGVsbGVuZHVzLlwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgaW5mb0J0biA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJcIiwgXCJWaWV3IE91ciBNZW51c1wiKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlcm9Db250YWluZXIpO1xyXG4gICAgaGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvKTtcclxuICAgIGhlcm8uYXBwZW5kQ2hpbGQocmVzdGF1cmFudFRpdGxlKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGluZm9IZWFkaW5nKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW5mb1BhcmEpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChpbmZvQnRuKTtcclxuXHJcbiAgICBpbmZvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIG1lbnVzKCk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgcGl6emEgZnJvbSBcIi4vbWVudS5qcGdcIjtcclxuaW1wb3J0IHBhc3RhTWVudSBmcm9tIFwiLi9wYXN0YU1lbnVcIjtcclxuaW1wb3J0IHBpenphTWVudSBmcm9tIFwiLi9waXp6YU1lbnVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb25zdCBoZXJvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgY29uc3QgbWVudXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgcGFzdGFzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHBpenphc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBwYXN0YXNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgY29uc3QgcGl6emFzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGNvbnN0IHBhc3RhTWVudUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgcGl6emFNZW51SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oaXRlbSwgY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxyXG4gICAgICAgICAgICBgJHtpdGVtLm5hbWV9IC0gJHtpdGVtLnByaWNlfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpdGVtLmluZ3JlZGllbnRzKTtcclxuXHJcbiAgICAgICAgaGVhZGluZy5hcHBlbmRDaGlsZChtZW51SXRlbU5hbWUpO1xyXG4gICAgICAgIHBhcmEuYXBwZW5kQ2hpbGQobWVudUl0ZW1JbmdyZWRpZW50cyk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXN0YU1lbnUuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKGl0ZW0sIHBhc3RhTWVudUl0ZW1Db250YWluZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcGl6emFNZW51LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjcmVhdGVNZW51SXRlbShpdGVtLCBwaXp6YU1lbnVJdGVtQ29udGFpbmVyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGhlcm9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlcm8tY29udGFpbmVyXCIpO1xyXG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcclxuICAgIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgaGVyby5zdHlsZS5oZWlnaHQgPSBcIjQ1dmhcIjtcclxuICAgIGhlcm8uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3BpenphfSlgO1xyXG4gICAgbWVudXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnVzLWNvbnRhaW5lclwiKTtcclxuICAgIHBhc3Rhc0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIlBhc3Rhc1wiO1xyXG4gICAgcGl6emFzSGVhZGluZy50ZXh0Q29udGVudCA9IFwiUGl6emFzXCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvQ29udGFpbmVyKTtcclxuICAgIGhlcm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVybyk7XHJcbiAgICBoZXJvLmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XHJcbiAgICBwYXN0YXNDb250YWluZXIuYXBwZW5kQ2hpbGQocGFzdGFzSGVhZGluZyk7XHJcbiAgICBwaXp6YXNDb250YWluZXIuYXBwZW5kQ2hpbGQocGl6emFzSGVhZGluZyk7XHJcbiAgICBtZW51c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwYXN0YXNDb250YWluZXIpO1xyXG4gICAgcGFzdGFzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhc3RhTWVudUl0ZW1Db250YWluZXIpO1xyXG4gICAgcGl6emFzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpenphTWVudUl0ZW1Db250YWluZXIpO1xyXG4gICAgbWVudXNDb250YWluZXIuYXBwZW5kQ2hpbGQocGl6emFzQ29udGFpbmVyKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudXNDb250YWluZXIpO1xyXG59XHJcbiIsImNvbnN0IHBhc3RhTWVudSA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlNwYWdoZXR0aSBDYXJib25hcmFcIixcclxuICAgICAgICBwcmljZTogNDUwLFxyXG4gICAgICAgIGluZ3JlZGllbnRzOiBbXHJcbiAgICAgICAgICAgIFwiU3BhZ2hldHRpXCIsXHJcbiAgICAgICAgICAgIFwicGFuY2V0dGFcIixcclxuICAgICAgICAgICAgXCJlZ2dzXCIsXHJcbiAgICAgICAgICAgIFwiUGFybWVzYW4gY2hlZXNlXCIsXHJcbiAgICAgICAgICAgIFwiYmxhY2sgcGVwcGVyXCIsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJGZXR0dWNjaW5lIEFsZnJlZG9cIixcclxuICAgICAgICBwcmljZTogNTAwLFxyXG4gICAgICAgIGluZ3JlZGllbnRzOiBbXHJcbiAgICAgICAgICAgIFwiRmV0dHVjY2luZVwiLFxyXG4gICAgICAgICAgICBcImJ1dHRlclwiLFxyXG4gICAgICAgICAgICBcImhlYXZ5IGNyZWFtXCIsXHJcbiAgICAgICAgICAgIFwiUGFybWVzYW4gY2hlZXNlXCIsXHJcbiAgICAgICAgICAgIFwiZ2FybGljXCIsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJQZW5uZSBBcnJhYmJpYXRhXCIsXHJcbiAgICAgICAgcHJpY2U6IDQwMCxcclxuICAgICAgICBpbmdyZWRpZW50czogW1xyXG4gICAgICAgICAgICBcIlBlbm5lXCIsXHJcbiAgICAgICAgICAgIFwidG9tYXRvZXNcIixcclxuICAgICAgICAgICAgXCJnYXJsaWNcIixcclxuICAgICAgICAgICAgXCJyZWQgY2hpbGkgZmxha2VzXCIsXHJcbiAgICAgICAgICAgIFwib2xpdmUgb2lsXCIsXHJcbiAgICAgICAgICAgIFwicGFyc2xleVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiTGFzYWduYSBCb2xvZ25lc2VcIixcclxuICAgICAgICBwcmljZTogNjAwLFxyXG4gICAgICAgIGluZ3JlZGllbnRzOiBbXHJcbiAgICAgICAgICAgIFwiTGFzYWduYSBub29kbGVzXCIsXHJcbiAgICAgICAgICAgIFwiZ3JvdW5kIGJlZWZcIixcclxuICAgICAgICAgICAgXCJ0b21hdG9lc1wiLFxyXG4gICAgICAgICAgICBcIm9uaW9uc1wiLFxyXG4gICAgICAgICAgICBcImdhcmxpY1wiLFxyXG4gICAgICAgICAgICBcImLDqWNoYW1lbCBzYXVjZVwiLFxyXG4gICAgICAgICAgICBcIlBhcm1lc2FuIGNoZWVzZVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiUGVzdG8gTGluZ3VpbmVcIixcclxuICAgICAgICBwcmljZTogNDUwLFxyXG4gICAgICAgIGluZ3JlZGllbnRzOiBbXHJcbiAgICAgICAgICAgIFwiTGluZ3VpbmVcIixcclxuICAgICAgICAgICAgXCJiYXNpbCBwZXN0b1wiLFxyXG4gICAgICAgICAgICBcInBpbmUgbnV0c1wiLFxyXG4gICAgICAgICAgICBcIlBhcm1lc2FuIGNoZWVzZVwiLFxyXG4gICAgICAgICAgICBcImdhcmxpY1wiLFxyXG4gICAgICAgICAgICBcIm9saXZlIG9pbFwiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiUmF2aW9saSBkaSBSaWNvdHRhIGUgU3BpbmFjaVwiLFxyXG4gICAgICAgIHByaWNlOiA1NTAsXHJcbiAgICAgICAgaW5ncmVkaWVudHM6IFtcclxuICAgICAgICAgICAgXCJSYXZpb2xpXCIsXHJcbiAgICAgICAgICAgIFwicmljb3R0YSBjaGVlc2VcIixcclxuICAgICAgICAgICAgXCJzcGluYWNoXCIsXHJcbiAgICAgICAgICAgIFwiUGFybWVzYW4gY2hlZXNlXCIsXHJcbiAgICAgICAgICAgIFwibnV0bWVnXCIsXHJcbiAgICAgICAgICAgIFwiYnV0dGVyIHNhZ2Ugc2F1Y2VcIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlNlYWZvb2QgTWFyaW5hcmFcIixcclxuICAgICAgICBwcmljZTogNjUwLFxyXG4gICAgICAgIGluZ3JlZGllbnRzOiBbXHJcbiAgICAgICAgICAgIFwiU3BhZ2hldHRpXCIsXHJcbiAgICAgICAgICAgIFwic2hyaW1wXCIsXHJcbiAgICAgICAgICAgIFwibXVzc2Vsc1wiLFxyXG4gICAgICAgICAgICBcImNhbGFtYXJpXCIsXHJcbiAgICAgICAgICAgIFwidG9tYXRvZXNcIixcclxuICAgICAgICAgICAgXCJnYXJsaWNcIixcclxuICAgICAgICAgICAgXCJ3aGl0ZSB3aW5lXCIsXHJcbiAgICAgICAgICAgIFwicGFyc2xleVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiR25vY2NoaSBhbCBQb21vZG9yb1wiLFxyXG4gICAgICAgIHByaWNlOiA0NTAsXHJcbiAgICAgICAgaW5ncmVkaWVudHM6IFtcclxuICAgICAgICAgICAgXCJHbm9jY2hpXCIsXHJcbiAgICAgICAgICAgIFwidG9tYXRvZXNcIixcclxuICAgICAgICAgICAgXCJnYXJsaWNcIixcclxuICAgICAgICAgICAgXCJiYXNpbFwiLFxyXG4gICAgICAgICAgICBcIm9saXZlIG9pbFwiLFxyXG4gICAgICAgICAgICBcIlBhcm1lc2FuIGNoZWVzZVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiVGFnbGlhdGVsbGUgYWwgRnVuZ2hpXCIsXHJcbiAgICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgICBpbmdyZWRpZW50czogW1xyXG4gICAgICAgICAgICBcIlRhZ2xpYXRlbGxlXCIsXHJcbiAgICAgICAgICAgIFwibWl4ZWQgbXVzaHJvb21zXCIsXHJcbiAgICAgICAgICAgIFwiZ2FybGljXCIsXHJcbiAgICAgICAgICAgIFwid2hpdGUgd2luZVwiLFxyXG4gICAgICAgICAgICBcImNyZWFtXCIsXHJcbiAgICAgICAgICAgIFwiUGFybWVzYW4gY2hlZXNlXCIsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJUb3J0ZWxsaW5pIGluIEJyb2RvXCIsXHJcbiAgICAgICAgcHJpY2U6IDU1MCxcclxuICAgICAgICBpbmdyZWRpZW50czogW1xyXG4gICAgICAgICAgICBcIlRvcnRlbGxpbmlcIixcclxuICAgICAgICAgICAgXCJjaGlja2VuIGJyb3RoXCIsXHJcbiAgICAgICAgICAgIFwiUGFybWVzYW4gY2hlZXNlXCIsXHJcbiAgICAgICAgICAgIFwibnV0bWVnXCIsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXN0YU1lbnU7XHJcbiIsImNvbnN0IHBpenphTWVudSA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIk1hcmdoZXJpdGFcIixcclxuICAgICAgICBwcmljZTogOC45OSxcclxuICAgICAgICBpbmdyZWRpZW50czogW1wiVG9tYXRvIFNhdWNlXCIsIFwiTW96emFyZWxsYSBDaGVlc2VcIiwgXCJCYXNpbFwiXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJQZXBwZXJvbmlcIixcclxuICAgICAgICBwcmljZTogMTAuOTksXHJcbiAgICAgICAgaW5ncmVkaWVudHM6IFtcIlRvbWF0byBTYXVjZVwiLCBcIk1venphcmVsbGEgQ2hlZXNlXCIsIFwiUGVwcGVyb25pXCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJCUSBDaGlja2VuXCIsXHJcbiAgICAgICAgcHJpY2U6IDEyLjk5LFxyXG4gICAgICAgIGluZ3JlZGllbnRzOiBbXHJcbiAgICAgICAgICAgIFwiQkJRIFNhdWNlXCIsXHJcbiAgICAgICAgICAgIFwiTW96emFyZWxsYSBDaGVlc2VcIixcclxuICAgICAgICAgICAgXCJHcmlsbGVkIENoaWNrZW5cIixcclxuICAgICAgICAgICAgXCJSZWQgT25pb25zXCIsXHJcbiAgICAgICAgICAgIFwiQ2lsYW50cm9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlZlZ2dpZVwiLFxyXG4gICAgICAgIHByaWNlOiA5Ljk5LFxyXG4gICAgICAgIGluZ3JlZGllbnRzOiBbXHJcbiAgICAgICAgICAgIFwiVG9tYXRvIFNhdWNlXCIsXHJcbiAgICAgICAgICAgIFwiTW96emFyZWxsYSBDaGVlc2VcIixcclxuICAgICAgICAgICAgXCJCZWxsIFBlcHBlcnNcIixcclxuICAgICAgICAgICAgXCJPbGl2ZXNcIixcclxuICAgICAgICAgICAgXCJNdXNocm9vbXNcIixcclxuICAgICAgICAgICAgXCJPbmlvbnNcIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkhhd2FpaWFuXCIsXHJcbiAgICAgICAgcHJpY2U6IDExLjk5LFxyXG4gICAgICAgIGluZ3JlZGllbnRzOiBbXCJUb21hdG8gU2F1Y2VcIiwgXCJNb3p6YXJlbGxhIENoZWVzZVwiLCBcIkhhbVwiLCBcIlBpbmVhcHBsZVwiXSxcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwaXp6YU1lbnU7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBtZW51cyBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dFwiO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcclxuXHJcbm5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09IFwiQlVUVE9OXCIpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcImhvbWVcIikge1xyXG4gICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGhvbWUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJtZW51XCIpIHtcclxuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBtZW51cygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcImFib3V0XCIpIHtcclxuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBhYm91dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5ob21lKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==