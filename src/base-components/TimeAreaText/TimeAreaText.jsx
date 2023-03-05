import React from "react";
import PropTypes from "prop-types";
import "./TimeAreaText.scss";

function TimeAreaText({ label }) {
  return <h2 className="time-area-text">{label}:</h2>;
}

TimeAreaText.propTypes = {
  label: PropTypes.string,
};

TimeAreaText.defaultProps = {
  label: "undefined-zone",
};

export default TimeAreaText;
