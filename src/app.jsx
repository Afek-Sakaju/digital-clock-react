import React from "react";
import { Clock } from "./components";

function App() {
  return (
    <div className="appContainer">
      <div>
        <Clock />
        <p>Israel</p>
      </div>
      <div>
        <Clock timestamp={Date.now() + 1000 * 60 * 60 * 7} />
        <p>New-York</p>
      </div>
    </div>
  );
}

export default App;
