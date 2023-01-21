import React, { useState } from "react";
import { DaysGroups, DigitsClock } from "./components";

function App() {
  const [dayState, toggleDayState] = useState(false);
  const [ampmState, setAmPmState] = useState('AM');
  //const [numberState, changeNumberState] = useState(1);


  return (
    <div className="mainContainer">
      <div className="daysContainer">
        <DaysGroups value={dayState} />
      </div>
      <DigitsClock updateAmPm={setAmPmState} ampmState = {ampmState}/>
      {ampmState}
    </div>
  );
}

export default App;
