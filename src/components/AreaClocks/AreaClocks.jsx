import React from "react";
import PropTypes from "prop-types";

import { getZoneTimestamp } from "../../utils";
import { TimeAreaText } from "../../base-components";
import { Clock } from "../../components";
import "./AreaClocks.scss";

export function AreaClocks({ timeZones, clocksSize }) {
  return (
    <>
      {timeZones.map((zone, i) => {
        return (
          <div className="clock-and-zone-container">
            <TimeAreaText />
            <Clock
              key={i}
              size={clocksSize}
              timestamp={getZoneTimestamp(zone)}
            />
          </div>
        );
      })}
    </>
  );
}

AreaClocks.propTypes = {
  timeZones: PropTypes.array,
  clocksSize: PropTypes.string,
};

AreaClocks.defaultProps = {
  timeZones: [{ name: "Israel", diff: 0, isEarly: true }],
  clocksSize: "normal",
};
