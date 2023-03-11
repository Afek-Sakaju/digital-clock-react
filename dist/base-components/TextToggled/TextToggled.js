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
    activeLabel = _ref.activeLabel,
    onClick = _ref.onClick;
  var isActiveLabel = !(label !== null && label !== void 0 && label.localeCompare(activeLabel, "en", {
    sensitivity: "base"
  }));
  var className = isActiveLabel ? "text-style" : "text-style passive";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    onClick: onClick
  }, label);
}
TextToggled.propTypes = {
  label: _propTypes.default.string,
  activeLabel: _propTypes.default.string,
  onClick: _propTypes.default.func
};
TextToggled.defaultProps = {
  label: "unknown",
  activeLabel: "unknown",
  onClick: undefined
};