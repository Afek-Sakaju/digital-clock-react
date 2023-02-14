import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ManagedDigitsClock.scss";
import { DigitsClock } from "../../base-components/DigitsClock/DigitsClock";
import { getDateFormat } from "../../utils";

export function ManagedDigitsClock({
  updateAmPm,
  date,
  setLocaleTime,
  setCurrentDay,
  useInterval = false,
  // onDayChanged,
}) {
  const [dateValue, setDateValue] = useState(date);
  const [day, time, ampm] = getDateFormat(dateValue).split(" ");

  useEffect(() => {
    const timerInterval =
      useInterval &&
      setInterval(() => {
        setDateValue((d) => {
          const value = new Date(d).getTime() + 1000;
          setLocaleTime?.(value);
          return value;
        });
      }, 1000);

    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [useInterval]);

  useEffect(() => {
    setCurrentDay?.(day);
  }, [day]);

  useEffect(() => {
    updateAmPm?.(ampm);
  }, [ampm]);

  return <DigitsClock time={time} />;
}

ManagedDigitsClock.propTypes = {
  updateAmPm: PropTypes.func.isRequired,
  ampmState: PropTypes.string.isRequired,
  localeTime: PropTypes.string.isRequired,
  setLocaleTime: PropTypes.func.isRequired,
  currentDay: PropTypes.string.isRequired,
  setCurrentDay: PropTypes.func.isRequired,
};

//DayText.defaultProps = {};
