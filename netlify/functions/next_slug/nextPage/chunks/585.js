exports.id = 585;
exports.ids = [585];
exports.modules = {

/***/ 3943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ layout)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Container.js
var Container = __webpack_require__(448);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Row.js
var Row = __webpack_require__(8269);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Col.js
var Col = __webpack_require__(1266);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Navbar.js
var Navbar = __webpack_require__(4232);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Nav.js
var Nav = __webpack_require__(3523);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/NavDropdown.js
var NavDropdown = __webpack_require__(7562);
var NavDropdown_default = /*#__PURE__*/__webpack_require__.n(NavDropdown);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(8521);
;// CONCATENATED MODULE: ./src/components/navbar/navbar.jsx










const MyNavbar = () => {
  const [load, setLoad] = react.useState(true);
  const [galleryLinks, setGalleryLinks] = react.useState();
  react.useEffect(() => {
    getGalleryLinks();
  }, []);

  async function getGalleryLinks() {
    await axios_default()({
      url: "https://nz3s72ab.api.sanity.io/v1/graphql/production/default",
      method: "post",
      data: {
        query: `
        query  {
          allGallery {
            _id
            name
            slug{
              current
            }
          }
        }
        
        `
      }
    }).then(result => {
      setGalleryLinks(result.data.data.allGallery);
      setLoad(false);
    });
  }

  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: /*#__PURE__*/jsx_runtime.jsx((Navbar_default()), {
      bg: "dark",
      variant: "dark",
      style: {
        position: "fixed",
        zIndex: "10",
        width: "100%"
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)((Nav_default()), {
        className: "me-auto",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)((Nav_default()).Link, {
          href: "/",
          children: [" ", /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: "/",
            children: " F\u0151oldal"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)((Nav_default()).Link, {
          href: "/about",
          children: [" ", /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: "/about",
            children: " R\xF3lam"
          })]
        }), /*#__PURE__*/jsx_runtime.jsx((NavDropdown_default()), {
          title: "Link",
          id: "navbarScrollingDropdown",
          children: !load && !!galleryLinks ? galleryLinks.map(link => {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)((Nav_default()).Link, {
              href: `/${link.slug.current}`,
              children: [" ", /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
                href: {
                  pathname: `/${link.slug.current}`,
                  query: {
                    id: link._id
                  }
                },
                children: link.name
              })]
            });
          }) : null
        })]
      })
    })
  });
};

/* harmony default export */ const navbar = (MyNavbar);
;// CONCATENATED MODULE: ./src/components/navbar/index.js

;// CONCATENATED MODULE: ./src/components/layout/layout.jsx









const Layout = props => {
  const {
    children,
    image
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(navbar, {}), /*#__PURE__*/jsx_runtime.jsx((Container_default()), {
      fluid: true,
      children: /*#__PURE__*/jsx_runtime.jsx((Row_default()), {
        children: /*#__PURE__*/jsx_runtime.jsx(Col/* default */.ZP, {
          children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
            src: image.image.asset.url,
            alt: image.alt,
            title: image.title,
            description: image.description,
            layout: "responsive",
            width: "500",
            height: "300",
            quality: "100",
            objectFit: "cover"
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime.jsx((Container_default()), {
      children: /*#__PURE__*/jsx_runtime.jsx((Row_default()), {
        className: "justify-content-md-center",
        children: children
      })
    })]
  });
};

/* harmony default export */ const layout = (Layout);
;// CONCATENATED MODULE: ./src/components/layout/index.js


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;