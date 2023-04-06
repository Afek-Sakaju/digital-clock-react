"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertTwoDigitsTimeUnits = assertTwoDigitsTimeUnits;
exports.getDateFormat = getDateFormat;
var _consts = require("./consts");
// eslint-disable-next-line import/no-cycle

/**
 * Modifies the given time units {hours, minutes, seconds} to ensure that each unit
 * consists of two digits. Returns all the units combined into a string format "HH:MM:SS".
 *
 * @param {Object} timeUnits - An object containing time units: {hours, minutes, seconds}.
 * @param {number} timeUnits.hours - The number of hours to format.
 * @param {number} timeUnits.minutes - The number of minutes to format.
 * @param {number} timeUnits.seconds - The number of seconds to format.
 *
 * @returns {string} - The formatted time units in the format "HH:MM:SS".
 */
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

/**
 *
 * The function "getDateFormat" accepts a number "timestamp" and returns an object
 * containing the date properties from the provided timestamp.
 * If no timestamp is provided, it returns the current date.
 * @param {number} [timestamp] - The timestamp to generate the date properties from.
 * @param {boolean} [is24HoursMode] - If true, uses 24-hour format instead of 12-hour format.
 * @returns {{
 *   day: string,
 *   time: string,
 *   ampm: string,
 *   timestamp: number,
 *   is24HoursMode: boolean
 *   }} - An object containing the date properties.
 */
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