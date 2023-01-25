import React, { useState } from "react";
import { DaysGroups, DigitsClock } from "./components";

function App() {
  const [ampmState, setAmPmState] = useState("AM");
  const [localeTime, setLocaleTime] = useState(
    new Date().toLocaleDateString("en-US", {
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
  );
  const [currentDay, setCurrentDay] = useState(localeTime.split(" ")[0]);

  return (
    <div className="mainContainer">
      <div className="componentContainer">
        <div className="daysContainer">
          <DaysGroups currentDay={currentDay} />
        </div>

        <DigitsClock
          updateAmPm={setAmPmState}
          ampmState={ampmState}
          localeTime={localeTime}
          setLocaleTime={setLocaleTime}
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
        />
        <div className="ampmContainer">
          <div className="ampmText">{ampmState}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
