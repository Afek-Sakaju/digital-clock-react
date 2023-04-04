"use strict";

var _functions = require("../functions");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
describe("functions tests", function () {
  describe("assertTwoDigitsTimeUnits tests", function () {
    test.each([[{
      hours: 9,
      minutes: 7,
      seconds: 1
    }, "09:07:01"], [{
      hours: 20,
      minutes: 10,
      seconds: 5
    }, "20:10:05"], [{
      hours: 15,
      minutes: 15,
      seconds: 15
    }, "15:15:15"]])("function accepts time units:%s then returns time:%s", function (timeUnits, result) {
      expect((0, _functions.assertTwoDigitsTimeUnits)(timeUnits)).toEqual(result);
    });
    test.each([[{
      minutes: 15,
      seconds: 15
    }, "00:15:15"], [{
      hours: 6
    }, "06:00:00"], [{}, "00:00:00"]])("function accepts partial time units:%s then returns time:%s", function (timeUnits, result) {
      expect((0, _functions.assertTwoDigitsTimeUnits)(timeUnits)).toEqual(result);
    });
    describe("getDateFormat tests", function () {
      /* Note that the tests built for 'GMT+0300' locale time of israel
      and it may differentiate in other timezone */

      test.each([[1677237155, {
        day: "Tue",
        time: "11:53:57",
        ampm: "AM",
        timestamp: 1677237155,
        is24HoursMode: undefined
      }], [928977239155, {
        day: "Thu",
        time: "04:13:59",
        ampm: "AM",
        timestamp: 928977239155,
        is24HoursMode: undefined
      }], [1523977237155, {
        day: "Tue",
        time: "06:00:37",
        ampm: "PM",
        timestamp: 1523977237155,
        is24HoursMode: undefined
      }]])("function accepts timestamp:%s then returns date:%s", function (timestamp, result) {
        expect((0, _functions.getDateFormat)(timestamp)).toEqual(result);
      });
      test.each([[false], [null], [undefined]])("function accepts timestamp:%s then returns current date", function (timestamp) {
        var date = new Date();
        var ampm = date.getHours() >= 12 ? "PM" : "AM";
        // eslint-disable-next-line no-unused-vars
        var _date$toString$split = date.toString().split(" "),
          _date$toString$split2 = _slicedToArray(_date$toString$split, 5),
          day = _date$toString$split2[0],
          _month = _date$toString$split2[1],
          _monthDay = _date$toString$split2[2],
          _year = _date$toString$split2[3],
          time = _date$toString$split2[4];
        var result = {
          day: day,
          time: time,
          ampm: ampm,
          timestamp: date.getTime(),
          is24HoursMode: true
        };
        expect((0, _functions.getDateFormat)(timestamp, true)).toEqual(result);
      });
    });
  });
});