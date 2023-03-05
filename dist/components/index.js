"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ManagedDigitsClock = require("./ManagedDigitsClock/ManagedDigitsClock");
Object.keys(_ManagedDigitsClock).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ManagedDigitsClock[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ManagedDigitsClock[key];
    }
  });
});
var _Clock = require("./Clock/Clock");
Object.keys(_Clock).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Clock[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Clock[key];
    }
  });
});