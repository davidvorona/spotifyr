// stateless container div
// includes nav >> hamburger menu, account button
// includes app >> spotifyr, account page

import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

import css from "./styles.css";
import bootstrap from "bootstrap-webpack";

import App from "./containers/App";

const index = (
  <div>
    <div className="container">
      <div className="row">
        <div className="vcenter text-center col-md-3 nav-item">Menu</div>
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
