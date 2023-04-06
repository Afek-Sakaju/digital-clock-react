import React from "react";

import { Clock } from "./components";

function App() {
  return (
    <div className="app-container">
      <Clock size="small" />
      <Clock size="medium" timestamp={123100231459} />
    </div>
  );
}

export default App;
