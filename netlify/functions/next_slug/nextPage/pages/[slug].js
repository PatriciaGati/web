/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 75033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-request/dist/index.js
var dist = __webpack_require__(28687);
// EXTERNAL MODULE: ./node_modules/@sanity/client/lib/sanityClient.js
var sanityClient = __webpack_require__(59729);
var sanityClient_default = /*#__PURE__*/__webpack_require__.n(sanityClient);
// EXTERNAL MODULE: ./node_modules/@sanity/image-url/lib/node/index.js
var node = __webpack_require__(79427);
var node_default = /*#__PURE__*/__webpack_require__.n(node);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./node_modules/react-image-gallery/build/image-gallery.js
var image_gallery = __webpack_require__(66982);
var image_gallery_default = /*#__PURE__*/__webpack_require__.n(image_gallery);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Row.js
var Row = __webpack_require__(28269);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Col.js
var Col = __webpack_require__(1266);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Modal.js
var Modal = __webpack_require__(89194);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal);
// EXTERNAL MODULE: ./src/components/layout/index.js + 5 modules
var layout = __webpack_require__(29413);
;// CONCATENATED MODULE: ./src/image/blur.jpg
/* harmony default export */ const image_blur = ({"src":"/_next/static/image/src/image/blur.14f2136f13c2f3d24eed5742539ddad3.jpg","height":3744,"width":5616,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAA//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAH//xAAaEAACAgMAAAAAAAAAAAAAAAACAwABBAVB/9oACAEBAAE/AH7zONClUyxEK5P/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./pages/[slug].jsx














const configuredSanityClient = sanityClient_default()({
  projectId: 'nz3s72ab',
  dataset: 'production',
  useCdn: true
});
const builder = node_default()(configuredSanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Gallery = props => {
  const [show, setShow] = react.useState(false);
  const [id, setId] = react.useState(0);
  const {
    data
  } = props;
  const gallery = data.allGallery.filter(gallery => gallery.slug.current === data.slug);
  console.log(gallery);
  const {
    name,
    image,
    images,
    imagetext
  } = gallery[0];
  const imagesArray = images.map(image => {
    return {
      thumbnail: urlFor(image.image).width(200).url(),
      original: urlFor(image.image).url()
    };
  });

  function handleClick(i) {
    setShow(true);
    setId(i);
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* default */.Z, {
    image: image,
    imagetext: imagetext,
    children: [/*#__PURE__*/jsx_runtime.jsx((Row_default()), {
      children: images.map((image, i) => {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(Col.default, {
          xs: 6,
          md: 4,
          lg: 3,
          className: "p-2",
          children: [/*#__PURE__*/jsx_runtime.jsx(next_image.default, {
            src: urlFor(image.image).url(),
            alt: image.alt,
            title: image.title,
            description: image.description,
            layout: "responsive",
            width: "500",
            height: "500",
            quality: "100",
            objectFit: "cover",
            placeholder: "blur",
            blurDataURL: image_blur,
            loading: "lazy",
            onClick: () => handleClick(i)
          }, `img${i}`), /*#__PURE__*/jsx_runtime.jsx("h1", {
            children: name
          })]
        }, `col${i}`);
      })
    }), /*#__PURE__*/jsx_runtime.jsx((Row_default()), {
      children: /*#__PURE__*/jsx_runtime.jsx(Col.default, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)((Modal_default()), {
          show: show,
          fullscreen: true,
          onHide: () => setShow(false),
          children: [/*#__PURE__*/jsx_runtime.jsx((Modal_default()).Header, {
            closeButton: true,
            children: /*#__PURE__*/jsx_runtime.jsx((Modal_default()).Title, {
              children: name
            })
          }), /*#__PURE__*/jsx_runtime.jsx((Modal_default()).Body, {
            children: /*#__PURE__*/jsx_runtime.jsx((image_gallery_default()), {
              showThumbnails: false,
              lazyLoad: true,
              items: imagesArray,
              startIndex: id
            })
          })]
        })
      })
    })]
  });
};

async function getServerSideProps(context) {
  const {
    slug
  } = context.query;
  const endpoint = "https://nz3s72ab.api.sanity.io/v1/graphql/production/default";
  const graphQLClient = new dist.GraphQLClient(endpoint);
  const query = dist.gql`
    query {
      allGallery {
        name
        slug {
          current
        }
        seo {
          metaKeyWords
          metaDescription
          structured_data {
            title
            alt
          }
        }
        images {
          title
          alt
          description
          image {
            asset {
              url
            }
          }
        }

        image {
          title
          alt
          description
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
  data.slug = slug;
  return {
    props: {
      data
    } // will be passed to the page component as props

  };
}
/* harmony default export */ const _slug_ = (Gallery);

/***/ }),

/***/ 39408:
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

      const compMod = __webpack_require__(75033)

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
        page: "/[slug]",
        buildId: "NcLeWkMZimcHnTAbLoOt5",
        escapedBuildId: "NcLeWkMZimcHnTAbLoOt5",
        basePath: "",
        pageIsDynamic: true,
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [315,819,449,266,654,874,527,823], () => (__webpack_require__(39408)))
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
/******/ 			219: 1
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
/******/ 			__webpack_require__.e(266);
/******/ 			__webpack_require__.e(654);
/******/ 			__webpack_require__.e(874);
/******/ 			__webpack_require__.e(527);
/******/ 			__webpack_require__.e(823);
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