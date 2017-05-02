/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

import refresh from "../../../public/refresh.png";

const LoadingComponent = ({ isLoading }) => {
    return isLoading ? (
        <div className="content-container">
          <img src={refresh} className="refresh spin-div"/>
        </div>
    ) : null;
};

export default LoadingComponent;

if (module.hot) module.hot.accept();
