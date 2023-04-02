import React from "react";
import { createRoot } from "react-dom/client";
// import { Clock } from "./components";

import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

// export default Clock;
