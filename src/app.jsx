import React, { useState } from "react";
import { DaysGroups, DigitsClock } from "./components";

function App() {
  const [currentDay, setCurrentDay] = useState(new Date().getDay());
  const [ampmState, setAmPmState] = useState('AM');

  return (
    <div className="mainContainer">
      <div className="daysContainer">
        <DaysGroups currentDay={currentDay} />
      </div>
      <DigitsClock updateAmPm={setAmPmState} ampmState = {ampmState}/>
      {ampmState}
    </div>
  );
}

export default App;
