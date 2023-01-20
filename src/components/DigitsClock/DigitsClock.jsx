import React from "react";
import PropTypes from "prop-types";
import { Digit } from "../../base-components";

export function DigitsClock(value) {
  return <Digit />;
}

DigitsClock.propTypes = {
  value: PropTypes.number,
};

//DayText.defaultProps = {};
