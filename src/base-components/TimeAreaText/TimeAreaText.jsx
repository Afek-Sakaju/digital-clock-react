import React from "react";
import PropTypes from "prop-types";
import "./TimeAreaText.scss";

export function TimeAreaText({ label }) {
  return <div className="time-area-text">{label}:</div>;
}

TimeAreaText.propTypes = {
  label: PropTypes.string,
};

TimeAreaText.defaultProps = {
  label: "undefined-zone",
};
