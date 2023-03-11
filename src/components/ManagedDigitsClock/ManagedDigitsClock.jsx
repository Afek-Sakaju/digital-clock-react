/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { DigitsClock } from "../../base-components";
import { getDateFormat } from "../../utils";

export default function ManagedDigitsClock({
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
        onTimeChange?.((date) =>
          getDateFormat(date.timestamp + 1000, date.is24HoursMode)
        );
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

  useEffect(() => {
    onTimeChange?.((date) =>
      getDateFormat(date.timestamp, mode24H && ampmState === "PM")
    );
  }, [mode24H, ampmState]);

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
  onDayChange: PropTypes.func,
  useInterval: PropTypes.bool,
  mode24H: PropTypes.bool,
};

ManagedDigitsClock.defaultProps = {
  ampmState: undefined,
  updateAmpm: undefined,
  localeTime: undefined,
  onTimeChange: undefined,
  onDayChange: undefined,
  useInterval: true,
  mode24H: false,
};
