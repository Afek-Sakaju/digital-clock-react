import React, { useState } from "react";
import { DaysGroups, DigitsClock } from "./components";

function App() {
  const [dayState, toggleDayState] = useState(false);
  const [numberState, changeNumberState] = useState(1);

  return (
    <div className="mainContainer">
      <div className="daysContainer">
        <DaysGroups value={dayState} />
      </div>
      <DigitsClock value={numberState} />
    </div>
  );
}

export default App;
