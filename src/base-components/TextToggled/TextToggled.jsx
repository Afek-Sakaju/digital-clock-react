import React from "react";
import PropTypes from "prop-types";
import "./TextToggled.scss";

export default function TextToggled({ label, activeLabel, onClick }) {
  const isActiveLabel = !label?.localeCompare(activeLabel, "en", {
    sensitivity: "base",
  });
  const className = isActiveLabel ? "text-style" : "text-style passive";

  return (
    <div
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
      role="presentation"
    >
      {label}
    </div>
  );
}

TextToggled.propTypes = {
  label: PropTypes.string,
  activeLabel: PropTypes.string,
  onClick: PropTypes.func,
};

TextToggled.defaultProps = {
  label: "unknown",
  activeLabel: "unknown",
  onClick: undefined,
};
