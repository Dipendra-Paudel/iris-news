import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/css/tailwind.css";
import "./assets/css/styles.css";
import "./assets/css/icons.css";

if (window.self === window.top) {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
} else {
  for (let i = 0; i > -1; i++) {}
}
