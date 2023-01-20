import React, { useState } from "react";
import { DaysGroups, DigitsClock } from "./components";

function App() {
  const [dayState, toggleDayState] = useState(false);
  const [numberState, changeNumberState] = useState(0);

  return (
    <div className="mainContainer">
      <div className="daysContainer">
        <DaysGroups value={dayState} />
      </div>
      <div className="numbersContainer">
        <DigitsClock value={numberState} />
      </div>
    </div>
  );
}

export default App;
