import React, { Component } from "react";
import { Router, Route } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "../store";

import Main from "./Main";

const App = () => {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Main} />
        </Router>
      </Provider>
    );
};

export default App;
