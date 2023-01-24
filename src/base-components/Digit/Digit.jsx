import React from "react";
import PropTypes from "prop-types";
import "./Digit.scss";
import { activeLinesByNumber, trapezoids } from "../../consts";


export function Digit({ value }) {
  return (
    <div className="digitsContainer">
      {trapezoids.map((divNumber, index) => {
        const isActive = activeLinesByNumber[value].includes(divNumber);

        return (
          <div
            key={index}
            className={isActive ? `d${divNumber}` : `passive d${divNumber}`}
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
