/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store, { history } from "./store";

import Main from "./Main/Main";

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
