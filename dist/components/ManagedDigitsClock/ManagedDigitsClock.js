"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ManagedDigitsClock;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _baseComponents = require("../../base-components");
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable react-hooks/exhaustive-deps */

function ManagedDigitsClock(_ref) {
  var ampmState = _ref.ampmState,
    updateAmpm = _ref.updateAmpm,
    localeTime = _ref.localeTime,
    onTimeChange = _ref.onTimeChange,
    onDayChange = _ref.onDayChange,
    useInterval = _ref.useInterval,
    mode24H = _ref.mode24H;
  var _ref2 = localeTime !== null && localeTime !== void 0 ? localeTime : {},
    day = _ref2.day,
    time = _ref2.time,
    ampm = _ref2.ampm;
  (0, _react.useEffect)(function () {
    var timerInterval = useInterval && setInterval(function () {
      onTimeChange === null || onTimeChange === void 0 ? void 0 : onTimeChange(function (date) {
        return (0, _utils.getDateFormat)(date.timestamp + 1000, date.is24HoursMode);
      });
    }, 1000);
    return function () {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [useInterval]);
  (0, _react.useEffect)(function () {
    onDayChange === null || onDayChange === void 0 ? void 0 : onDayChange(day);
  }, [day]);
  (0, _react.useEffect)(function () {
    updateAmpm === null || updateAmpm === void 0 ? void 0 : updateAmpm(ampm);
  }, [ampm]);
  (0, _react.useEffect)(function () {
    onTimeChange === null || onTimeChange === void 0 ? void 0 : onTimeChange(function (date) {
      return (0, _utils.getDateFormat)(date.timestamp, mode24H && ampmState === "PM");
    });
  }, [mode24H, ampmState]);
  return /*#__PURE__*/_react.default.createElement(_baseComponents.DigitsClock, {
    time: time
  });
}
ManagedDigitsClock.propTypes = {
  ampmState: _propTypes.default.string,
  updateAmpm: _propTypes.default.func,
  localeTime: _propTypes.default.shape({
    day: _propTypes.default.string,
    time: _propTypes.default.string,
    ampm: _propTypes.default.string
  }),
  onTimeChange: _propTypes.default.func,
  onDayChange: _propTypes.default.func,
  useInterval: _propTypes.default.bool,
  mode24H: _propTypes.default.bool
};
ManagedDigitsClock.defaultProps = {
  ampmState: undefined,
  updateAmpm: undefined,
  localeTime: undefined,
  onTimeChange: undefined,
  onDayChange: undefined,
  useInterval: true,
  mode24H: false
};