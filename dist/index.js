"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Clock", {
  enumerable: true,
  get: function get() {
    return _components.Clock;
  }
});
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
require("./index.scss");
var _app = _interopRequireDefault(require("./app"));
var _components = require("./components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var root = document.getElementById("root");
_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_app.default, null), root);

// eslint-disable-next-line import/prefer-default-export