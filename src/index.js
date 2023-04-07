import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./app";

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

// eslint-disable-next-line import/prefer-default-export
export { Clock } from "./components";
