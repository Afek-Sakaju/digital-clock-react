"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("./components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app-container"
  }, /*#__PURE__*/_react.default.createElement(_components.Clock, null), /*#__PURE__*/_react.default.createElement(_components.Clock, {
    size: "medium",
    timestamp: 123100231459
  }), /*#__PURE__*/_react.default.createElement(_components.Clock, {
    size: "large",
    timestamp: 1231002314589
  }), "    ");
}
var _default = App;
exports.default = _default;