import React, { Component } from "react";
// import { Router, Route } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store, { history } from "../store";

import Main from "./Main";
import Communities from "./Communities";
import PanelTab from "../components/PanelTab";

const App = () => {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Route path="/" component={Main} />
        </BrowserRouter>
      </Provider>
    );
};

export default App;
