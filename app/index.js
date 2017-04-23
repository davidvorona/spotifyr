// stateless container div
// includes nav >> hamburger menu, account button
// includes app >> spotifyr, account page

import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

import css from "./styles.css";

import App from "./containers/App";

const index = (
  <div>
    <center><h1>
      <a href="/">spotifyr</a>
    </h1></center>
    <App />
  </div>
);

render(index, document.getElementById("root"));

if (module.hot) module.hot.accept();
