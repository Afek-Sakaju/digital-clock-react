"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = exports.Custom = exports.AdjustableSize = void 0;
var _react = _interopRequireDefault(require("react"));
var _Digit = _interopRequireDefault(require("../Digit"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "base-components/Digit",
  component: _Digit.default,
  decorators: [function (Story) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "96vh"
      }
    }, /*#__PURE__*/_react.default.createElement(Story, null));
  }]
};
exports.default = _default;
var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_Digit.default, null);
};
exports.Default = Default;
Default.decorators = [function (Story) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100px",
      height: "200px"
    }
  }, /*#__PURE__*/_react.default.createElement(Story, null));
}];
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Digit.default, args);
};
var AdjustableSize = function AdjustableSize(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "3px red solid",
      width: "".concat(props.width, "px"),
      height: "".concat(props.height, "px")
    }
  }, /*#__PURE__*/_react.default.createElement(_Digit.default, {
    value: 6
  }));
};
exports.AdjustableSize = AdjustableSize;
AdjustableSize.argTypes = {
  width: {
    control: {
      type: "number",
      min: 20,
      max: 3000,
      step: 30
    },
    defaultValue: 50
  },
  height: {
    control: {
      type: "number",
      min: 30,
      max: 3000,
      step: 30
    },
    defaultValue: 50
  },
  value: {
    control: false
  }
};
var Custom = Template.bind({});
exports.Custom = Custom;
Custom.argTypes = {
  value: {
    control: "inline-radio",
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
};
Custom.decorators = [function (Story) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100px",
      height: "200px"
    }
  }, /*#__PURE__*/_react.default.createElement(Story, null));
}];