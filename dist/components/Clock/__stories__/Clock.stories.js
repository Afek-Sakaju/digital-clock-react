"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = exports.Custom = void 0;
var _react = _interopRequireDefault(require("react"));
var _Clock = require("../Clock");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "components/Clock",
  component: _Clock.Clock,
  decorators: [function (Story) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "97vh",
        width: "97vw"
      }
    }, /*#__PURE__*/_react.default.createElement(Story, null));
  }]
};
exports.default = _default;
var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_Clock.Clock, null);
};
exports.Default = Default;
Default.decorators = [function (Story) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "400px",
      width: "800px"
    }
  }, /*#__PURE__*/_react.default.createElement(Story, null));
}];
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Clock.Clock, args);
};
var Custom = Template.bind({});
exports.Custom = Custom;
Custom.decorators = [function (Story) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "200px",
      width: "600px"
    }
  }, /*#__PURE__*/_react.default.createElement(Story, null));
}];
Custom.argTypes = {
  size: {
    control: "inline-radio",
    options: ["normal", "small"]
  },
  timestamp: {
    control: false
  }
};