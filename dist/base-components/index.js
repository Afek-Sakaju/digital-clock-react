"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Digit = require("./Digit/Digit");
Object.keys(_Digit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Digit[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Digit[key];
    }
  });
});
var _TimeAreaText = require("./TimeAreaText/TimeAreaText");
Object.keys(_TimeAreaText).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TimeAreaText[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TimeAreaText[key];
    }
  });
});
var _TextToggled = require("./TextToggled/TextToggled");
Object.keys(_TextToggled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TextToggled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TextToggled[key];
    }
  });
});