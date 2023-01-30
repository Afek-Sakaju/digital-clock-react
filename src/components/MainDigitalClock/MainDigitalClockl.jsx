import React, { useState } from "react";
import PropTypes from "prop-types";
import { DigitsClock, DaysGroup } from "../index";
import "./MainDigitalClock.scss";

export function MainDigitalClock({ height, width }) {
  const [ampmState, setAmPmState] = useState("AM");

  const [localeTime, setLocaleTime] = useState(
    new Date().toLocaleDateString("en-US", {
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
  );
  const [currentDay, setCurrentDay] = useState(localeTime.split(" ")[0]);

  return (
    <div className="mainContainer" style={{ height, width }}>
      <div className="componentContainer">
        <div className="daysContainer">
          <DaysGroup currentDay={currentDay} />
        </div>

        <DigitsClock
          updateAmPm={setAmPmState}
          ampmState={ampmState}
          localeTime={localeTime}
          setLocaleTime={setLocaleTime}
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
        />
        <div className="ampmContainer">
          <div className={ampmState === "AM" ? "ampmText" : "ampmText passive"}>
            AM
          </div>
          <div className={ampmState === "PM" ? "ampmText" : "ampmText passive"}>
            PM
          </div>
        </div>
      </div>
    </div>
  );
}

MainDigitalClock.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

MainDigitalClock.defaultProps = {
  height: "450px",
  width: "1100px",
};