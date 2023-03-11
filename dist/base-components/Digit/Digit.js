"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Digit;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../utils");
require("./Digit.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Digit(_ref) {
  var value = _ref.value;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "digit-container"
  }, _utils.TRAPEZOIDS.map(function (divNumber, index) {
    var isActive = _utils.ACTIVE_LINES_BY_NUMBER[value].includes(divNumber);
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: "d-shape ".concat(isActive ? "d".concat(divNumber, "-shape") : "passive d".concat(divNumber, "-shape"))
    });
  }));
}
Digit.propTypes = {
  value: _propTypes.default.number
};
Digit.defaultProps = {
  value: 0
};