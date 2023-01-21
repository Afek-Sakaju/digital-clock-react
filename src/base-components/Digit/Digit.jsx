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
            id={`d${divNumber}`} // change to class
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
