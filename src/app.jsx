import React from "react";

import { Clock } from "./components";
import { TimeAreaText } from "./base-components";
import { TIME_ZONES, getZoneTimestamp } from "./utils";

function App() {
  return (
    <div className="app-container">
      {TIME_ZONES.map((zone, i) => {
        return (
          <div key={i} className="clock-and-zone-container">
            <TimeAreaText label={zone.name} />
            <Clock timestamp={getZoneTimestamp(zone)}/>
          </div>
        );
      })}
    </div>
  );
}

export default App;
