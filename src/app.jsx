import React from "react";

import { AreaClocks } from "./components";
import { timeZones } from "./utils";

function App() {
  return (
    <div className="app-container">
      <AreaClocks timeZones={timeZones} />
    </div>
  );
}

export default App;
