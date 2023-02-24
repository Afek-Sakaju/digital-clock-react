import React from "react";
import PropTypes from "prop-types";

import { Clock } from "../../components";
import { getZoneTimestamp } from "../../utils";

export function AreaClocks({ timeZones, clocksSize }) {
  return (
    <>
      {timeZones.map((zone, i) => {
        return (
          <div key={i}>
            {zone.name}
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
