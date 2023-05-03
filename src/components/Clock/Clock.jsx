import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Clock.scss";
import { TextToggled } from "../../base-components";
import ManagedDigitsClock from "../ManagedDigitsClock/ManagedDigitsClock";
import { getDateFormat, CLOCK_SIZES, DAYS_ARRAY } from "../../utils";

export default function Clock({ size, timestamp, useInterval, isMode24H }) {
  const [mode24H, setMode24H] = useState(isMode24H);
  const [localeTime, onTimeChange] = useState(
    getDateFormat(timestamp, mode24H)
  );
  const [currentDay, setCurrentDay] = useState(localeTime.day);
  const [ampmState, setAmPmState] = useState(localeTime.ampm);
  const sizeObject = CLOCK_SIZES[size] || CLOCK_SIZES.medium;
  const classes = classNames("clock-component-container", size);

  return (
    <div className={classes} style={sizeObject}>
      <div className="component-container">
        <div className="days-container">
          {DAYS_ARRAY.map((day, i) => (
            <TextToggled key={i} label={day} isActive={currentDay === day} />
          ))}
        </div>
        <div className="digits-container">
          <ManagedDigitsClock
            ampmState={ampmState}
            updateAmPm={setAmPmState}
            localeTime={localeTime}
            onTimeChange={onTimeChange}
            currentDay={currentDay}
            onDayChange={setCurrentDay}
            useInterval={useInterval}
            mode24H={mode24H}
          />
        </div>
        <div
          className="bottom-container"
          onClick={() => setMode24H((m) => !m)}
          onKeyDown={() => setMode24H((m) => !m)}
        >
          {mode24H ? (
            <TextToggled label="24H" isActive={mode24H} />
          ) : (
            <>
              <TextToggled label="AM" isActive={ampmState === "AM"} />
              <TextToggled label="PM" isActive={ampmState === "PM"} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

Clock.propTypes = {
  size: PropTypes.oneOf(Object.keys(CLOCK_SIZES)),
  timestamp: PropTypes.number,
  useInterval: PropTypes.bool,
  isMode24H: PropTypes.bool,
};

Clock.defaultProps = {
  size: Object.keys(CLOCK_SIZES)[0],
  timestamp: undefined,
  useInterval: true,
  isMode24H: false,
};
