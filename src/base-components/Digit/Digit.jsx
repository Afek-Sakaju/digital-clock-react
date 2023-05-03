import React from "react";
import PropTypes from "prop-types";

import "./Digit.scss";
import { ACTIVE_LINES_BY_NUMBER, TRAPEZOIDS } from "../../utils";

export default function Digit({ value }) {
  return (
    <div className="digit-container">
      {TRAPEZOIDS.map((divNumber, index) => {
        const isActive = ACTIVE_LINES_BY_NUMBER[value].includes(divNumber);
        return (
          <div
            key={index}
            className={`d-shape ${
              isActive ? `d${divNumber}-shape` : `passive d${divNumber}-shape`
            }`}
          />
        );
      })}
    </div>
  );
}

Digit.propTypes = {
  value: PropTypes.number,
};

Digit.defaultProps = {
  value: 0,
};
