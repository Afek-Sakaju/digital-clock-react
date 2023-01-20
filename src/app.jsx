import React, { useState } from "react";
import { daysArray } from "./consts";
import { DayText } from "./base-components";

function App() {
  const [dayState, toggleDayState] = useState(false);

  return (
    <div className="mainContainer">
      <div className="daysContainer">
        {daysArray.map((day, index) => {
          return <DayText label={day} value={dayState} key={index} />;
        })}
      </div>
      <div className="numbersContainer"></div>
    </div>
  );
}

export default App;
