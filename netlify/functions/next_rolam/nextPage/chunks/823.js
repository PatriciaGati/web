exports.id = 823;
exports.ids = [823];
exports.modules = {

/***/ 29413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ layout)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(60027);
// EXTERNAL MODULE: ./node_modules/@sanity/client/lib/sanityClient.js
var sanityClient = __webpack_require__(59729);
var sanityClient_default = /*#__PURE__*/__webpack_require__.n(sanityClient);
// EXTERNAL MODULE: ./node_modules/@sanity/image-url/lib/node/index.js
var node = __webpack_require__(79427);
var node_default = /*#__PURE__*/__webpack_require__.n(node);
;// CONCATENATED MODULE: ./styles/globasstyle.js


const GlobalStyle = (0,styled_components_cjs/* createGlobalStyle */.vJ)(["body{background-color:", " !important;color:", " !important;}.danger{color:", " !important;}h1{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}.container-fluid{padding:0 !important;}.modal-header{background-color:", " !important;}.modal-header > .btn-close{background-color:", " !important;}.modal-body{background-color:", " !important;}#navbarScrollingDropdown::after{content:none;}.dropdown-menu{background-color:transparent!important;margin-left:1em !important;}.text-image > div{top:50%;transform:translateY(-50%);position:static !important;}@media screen and (min-width:992px){.text-image > div{top:50%;transform:translateY(-50%);position:relative !important;}.nav-link:not(.dropdown-link):not(:last-of-type)::after{content:\"/\" !important;position:relative !important;right:-10px !important;}.dropdown-menu{margin-left:0em !important;}}"], props => props.theme.bg, props => props.theme.fg, props => props.theme.danger, props => props.theme.bg, props => props.theme.fg, props => props.theme.bg);
/* harmony default export */ const globasstyle = (GlobalStyle);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Container.js
var Container = __webpack_require__(70448);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Row.js
var Row = __webpack_require__(28269);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Col.js
var Col = __webpack_require__(1266);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-request/dist/index.js
var dist = __webpack_require__(28687);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Navbar.js
var Navbar = __webpack_require__(74232);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Nav.js
var Nav = __webpack_require__(75655);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/NavDropdown.js
var NavDropdown = __webpack_require__(47562);
var NavDropdown_default = /*#__PURE__*/__webpack_require__.n(NavDropdown);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/navbar/navbar.jsx











const MyNavbar = () => {
  const [load, setLoad] = react.useState(true);
  const [galleryLinks, setGalleryLinks] = react.useState();
  react.useEffect(() => {
    getGalleryLinks();
    setLoad(false);
  }, []);

  async function getGalleryLinks() {
    const endpoint = "https://nz3s72ab.api.sanity.io/v1/graphql/production/default";
    const graphQLClient = new dist.GraphQLClient(endpoint);
    const query = dist.gql`
      query {
        allGallery {
          _id
          name
          slug {
            current
          }
        }
      }
    `;
    const data = await graphQLClient.request(query);
    setGalleryLinks(data.allGallery);
    setLoad(false);
  }

  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: /*#__PURE__*/jsx_runtime.jsx((Navbar_default()), {
      collapseOnSelect: true,
      variant: "dark",
      expand: "lg",
      style: {
        position: "fixed",
        zIndex: "10",
        width: "100%"
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)((Container_default()), {
        children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime.jsx((Navbar_default()).Brand, {
            href: "/",
            children: "Brand link"
          })
        }), /*#__PURE__*/jsx_runtime.jsx((Navbar_default()).Toggle, {}), /*#__PURE__*/jsx_runtime.jsx((Navbar_default()).Collapse, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)((Nav_default()), {
            className: "ms-auto p-4",
            children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime.jsx((Nav_default()).Link, {
                href: "/",
                children: "F\u0151oldal"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
              href: "/rolam",
              children: /*#__PURE__*/jsx_runtime.jsx((Nav_default()).Link, {
                href: "/rolam",
                children: "R\xF3lam"
              })
            }), /*#__PURE__*/jsx_runtime.jsx((NavDropdown_default()), {
              title: "Munk\xE1im",
              id: "navbarScrollingDropdown",
              children: !load && !!galleryLinks ? galleryLinks.map((link, i) => {
                return /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
                  href: `/${link.slug.current}`,
                  children: /*#__PURE__*/jsx_runtime.jsx((Nav_default()).Link, {
                    className: "dropdown-link",
                    href: `/${link.slug.current}`,
                    children: link.name
                  }, `l${i}`)
                }, `nl${i}`);
              }) : null
            }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
              href: "/arak",
              children: /*#__PURE__*/jsx_runtime.jsx((Nav_default()).Link, {
                href: "/arak",
                children: "\xC1rak"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
              href: "/kapcsolat",
              children: /*#__PURE__*/jsx_runtime.jsx((Nav_default()).Link, {
                href: "/kapcsolat",
                children: "Kapcsolat"
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const navbar = (MyNavbar);
;// CONCATENATED MODULE: ./src/components/navbar/index.js

;// CONCATENATED MODULE: ./themes/theme.js
const defaultTheme = {
  name: "Default",
  fg: "var(--fg)",
  bg: "var(--bg)",
  success: "var(--success)",
  warning: "var(--warning)",
  danger: "var(--danger)"
};
;// CONCATENATED MODULE: ./src/components/layout/layout.jsx












const configuredSanityClient = sanityClient_default()({
  projectId: 'nz3s72ab',
  dataset: 'production',
  useCdn: true
});
const builder = node_default()(configuredSanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Layout = props => {
  const {
    children,
    image,
    imagetext
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(styled_components_cjs/* ThemeProvider */.f6, {
    theme: defaultTheme,
    children: [/*#__PURE__*/jsx_runtime.jsx(globasstyle, {}), /*#__PURE__*/jsx_runtime.jsx(navbar, {}), /*#__PURE__*/jsx_runtime.jsx((Container_default()), {
      fluid: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)((Row_default()), {
        style: {
          backgroundColor: "black"
        },
        children: [/*#__PURE__*/jsx_runtime.jsx(Col.default, {
          md: {
            span: 3,
            offset: 1
          },
          children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
            src: urlFor(image.image).url(),
            alt: image.alt,
            title: image.title,
            description: image.description,
            layout: "responsive",
            width: "500",
            height: "800",
            quality: "100",
            objectFit: "cover",
            placeholder: () => /*#__PURE__*/jsx_runtime.jsx("div", {
              style: {
                backgroundColor: "grey"
              }
            }),
            loading: "lazy"
          })
        }), /*#__PURE__*/jsx_runtime.jsx(Col.default, {
          className: "text-image",
          md: {
            span: 3,
            offset: 3
          },
          children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
            src: imagetext.image.asset.url,
            alt: imagetext.alt,
            title: imagetext.title,
            description: imagetext.description,
            layout: "responsive",
            width: "500",
            height: "200",
            quality: "100",
            objectFit: "contain",
            placeholder: () => /*#__PURE__*/jsx_runtime.jsx("div", {
              style: {
                backgroundColor: "grey"
              }
            }),
            loading: "lazy"
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime.jsx((Container_default()), {
      children: children
    })]
  });
};

/* harmony default export */ const layout = (Layout);
;// CONCATENATED MODULE: ./src/components/layout/index.js


/***/ }),

/***/ 72431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;