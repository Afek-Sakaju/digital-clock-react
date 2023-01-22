import React from "react";
import PropTypes from "prop-types";
import "./DayText.scss";
import {daysArray} from '../../consts'

export function DayText({ label, currentDay }) {
  const isCurrentDay = !(label.localeCompare(daysArray[currentDay], 'en', { sensitivity: 'base' }));
  const className =  isCurrentDay ? "dayText" : "dayText passive";

  return <div className={className}>{label}</div>;
}

DayText.propTypes = {
  label: PropTypes.string,
  currentDay: PropTypes.string,
};

DayText.defaultProps = {
  label: "noDay",
};
