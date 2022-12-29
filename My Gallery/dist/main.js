/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst current = document.querySelector(\"#current\");\nconst imgs = document.querySelectorAll('.imgs img');\nconst opacity = 0.4;\nimgs.forEach(img => img.addEventListener('click', imgClick));\nfunction imgClick(e) {\n  //Reset Opacity\n  imgs.forEach(img => img.style.opacity = 1);\n\n  //Tıklandıktan src deki img dosyasının değişmesi\n  current.src = e.target.src;\n\n  //Fade-in Class eklenmesi\n  current.classList.add(\"fade-in\");\n\n  //Fade-in Kaldırma\n  setTimeout(() => current.classList.remove(\"fade-in\"), 500);\n\n  //Opacity Eklenmesi\n  e.target.style.opacity = opacity;\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/img1.jpg */ \"./src/img/img1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/img2.jpg */ \"./src/img/img2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/img3.jpg */ \"./src/img/img3.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/img4.jpg */ \"./src/img/img4.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/img5.jpg */ \"./src/img/img5.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/img6.jpg */ \"./src/img/img6.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/img7.jpg */ \"./src/img/img7.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/img8.jpg */ \"./src/img/img8.jpg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>My Gallery</title>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n    <div class=\\\"container\\\">\\r\\n        <div class=\\\"main-image\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" id=\\\"current\\\">\\r\\n        </div>\\r\\n\\r\\n        <div class=\\\"imgs\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\">\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n\\r\\n\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://my-webpack-project/./src/index.html?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ }),

/***/ "./src/img/img1.jpg":
/*!**************************!*\
  !*** ./src/img/img1.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6909f66d803cffa2f5a2.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/img/img1.jpg?");

/***/ }),

/***/ "./src/img/img2.jpg":
/*!**************************!*\
  !*** ./src/img/img2.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1a7f25d2cdfb295c63f0.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/img/img2.jpg?");

/***/ }),

/***/ "./src/img/img3.jpg":
/*!**************************!*\
  !*** ./src/img/img3.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2aabe0e0c1fd84c5d3da.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/img/img3.jpg?");

/***/ }),

/***/ "./src/img/img4.jpg":
/*!**************************!*\
  !*** ./src/img/img4.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4287a0714c600121509c.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/img/img4.jpg?");

/***/ }),

/***/ "./src/img/img5.jpg":
/*!**************************!*\
  !*** ./src/img/img5.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c9c987c21a28102986e8.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/img/img5.jpg?");

/***/ }),

/***/ "./src/img/img6.jpg":
/*!**************************!*\
  !*** ./src/img/img6.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3c8ee0e3187b4e65d60.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/img/img6.jpg?");

/***/ }),

/***/ "./src/img/img7.jpg":
/*!**************************!*\
  !*** ./src/img/img7.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f2ee4ffd7814dc17e0a9.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/img/img7.jpg?");

/***/ }),

/***/ "./src/img/img8.jpg":
/*!**************************!*\
  !*** ./src/img/img8.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0111d85764968da90e03.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/img/img8.jpg?");

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
/******/ 			// no module.id needed
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;