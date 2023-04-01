"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Clock", {
  enumerable: true,
  get: function get() {
    return _Clock.default;
  }
});
Object.defineProperty(exports, "ManagedDigitsClock", {
  enumerable: true,
  get: function get() {
    return _ManagedDigitsClock.default;
  }
});
var _ManagedDigitsClock = _interopRequireDefault(require("./ManagedDigitsClock/ManagedDigitsClock"));
var _Clock = _interopRequireDefault(require("./Clock/Clock"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }