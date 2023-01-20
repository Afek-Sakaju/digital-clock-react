import React from "react";
import PropTypes from "prop-types";
import "./Digit.scss";

export function Digit(num, value) {
    const activeTrapezoids = [0,0,0,0,0,0,0,0]

  return <div></div>;
}

Digit.propTypes = {
  num: PropTypes.number,
  value: PropTypes.number,
};

Digit.defaultProps = {
  num: 8,
};
