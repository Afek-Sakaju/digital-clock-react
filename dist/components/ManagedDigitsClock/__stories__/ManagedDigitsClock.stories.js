"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = exports.Custom = exports.AdjustableSize = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ManagedDigitsClock = _interopRequireDefault(require("../ManagedDigitsClock"));
var _utils = require("../../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var flexCentered = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var _default = {
  title: "components/ManagedDigitsClock",
  component: _ManagedDigitsClock.default,
  parameters: {
    controls: {
      // This line hides specified controls
      exclude: /((on.*Change)|(update.*)|(ampmState)|(localeTime)|(currentDay))/g
    }
  },
  decorators: [function (Story) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: _objectSpread(_objectSpread({}, flexCentered), {}, {
        height: "95vh",
        width: "95vw"
      })
    }, /*#__PURE__*/_react.default.createElement(Story, null));
  }]
};
exports.default = _default;
var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread(_objectSpread({}, flexCentered), {}, {
      height: "200px",
      width: "500px"
    })
  }, /*#__PURE__*/_react.default.createElement(_ManagedDigitsClock.default, null));
};
exports.Default = Default;
var Custom = function Custom() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    useInterval = _useState2[0],
    setUseInterval = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isMode24 = _useState4[0],
    setIsMode24 = _useState4[1];
  var _useState5 = (0, _react.useState)((0, _utils.getDateFormat)(1523390599955)),
    _useState6 = _slicedToArray(_useState5, 2),
    localeTime = _useState6[0],
    onTimeChange = _useState6[1];
  return /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread(_objectSpread({}, flexCentered), {}, {
      height: "200px",
      width: "900px"
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread(_objectSpread({}, flexCentered), {}, {
      flexDirection: "column",
      width: "100%",
      flex: "1 1 auto"
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread(_objectSpread({}, flexCentered), {}, {
      flexDirection: "column"
    })
  }, /*#__PURE__*/_react.default.createElement("h4", null, "useInterval"), /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    style: {
      height: "50px",
      width: "50px"
    },
    value: useInterval,
    onChange: function onChange(e) {
      return setUseInterval(e.target.checked);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread(_objectSpread({}, flexCentered), {}, {
      flexDirection: "column"
    })
  }, /*#__PURE__*/_react.default.createElement("h4", null, "mode24H"), /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    style: {
      height: "50px",
      width: "50px"
    },
    value: isMode24,
    onChange: function onChange(e) {
      return setIsMode24(e.target.checked);
    }
  }))), /*#__PURE__*/_react.default.createElement(_ManagedDigitsClock.default, {
    localeTime: localeTime,
    useInterval: useInterval,
    onTimeChange: onTimeChange,
    mode24H: isMode24
  }));
};
exports.Custom = Custom;
var AdjustableSize = function AdjustableSize(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread(_objectSpread({}, flexCentered), {}, {
      border: "red solid 3px",
      height: "".concat(props.height, "px"),
      width: "".concat(props.width, "px")
    })
  }, /*#__PURE__*/_react.default.createElement(_ManagedDigitsClock.default, null));
};
exports.AdjustableSize = AdjustableSize;
AdjustableSize.argTypes = {
  height: {
    control: {
      type: "number",
      min: 50,
      max: 2000,
      step: 50
    },
    defaultValue: 150
  },
  width: {
    control: {
      type: "number",
      min: 100,
      max: 3000,
      step: 50
    },
    defaultValue: 300
  },
  useInterval: {
    control: false
  },
  mode24H: {
    control: false
  }
};