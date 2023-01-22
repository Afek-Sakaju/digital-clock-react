import React from "react";
import PropTypes from "prop-types";
import "./Digit.scss";
import { activeLinesByNumber, trapezoids } from "../../consts";


export function Digit({ value }) {
  return (
    <span style={{fontSize:'180px'}}>{value}</span>
  );
}

Digit.propTypes = {
  value: PropTypes.number,
};

Digit.defaultProps = {
  value: 8,
};
