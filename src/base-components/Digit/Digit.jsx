import React from "react";
import PropTypes from "prop-types";
import "./Digit.scss";
import { activeLinesByNumber, trapezoids } from "../../consts";

export function Digit({ value }) {
  return (
    <div className="digitsContainer">
      {trapezoids.map((divNumber, index) => {
        const isActive = activeLinesByNumber[value].includes(divNumber);

        console.log(`number:${value}, div: ${divNumber} is:${isActive}`);
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
