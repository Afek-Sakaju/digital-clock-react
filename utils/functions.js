"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDateFormat = getDateFormat;
exports.getZoneTimestamp = getZoneTimestamp;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* The function accepts timestamp and returns the timestamp converted to 
a date, the date properties returns as object such as: 
"{day:'day', time:'HH:MM:SS', ampm:'AM', timestamp: 102391}
if timestamp not provided, returns current date. */
function getDateFormat() {
  var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var is24HoursMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var date = typeof timestamp !== "number" ? new Date() : new Date(timestamp);
  var localeTimeAmpm = date.toLocaleDateString("en-US", {
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  var localeTime24H = is24HoursMode ? date.toLocaleDateString("en-US", {
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false
  }) : "";
  var _localeTimeAmpm$split = localeTimeAmpm.split(" "),
    _localeTimeAmpm$split2 = _slicedToArray(_localeTimeAmpm$split, 3),
    day = _localeTimeAmpm$split2[0],
    time12 = _localeTimeAmpm$split2[1],
    ampm = _localeTimeAmpm$split2[2];
  var _localeTime24H$split = localeTime24H.split(" "),
    _localeTime24H$split2 = _slicedToArray(_localeTime24H$split, 2),
    time24 = _localeTime24H$split2[1];
  return {
    day: day,
    time: is24HoursMode ? time24 : time12,
    ampm: ampm,
    timestamp: date.getTime(),
    is24HoursMode: is24HoursMode
  };
}
function getZoneTimestamp(zone) {
  var currentTimestamp = new Date().getTime();
  return zone.isEarly ? currentTimestamp - zone.diff * 1000 * 60 * 60 : currentTimestamp + zone.diff * 1000 * 60 * 60;
}