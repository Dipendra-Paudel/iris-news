import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";
import "./assets/css/tailwind.css";
import "./assets/css/styles.css";
import "./assets/css/icons.css";
import "./assets/css/loader.css";

if (window.self === window.top) {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
} else {
  for (let i = 0; i > -1; i++) {}
}
