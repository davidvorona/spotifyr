/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

import refresh from "../../../public/refresh.png";
import whiteRefresh from "../../../public/refresh-white.png";

const LoadingComponent = ({ color, isLoading }) => {
    const chooseRefresh = (color === "black" ? refresh : whiteRefresh);
    return (<img src={chooseRefresh} className="refresh spin-div"/>);
};

export default LoadingComponent;

if (module.hot) module.hot.accept();
