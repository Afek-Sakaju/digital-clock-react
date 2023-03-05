"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Clock", {
  enumerable: true,
  get: function get() {
    return _components.Clock;
  }
});
var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./index.css");
var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));
var _components = require("./components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* import App from "./app";

* Hidden to prevent multiple calling ReactDOMClient.createRoot() 
in case someone using this as NPM package
unhide if you want to run the app ! 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, _reportWebVitals.default)();