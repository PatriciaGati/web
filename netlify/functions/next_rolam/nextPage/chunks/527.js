"use strict";
exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 7672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, _objectSpread({}, pageProps));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ 53789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56859);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60027);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Import styled components ServerStyleSheet




class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_0__.default {
  static getInitialProps({
    renderPage
  }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__/* .ServerStyleSheet */ .qH(); // Step 2: Retrieve styles from components in the page

    const page = renderPage(App => props => sheet.collectStyles( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(App, _objectSpread({}, props)))); // Step 3: Extract the styles as <style> tags

    const styleTags = sheet.getStyleElement(); // Step 4: Pass styleTags as a prop

    return _objectSpread(_objectSpread({}, page), {}, {
      styleTags
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_0__.Html, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.Head, {
        children: this.props.styleTags
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("body", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.NextScript, {})]
      })]
    });
  }

}

/***/ }),

/***/ 97020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/NcLeWkMZimcHnTAbLoOt5/_buildManifest.js","static/NcLeWkMZimcHnTAbLoOt5/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-af28476a2e7790fd48db.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-868c7ac7caa990ebcff7.js","static/chunks/870-228825ded2847338837c.js","static/css/28017875af7137c7fc33.css","static/chunks/pages/index-6abfe42b155ce3112728.js"],"/[slug]":["static/chunks/webpack-af28476a2e7790fd48db.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-868c7ac7caa990ebcff7.js","static/chunks/870-228825ded2847338837c.js","static/chunks/77-5d9c7180ee3e59a558b0.js","static/css/28017875af7137c7fc33.css","static/chunks/pages/[slug]-144fd7e5ddf8a628ddc8.js"],"/_app":["static/chunks/webpack-af28476a2e7790fd48db.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-868c7ac7caa990ebcff7.js","static/css/7e8cb6502f9ecc4d5a13.css","static/chunks/pages/_app-332f91abf6483488fb9a.js"],"/_error":["static/chunks/webpack-af28476a2e7790fd48db.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-868c7ac7caa990ebcff7.js","static/chunks/pages/_error-737a04e9a0da63c9d162.js"],"/arak":["static/chunks/webpack-af28476a2e7790fd48db.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-868c7ac7caa990ebcff7.js","static/chunks/870-228825ded2847338837c.js","static/css/28017875af7137c7fc33.css","static/chunks/pages/arak-532ff7c817c141f67ba6.js"],"/kapcsolat":["static/chunks/webpack-af28476a2e7790fd48db.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-868c7ac7caa990ebcff7.js","static/chunks/870-228825ded2847338837c.js","static/chunks/737-0b968e4b93be28c777bb.js","static/css/28017875af7137c7fc33.css","static/chunks/pages/kapcsolat-86fbcfe795f0cd76d1bf.js"],"/rolam":["static/chunks/webpack-af28476a2e7790fd48db.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-868c7ac7caa990ebcff7.js","static/chunks/870-228825ded2847338837c.js","static/css/28017875af7137c7fc33.css","static/chunks/pages/rolam-2e8d237edd04d44c8b1d.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

module.exports = {};

/***/ })

};
;