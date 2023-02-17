import React, { useState } from "react";
import PropTypes from "prop-types";
import { ManagedDigitsClock, DaysGroup } from "../index";
import { getCurrentDateFormat } from "../../utils";
import "./Clock.scss";

export function Clock({ size }) {
  const [ampmState, setAmPmState] = useState("AM");
  const [localeTime, onTimeChange] = useState(getCurrentDateFormat());
  const [currentDay, setCurrentDay] = useState(localeTime.split(" ")[0]);

  const isSmallSize = size === "small";
  const style = isSmallSize
    ? { height: "100px", width: "150px" }
    : { height: "130px", width: "250px" };
  const ampmClass = isSmallSize ? "ampmText small" : "ampmText";

  return (
    <div className="mainContainer" style={style}>
      <div className="componentContainer">
        <div className="daysContainer">
          <DaysGroup currentDay={currentDay} />
        </div>
        <ManagedDigitsClock
          updateAmPm={setAmPmState}
          localeTime={localeTime}
          onTimeChange={onTimeChange}
          currentDay={currentDay}
          onDayChange={setCurrentDay}
          useInterval={true}
        />
        <div className={`ampmContainer ${isSmallSize ? "small" : "normal"}`}>
          <div
            className={
              ampmState === "AM" ? `${ampmClass}` : `${ampmClass} passive`
            }
          >
            AM
          </div>
          <div
            className={
              ampmState === "PM" ? `${ampmClass}` : `${ampmClass} passive`
            }
          >
            PM
          </div>
        </div>
      </div>
    </div>
  );
}

Clock.propTypes = {
  size: PropTypes.string,
};

Clock.defaultProps = {
  size: "normal",
};
