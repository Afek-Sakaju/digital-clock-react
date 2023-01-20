import PropTypes from "prop-types";
import { daysArray } from "../../consts";
import { DayText } from "../../base-components";

export function DaysGroups(value) {
  return daysArray.map((day, index) => {
    return <DayText label={day} value={value} key={index} />;
  });
}

DaysGroups.propTypes = {
  value: PropTypes.bool,
};

//DayText.defaultProps = {};
