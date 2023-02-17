import React, { useState } from "react";
import PropTypes from "prop-types";
import { ManagedDigitsClock, DaysGroup } from "../index";
import "./Clock.scss";
import { getCurrentDateFormat } from "../../utils";

export function Clock({ height, width }) {
  const [ampmState, setAmPmState] = useState("AM");
  const [localeTime, onTimeChange] = useState(getCurrentDateFormat());
  const [currentDay, setCurrentDay] = useState(localeTime.split(" ")[0]);

  return (
    <div className="mainContainer" style={{ height, width }}>
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

Clock.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

Clock.defaultProps = {
  height: "100%",
  width: "100%",
};
