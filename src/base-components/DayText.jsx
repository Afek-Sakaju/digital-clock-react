import React from "react";
import PropTypes from "prop-types";
import "./DayText.scss";

export function DayText({ label, value, key }) {
  const className = value ? "dayTextActive" : "dayTextPassive";

  return (
    <div key={key} className={className}>
      {label}
    </div>
  );
}

DayText.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
};

DayText.defaultProps = {
  label: "noDay",
};
