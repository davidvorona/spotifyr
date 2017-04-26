/* eslint-disable no-unused-vars, arrow-body-style */
import React from "react";
import { render } from "react-dom";
import bootstrap from "bootstrap-webpack";
import store from "./store";

import css from "./styles.css";

import App from "./App";

const index = (
  <div>
    <div className="container">
      <div className="row">
        <div className="vcenter text-center col-md-3 nav-item">
          <a href="#" onClick={() => { store.dispatch({ type: "CHANGE_LEFT_PANEL", leftPanel: "Menu" }); }}>Menu</a>
        </div>
        <div className="vcenter text-center col-md-6">
          <h1><a href="/">spotifyr</a></h1>
        </div>
        <div className="vcenter text-center col-md-3 nav-item">Account</div>
      </div>
      <App />
    </div>
  </div>
);

render(index, document.getElementById("root"));

if (module.hot) module.hot.accept();
