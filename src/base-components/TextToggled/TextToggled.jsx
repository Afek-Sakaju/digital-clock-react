import React from "react";
import PropTypes from "prop-types";
import "./TextToggled.scss";

export default function TextToggled({ label, isActive, onClick }) {
  const className = isActive ? "text-style" : "text-style passive";

  return (
    <div className={className} onClick={onClick} onKeyDown={onClick}>
      {label}
    </div>
  );
}

TextToggled.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

TextToggled.defaultProps = {
  label: "unTitled",
  isActive: false,
  onClick: undefined,
};
