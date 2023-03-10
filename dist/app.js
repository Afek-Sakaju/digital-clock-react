"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("./components");
var _baseComponents = require("./base-components");
var _utils = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app-container"
  }, _utils.TIME_ZONES.map(function (zone, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      className: "clock-and-zone-container"
    }, /*#__PURE__*/_react.default.createElement(_baseComponents.TimeAreaText, {
      label: zone.name
    }), /*#__PURE__*/_react.default.createElement(_components.Clock, {
      timestamp: (0, _utils.getZoneTimestamp)(zone)
    }));
  }));
}
var _default = App;
exports.default = _default;