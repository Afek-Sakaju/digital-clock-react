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
var _client = require("react-dom/client");
var _App = _interopRequireDefault(require("./App"));
require("./index.css");
var _components = require("./components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var rootElement = document.getElementById("root");
var root = (0, _client.createRoot)(rootElement);
root.render( /*#__PURE__*/_react.default.createElement(_App.default, null));