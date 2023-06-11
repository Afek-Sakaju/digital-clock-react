import React, { useState } from "react";

import { Clock } from "./components";
import { CLOCK_SIZES } from "./utils";

function App() {
  const [useInterval, setUseInterval] = useState(true);
  const [selectedSize, setSelectedSize] = useState("medium");

  return (
    <div className="app-container">
      <div>
        <div className="input-container">
          <h3>Interval:</h3>
          <input
            type="checkbox"
            checked={useInterval}
            onChange={(e) => setUseInterval(e.target.checked)}
          />
        </div>
        <div className="input-container">
          <h3>Size:</h3>
          {Object.keys(CLOCK_SIZES).map((size, i) => {
            return (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label key={i}>
                <input
                  type="radio"
                  value={size}
                  checked={selectedSize === size}
                  onChange={(e) => setSelectedSize(e.target.value)}
                />
                {size}
              </label>
            );
          })}
        </div>
      </div>
      <div>
        <Clock size={selectedSize} useInterval={useInterval} />
      </div>
    </div>
  );
}

export default App;
