/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { DigitsClock } from "../../base-components/DigitsClock/DigitsClock";
import { getDateFormat } from "../../utils";

export function ManagedDigitsClock({
  ampmState,
  updateAmpm,
  localeTime,
  onTimeChange,
  onDayChange,
  useInterval,
  mode24H,
}) {
  const { day, time, ampm } = localeTime ?? {};

  useEffect(() => {
    const timerInterval =
      useInterval &&
      setInterval(() => {
        onTimeChange?.((date) => {
          return getDateFormat(
            date.timestamp + 1000,
            mode24H && ampmState === "AM"
          );
        });
      }, 1000);

    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [useInterval]);

  useEffect(() => {
    onDayChange?.(day);
  }, [day]);

  useEffect(() => {
    updateAmpm?.(ampm);
  }, [ampm]);

  return <DigitsClock time={time} />;
}

ManagedDigitsClock.propTypes = {
  ampmState: PropTypes.string,
  updateAmpm: PropTypes.func,
  localeTime: PropTypes.shape({
    day: PropTypes.string,
    time: PropTypes.string,
    ampm: PropTypes.string,
  }),
  onTimeChange: PropTypes.func,
  currentDay: PropTypes.string,
  onDayChange: PropTypes.func,
  useInterval: PropTypes.bool,
  mode24H: PropTypes.bool,
};

ManagedDigitsClock.defaultProps = {
  ampmState: undefined,
  updateAmpm: undefined,
  localeTime: undefined,
  onTimeChange: undefined,
  currentDay: "noDay",
  onDayChange: undefined,
  useInterval: true,
  mode24H: false,
};
