import PropTypes from "prop-types";
import { daysArray } from "../../consts";
import { DayText } from "../../base-components";

export function DaysGroups({currentDay}) {
  return daysArray.map((day, index) => {
    
    return <DayText label={day.toUpperCase()} currentDay={currentDay} key={index} />;
  });
}

DaysGroups.propTypes = {
  currentDay: PropTypes.string,
};

//DayText.defaultProps = {};
