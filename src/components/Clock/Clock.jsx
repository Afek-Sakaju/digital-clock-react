import React, { useState } from "react";
import PropTypes from "prop-types";

import ManagedDigitsClock from "../ManagedDigitsClock/ManagedDigitsClock";
import { TextToggled } from "../../base-components";
import { getDateFormat, CLOCK_SIZES, DAYS_ARRAY } from "../../utils";
import "./Clock.scss";

export default function Clock({ size, timestamp, useInterval, isMode24H }) {
  const [mode24H, setMode24H] = useState(isMode24H);
  const [localeTime, onTimeChange] = useState(
    getDateFormat(timestamp, mode24H)
  );
  const [currentDay, setCurrentDay] = useState(localeTime.day);
  const [ampmState, setAmPmState] = useState(localeTime.ampm);
  const sizeObject = CLOCK_SIZES[size] || CLOCK_SIZES.medium;
  return (
    <div
      className={`clock-component-container clock-${size}`}
      style={sizeObject}
    >
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
  size: PropTypes.oneOf(CLOCK_SIZES),
  timestamp: PropTypes.number,
  useInterval: PropTypes.bool,
  isMode24H: PropTypes.bool,
};

Clock.defaultProps = {
  size: "small",
  timestamp: undefined,
  useInterval: true,
  isMode24H: false,
};
