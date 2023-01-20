import React from "react";
import PropTypes from "prop-types";
import "./Digit.scss";
import { activeLinesByNumber, trapezoids } from "../../consts";

/* export const activeLines = {
  0: [1, 2, 3, 5, 6, 7],
  1: [3, 6],
  2: [1, 3, 4, 5, 7],
  3: [1, 3, 4, 6, 7],
  4: [2, 3, 4, 6],
  5: [1, 2, 4, 6, 7],
  6: [1, 2, 4, 5, 6, 7],
  7: [1, 3, 6],
  8: [1, 2, 3, 4, 5, 6, 7],
  9: [1, 2, 3, 4, 6],
}; */
export function Digit({ value }) {
  return (
    <div className="digitsContainer">
      {trapezoids.map((divNumber, index) => {
        const isActive = activeLinesByNumber[value].includes(divNumber);

        return (
          <div
            id={`d${divNumber}`}
            key={index}
            className={isActive ? "trapezoid" : "trapezoid passive"}
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
