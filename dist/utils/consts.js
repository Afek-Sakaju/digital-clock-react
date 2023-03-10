"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRAPEZOIDS = exports.TIME_ZONES = exports.DAYS_ARRAY = exports.CLOCK_SIZES = exports.ACTIVE_LINES_BY_NUMBER = void 0;
var DAYS_ARRAY = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
exports.DAYS_ARRAY = DAYS_ARRAY;
var TRAPEZOIDS = [1, 2, 3, 4, 5, 6, 7];

/*
 *  +--d1--+
 *  |      |
 * d2      d3
 *  |      |
 *  +--d4--+
 *  |      |
 * d5      d6
 *  |      |
 *  +--d7--+
 */
exports.TRAPEZOIDS = TRAPEZOIDS;
var ACTIVE_LINES_BY_NUMBER = {
  0: [1, 2, 3, 5, 6, 7],
  1: [3, 6],
  2: [1, 3, 4, 5, 7],
  3: [1, 3, 4, 6, 7],
  4: [2, 3, 4, 6],
  5: [1, 2, 4, 6, 7],
  6: [1, 2, 4, 5, 6, 7],
  7: [1, 3, 6],
  8: [1, 2, 3, 4, 5, 6, 7],
  9: [1, 2, 3, 4, 6, 7]
};
exports.ACTIVE_LINES_BY_NUMBER = ACTIVE_LINES_BY_NUMBER;
var TIME_ZONES = [{
  name: "Israel",
  diff: 0,
  isEarly: true
}, {
  name: "United-States",
  diff: 5,
  isEarly: true
}, {
  name: "England",
  diff: 2,
  isEarly: true
}, {
  name: "Japan",
  diff: 7,
  isEarly: false
}];
exports.TIME_ZONES = TIME_ZONES;
var CLOCK_SIZES = {
  small: {
    width: "200px",
    height: "80px"
  },
  medium: {
    width: "250px",
    height: "100px"
  }
};
exports.CLOCK_SIZES = CLOCK_SIZES;