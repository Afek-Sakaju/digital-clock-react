import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { Clock } from "./components";
/* Hidden to prevent multiple calling ReactDOMClient.createRoot() 
in case someone using this as NPM package
unhide if you want to run the app ! 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();*/

export { Clock };
