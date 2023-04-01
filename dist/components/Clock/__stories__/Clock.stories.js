"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = exports.Custom = void 0;
var _react = _interopRequireDefault(require("react"));
var _Clock = _interopRequireDefault(require("../Clock"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "components/Clock",
  component: _Clock.default,
  decorators: [function (Story) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
        width: "95vw"
      }
    }, /*#__PURE__*/_react.default.createElement(Story, null));
  }]
};
exports.default = _default;
var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "20%",
      width: "45%"
    }
  }, /*#__PURE__*/_react.default.createElement(_Clock.default, null));
};
exports.Default = Default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Clock.default, args);
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