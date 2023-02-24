import React from "react";

import { AreaClocks } from "./components";
import { timeZones } from "./utils";

function App() {
  return (
    <div className="appContainer">
      <AreaClocks timeZones={timeZones} />
    </div>
  );
}

export default App;
