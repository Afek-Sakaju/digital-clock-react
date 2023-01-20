import React, { useState } from "react";
import { DaysGroups } from "./components";

function App() {
  const [dayState, toggleDayState] = useState(false);

  return (
    <div className="mainContainer">
      <div className="daysContainer">
        <DaysGroups value={dayState} />
      </div>
      <div className="numbersContainer"></div>
    </div>
  );
}

export default App;
