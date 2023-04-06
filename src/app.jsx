import React from "react";

import { Clock } from "./components";

function App() {
  return (
    <div className="app-container">
      <Clock />
      <Clock size="medium" timestamp={123100231459} />
      <Clock size="large" timestamp={1231002314589} />    </div>
  );
}

export default App;
