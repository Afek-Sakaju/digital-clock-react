"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = exports.Custom = exports.AdjustSize = void 0;
var _react = _interopRequireDefault(require("react"));
var _DigitsClock = _interopRequireDefault(require("../DigitsClock"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "base-components/DigitsClock",
  component: _DigitsClock.default,
  decorators: [function (Story) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "borderBox",
        height: "95vh",
        width: "95vw"
      }
    }, /*#__PURE__*/_react.default.createElement(Story, null));
  }]
};
exports.default = _default;
var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_DigitsClock.default, null);
};
exports.Default = Default;
Default.decorators = [function (Story) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "borderBox",
      height: "15%",
      width: "40%",
      border: "1px solid black"
    }
  }, /*#__PURE__*/_react.default.createElement(Story, null));
}];
var AdjustSize = function AdjustSize(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "".concat(props.width, "px"),
      height: "".concat(props.height, "px"),
      border: "1px dashed blue"
    }
  }, /*#__PURE__*/_react.default.createElement(_DigitsClock.default, null));
};
exports.AdjustSize = AdjustSize;
AdjustSize.argTypes = {
  width: {
    control: {
      type: "number",
      min: 100,
      max: 4000,
      step: 50
    }
  },
  height: {
    control: {
      type: "number",
      min: 100,
      max: 3000,
      step: 50
    }
  },
  time: {
    control: false
  }
};
AdjustSize.args = {
  width: 200,
  height: 100
};
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_DigitsClock.default, args);
};
var Custom = Template.bind({});
exports.Custom = Custom;
Custom.args = {
  time: "99:99:99"
};
Custom.decorators = [function (Story) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "borderBox",
      height: "20%",
      width: "50%",
      border: "1px solid black"
    }
  }, /*#__PURE__*/_react.default.createElement(Story, null));
}];