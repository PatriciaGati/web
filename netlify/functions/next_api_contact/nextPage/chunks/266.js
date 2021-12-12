"use strict";
exports.id = 266;
exports.ids = [266];
exports.modules = {

/***/ 1266:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = true;
exports.default = void 0;
__webpack_unused_export__ = useCol;

var _classnames = _interopRequireDefault(__webpack_require__(44036));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _ThemeProvider = __webpack_require__(3349);

var _jsxRuntime = __webpack_require__(85893);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DEVICE_SIZES = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'col');
  const spans = [];
  const classes = [];
  DEVICE_SIZES.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;

    if (typeof propValue === 'object' && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{ ...props,
    className: (0, _classnames.default)(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}

const Col = /*#__PURE__*/React.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = 'div',
    bsPrefix,
    spans
  }] = useCol(props);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, { ...colProps,
    ref: ref,
    className: (0, _classnames.default)(className, !spans.length && bsPrefix)
  });
});
Col.displayName = 'Col';
var _default = Col;
exports.default = _default;

/***/ }),

/***/ 67294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(72408);
} else {}


/***/ })

};
;