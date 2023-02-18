import React, { useState } from "react";
import PropTypes from "prop-types";
import { ManagedDigitsClock, DaysGroup } from "../index";
import { getCurrentDateFormat } from "../../utils";
import "./Clock.scss";

export function Clock({ size }) {
  const [ampmState, setAmPmState] = useState("AM");
  const [localeTime, onTimeChange] = useState(getCurrentDateFormat());
  const [currentDay, setCurrentDay] = useState(localeTime.split(" ")[0]);

  let sizeClassname;
  let sizeObj;
  switch (size) {
    case "small":
      sizeClassname = "clock-small";
      sizeObj = { width: "200px", height: "80px" };
      break;
    default:
      sizeClassname = "clock-normal";
      sizeObj = { width: "250px", height: "130px" };
  }

  // todo : transfer ampm to component & change classes to kabab & change color of trapezoid to variable
  // todo : onClick will toggle between 24h to ampm
  return (
    <div className={`clockComponentContainer ${sizeClassname}`} style={sizeObj}>
      <div className="componentContainer">
        <div className="daysContainer">
          <DaysGroup currentDay={currentDay} />
        </div>
        <div className="digits-container">
          <ManagedDigitsClock
            updateAmPm={setAmPmState}
            localeTime={localeTime}
            onTimeChange={onTimeChange}
            currentDay={currentDay}
            onDayChange={setCurrentDay}
            useInterval={true}
          />
        </div>
        <div className="ampmContainer">
          <div className={ampmState === "AM" ? `ampmText` : `ampmText passive`}>
            AM
          </div>
          <div className={ampmState === "PM" ? `ampmText` : `ampmText passive`}>
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
