"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertTwoDigitsTimeUnits = assertTwoDigitsTimeUnits;
exports.getDateFormat = getDateFormat;
exports.getZoneTimestamp = getZoneTimestamp;
var _consts = require("./consts");
function getZoneTimestamp(zone) {
  var currentTimestamp = new Date().getTime();
  return zone.isEarly ? currentTimestamp - zone.diff * 1000 * 60 * 60 : currentTimestamp + zone.diff * 1000 * 60 * 60;
}

/* The function "assertTwoDigitsTimeUnits" object of time units {hours, minutes, seconds} 
then modify all the time units so every time unit be made of 2 digits,
the function returns all the units combined into string */
function assertTwoDigitsTimeUnits(_ref) {
  var _ref2, _ref3, _ref4;
  var _ref$hours = _ref.hours,
    hours = _ref$hours === void 0 ? 0 : _ref$hours,
    _ref$minutes = _ref.minutes,
    minutes = _ref$minutes === void 0 ? 0 : _ref$minutes,
    _ref$seconds = _ref.seconds,
    seconds = _ref$seconds === void 0 ? 0 : _ref$seconds;
  hours = (_ref2 = "".concat(hours)) === null || _ref2 === void 0 ? void 0 : _ref2.padStart(2, "0");
  minutes = (_ref3 = "".concat(minutes)) === null || _ref3 === void 0 ? void 0 : _ref3.padStart(2, "0");
  seconds = (_ref4 = "".concat(seconds)) === null || _ref4 === void 0 ? void 0 : _ref4.padStart(2, "0");
  return [hours, minutes, seconds].join(":");
}

/* The function "getDateFormat" accepts number "timestamp" then returns object
of the date properties from the timestamp provided, for example: 
{day:'Sat', time:'02:05:55', ampm:'AM', timestamp: 1675137155, is24HoursMode: false}
if timestamp not provided, returns current date. */
function getDateFormat() {
  var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var is24HoursMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var date = typeof timestamp !== "number" ? new Date() : new Date(timestamp);
  var currentTimestamp = date.getTime();
  var day = _consts.DAYS_ARRAY[date.getDay()];
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";
  if (!is24HoursMode) hours %= 12;
  var time = assertTwoDigitsTimeUnits({
    hours: hours,
    minutes: minutes,
    seconds: seconds
  });
  return {
    day: day,
    time: time,
    ampm: ampm,
    timestamp: currentTimestamp,
    is24HoursMode: is24HoursMode
  };
}