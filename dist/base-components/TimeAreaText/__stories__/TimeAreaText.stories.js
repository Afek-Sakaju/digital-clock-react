"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = exports.Custom = exports.AdjustableSize = void 0;
var _react = _interopRequireDefault(require("react"));
var _TimeAreaText = _interopRequireDefault(require("../TimeAreaText"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "base-components/TimeAreaText",
  component: _TimeAreaText.default,
  decorators: [function (Story) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "95vw",
        height: "95vh"
      }
    }, /*#__PURE__*/_react.default.createElement(Story, null));
  }]
};
exports.default = _default;
var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_TimeAreaText.default, null);
};
exports.Default = Default;
var AdjustableSize = function AdjustableSize(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "red 3px solid",
      width: "".concat(props.width, "px"),
      height: "".concat(props.height, "px")
    }
  }, /*#__PURE__*/_react.default.createElement(_TimeAreaText.default, {
    label: "Japan"
  }));
};
exports.AdjustableSize = AdjustableSize;
AdjustableSize.argTypes = {
  width: {
    control: {
      type: "number",
      min: 50,
      max: 3000,
      step: 50
    },
    defaultValue: 100
  },
  height: {
    control: {
      type: "number",
      min: 50,
      max: 3000,
      step: 50
    },
    defaultValue: 100
  },
  label: {
    control: false
  }
};
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_TimeAreaText.default, args);
};
var Custom = Template.bind({});
exports.Custom = Custom;
Custom.args = {
  label: "custom"
};