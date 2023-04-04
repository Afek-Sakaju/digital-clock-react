"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextToggled;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./TextToggled.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function TextToggled(_ref) {
  var label = _ref.label,
    isActive = _ref.isActive,
    onClick = _ref.onClick;
  var className = isActive ? "text-style" : "text-style passive";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    onClick: onClick,
    onKeyDown: onClick
  }, label);
}
TextToggled.propTypes = {
  label: _propTypes.default.string,
  isActive: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
TextToggled.defaultProps = {
  label: "unTitled",
  isActive: false,
  onClick: undefined
};