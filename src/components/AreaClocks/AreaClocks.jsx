import React from "react";
import PropTypes from "prop-types";

import { Clock } from "../../components";

export function AreaClocks({ timeZones }) {
  return (
    <>
      <div>
        <Clock />
        <p>Israel</p>
      </div>
      <div>
        <Clock timestamp={Date.now() + 1000 * 60 * 60 * 7} />
        <p>New-York</p>
      </div>
    </>
  );
}

AreaClocks.propTypes = {
  timeZones: PropTypes.array,
};

AreaClocks.defaultProps = {
  timeZones: [{ name: "Israel", diff: 0, isEarly: true }],
};
