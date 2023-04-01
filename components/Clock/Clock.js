"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Clock;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ = require("../");
var _baseComponents = require("../../base-components");
var _utils = require("../../utils");
require("./Clock.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Clock(_ref) {
  var size = _ref.size,
    timestamp = _ref.timestamp,
    useInterval = _ref.useInterval,
    isMode24H = _ref.isMode24H;
  var _useState = (0, _react.useState)(isMode24H),
    _useState2 = _slicedToArray(_useState, 2),
    mode24H = _useState2[0],
    setMode24H = _useState2[1];
  var _useState3 = (0, _react.useState)((0, _utils.getDateFormat)(timestamp, mode24H)),
    _useState4 = _slicedToArray(_useState3, 2),
    localeTime = _useState4[0],
    onTimeChange = _useState4[1];
  var _useState5 = (0, _react.useState)(localeTime.day),
    _useState6 = _slicedToArray(_useState5, 2),
    currentDay = _useState6[0],
    setCurrentDay = _useState6[1];
  var _useState7 = (0, _react.useState)(localeTime.ampm),
    _useState8 = _slicedToArray(_useState7, 2),
    ampmState = _useState8[0],
    setAmPmState = _useState8[1];
  var sizeObject = _utils.CLOCK_SIZES[size] || _utils.CLOCK_SIZES["medium"];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "clock-component-container clock-".concat(size),
    style: sizeObject
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "component-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "days-container"
  }, _utils.DAYS_ARRAY.map(function (day, i) {
    return /*#__PURE__*/_react.default.createElement(_baseComponents.TextToggled, {
      key: i,
      label: day,
      activeLabel: currentDay
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "digits-container"
  }, /*#__PURE__*/_react.default.createElement(_.ManagedDigitsClock, {
    ampmState: ampmState,
    updateAmPm: setAmPmState,
    localeTime: localeTime,
    onTimeChange: onTimeChange,
    currentDay: currentDay,
    onDayChange: setCurrentDay,
    useInterval: useInterval,
    mode24H: mode24H
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "bottom-container",
    onClick: function onClick() {
      return setMode24H(function (m) {
        return !m;
      });
    }
  }, mode24H ? /*#__PURE__*/_react.default.createElement(_baseComponents.TextToggled, {
    label: "24H",
    activeLabel: "24H"
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_baseComponents.TextToggled, {
    label: "AM",
    activeLabel: ampmState
  }), /*#__PURE__*/_react.default.createElement(_baseComponents.TextToggled, {
    label: "PM",
    activeLabel: ampmState
  })))));
}
Clock.propTypes = {
  size: _propTypes.default.string,
  timestamp: _propTypes.default.number,
  useInterval: _propTypes.default.bool,
  isMode24H: _propTypes.default.bool
};
Clock.defaultProps = {
  size: "small",
  timestamp: undefined,
  useInterval: true,
  isMode24H: false
};