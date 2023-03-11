"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TimeAreaText;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./TimeAreaText.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function TimeAreaText(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/_react.default.createElement("h2", {
    className: "time-area-text"
  }, label, ":");
}
TimeAreaText.propTypes = {
  label: _propTypes.default.string
};
TimeAreaText.defaultProps = {
  label: "undefined-zone"
};