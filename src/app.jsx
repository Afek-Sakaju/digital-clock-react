import React from "react";

import { Clock } from "./components";
import { TimeAreaText } from "./base-components";
import { TIME_ZONES } from "./utils";

function App() {
  return (
    <div className="app-container">
      <div className="clocks-area-container">
        {TIME_ZONES.map((zone, i) => {
          return (
            <div key={i} className={`clock-and-zone-container`}>
              <TimeAreaText label={zone.name} />
              <Clock />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
