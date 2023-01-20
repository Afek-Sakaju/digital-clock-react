import React from "react";
import PropTypes from "prop-types";
import { Digit } from "../../base-components";
import './DigitsClock.scss'

export function DigitsClock({ value }) {
  return (
    <div className="numbersContainer">
      <Digit value={value} />
    </div>
  );
}

DigitsClock.propTypes = {
  value: PropTypes.number,
};

//DayText.defaultProps = {};
