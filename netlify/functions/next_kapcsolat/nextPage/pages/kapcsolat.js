/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 38723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28687);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42283);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28269);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1266);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17383);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89876);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48393);
/* harmony import */ var react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29413);
/* harmony import */ var _src_image_pati_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47416);
/* harmony import */ var _src_image_kezdolap_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57869);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const Contact = props => {
  const {
    data
  } = props;
  console.log(data.allContact[0]);
  const {
    name,
    image,
    imagetext,
    text
  } = data.allContact[0];
  const [messageData, setMessageData] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .cI)();

  const onSubmit = data => {
    console.log("Sending");
    axios__WEBPACK_IMPORTED_MODULE_2___default()("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: data
    }).then(res => {
      console.log("Response received");

      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setMessageData({});
      }
    }).catch(err => console.log(err));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_src_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    image: image,
    imagetext: imagetext,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h1", {
          children: name
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
        md: {
          span: 8,
          offset: 2
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default()), {
          onSubmit: handleSubmit(onSubmit),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
              md: 6,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group), {
                className: "mb-3",
                controlId: "formLastname",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                  children: "Vezet\xE9kn\xE9v"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control), _objectSpread(_objectSpread({
                  name: "lastname"
                }, register("lastname", {
                  required: true
                })), {}, {
                  type: "text",
                  placeholder: "Vezet\xE9kn\xE9v"
                })), errors.lastname && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                  className: "danger",
                  children: "This field is required"
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
              md: 6,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group), {
                className: "mb-3",
                controlId: "formFirstname",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
                  children: "Keresztn\xE9v"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control), _objectSpread(_objectSpread({
                  name: "firstname"
                }, register("firstname", {
                  required: true
                })), {}, {
                  type: "text",
                  placeholder: "Keresztn\xE9v"
                })), errors.lastname && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                  className: "danger",
                  children: "This field is required"
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group), {
            className: "mb-3",
            controlId: "formEmail",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
              children: "Email"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control), _objectSpread(_objectSpread({
              name: "email"
            }, register("email", {
              required: true
            })), {}, {
              type: "email",
              placeholder: "email"
            })), errors.lastname && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              className: "danger",
              children: "This field is required"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group), {
            className: "mb-3",
            controlId: "formSubject",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
              children: "T\xE1rgy"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control), _objectSpread(_objectSpread({
              name: "subject"
            }, register("subject", {
              required: true
            })), {}, {
              type: "text",
              placeholder: "T\xE1rgy"
            })), errors.lastname && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              className: "danger",
              children: "This field is required"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group), {
            className: "mb-3",
            controlId: "formMessage",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Label), {
              children: "\xDCzenet"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Control), _objectSpread(_objectSpread({
              name: "message"
            }, register("message", {
              required: true
            })), {}, {
              as: "textarea",
              rows: 3,
              placeholder: "\xDCzenet"
            })), errors.lastname && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              className: "danger",
              children: "This field is required"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Group), {
            className: "mb-3",
            controlId: "formBasicCheckbox",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10___default().Check), {
              type: "checkbox",
              label: "Check me out"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_11___default()), {
            direction: "horizontal",
            gap: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12___default()), {
              variant: "primary",
              type: "submit",
              className: "mx-auto",
              children: "Submit"
            })
          })]
        })
      })
    })]
  });
};

async function getServerSideProps(context) {
  const {
    id
  } = context.query;
  const endpoint = "https://nz3s72ab.api.sanity.io/v1/graphql/production/default";
  const graphQLClient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(endpoint);
  const query = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
    query {
      allContact {
        name
        image {
          image {
            asset {
              url
            }
          }
        }
        imagetext {
          title
          alt
          description
          image {
            asset {
              url
            }
          }
        }
      }
    }
  `;
  const data = await graphQLClient.request(query);
  return {
    props: {
      data
    } // will be passed to the page component as props

  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ 80409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env.production","contents":"GATSBY_API_URL=https://startergatsby.netlify.app/\r\nGATSBY_BASE_URL=https://startergatsby.netlify.app/\r\nGMAIL_EMAIL=cobboly@gmail.com\r\nGMAIL_EMAIL_TO=csabaek@gmail.com\r\nGMAIL_PASSWORD=pqpvhzfroyavpmhm\r\nRECAPTCHA_SECRET_KEY=6LeWmrQaAAAAAPgXZpBs-sasqcGExjmwH7-0CnVQ\r\nRECAPTCHA_SITE_KEY=6LeWmrQaAAAAAGS1erLeda7HhFhlogf0eki1Uc6O\r\nANALYTICS_TRACKING_ID=G-XNQ9PBVGHZ\r\nSANITY_DATASET=production\r\nSANITY_PROJECT_ID=nz3s72ab\r\nSANITY_TOKEN=sk8hW6UJVPHyTEjqRhagFfFHyxPNTjtizaluIQGob9vVBxuNkOtpwe247YrcCv9H1l7WgRG5yt7l0L72cThnxcDTBOIULPd1KMHNJLQ0kk0EQxc7L5LbArXQXEesRI2gLeX0DfT91v2cMuGaE59SGyvdgUgO4IGPW3foIqd5SoadlWUJHt0f\r\n\r\n"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(53789)

      const appMod = __webpack_require__(7672)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(38723)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/kapcsolat",
        buildId: "NcLeWkMZimcHnTAbLoOt5",
        escapedBuildId: "NcLeWkMZimcHnTAbLoOt5",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"ce9f5fe9864706e7aba474c11f930208",previewModeSigningKey:"ea7c4eea1408a6cd2f856fb9a2813c4a8442e7e857f9919f74616d24c274a4cc",previewModeEncryptionKey:"cea24be3993765963711a3f94ea2ba18dd01d660cea9b20765fde1525c753b15"}
      })
      
    

/***/ }),

/***/ 42357:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 64293:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 45532:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 76417:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 28614:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 35747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 98605:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 57211:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 11631:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 33700:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 12087:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 85622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 71191:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 92413:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 24304:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 4016:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 33867:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 78835:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 31669:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 78761:
/***/ ((module) => {

module.exports = require("zlib");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [315,819,449,569,874,527,823,690], () => (__webpack_require__(80409)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			85: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(315);
/******/ 			__webpack_require__.e(819);
/******/ 			__webpack_require__.e(449);
/******/ 			__webpack_require__.e(569);
/******/ 			__webpack_require__.e(874);
/******/ 			__webpack_require__.e(527);
/******/ 			__webpack_require__.e(823);
/******/ 			__webpack_require__.e(690);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;