import React from "react";
import PropTypes from "prop-types";
import "./Digit.scss";
import { activeLinesByNumber, trapezoids } from "../../utils/consts";

export function Digit({ value }) {
  return (
    <div className="digitContainer">
      {trapezoids.map((divNumber, index) => {
        const isActive = activeLinesByNumber[value].includes(divNumber);

        return (
          <div
            key={index}
            className={
              isActive ? `d${divNumber}Shape` : `passive d${divNumber}Shape`
            }
          ></div>
        );
      })}
    </div>
  );
}

Digit.propTypes = {
  value: PropTypes.number,
};

Digit.defaultProps = {
  value: 8,
};
