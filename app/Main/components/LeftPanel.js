/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

import Communities from "../Communities/Communities";
import NowPlaying from "../NowPlaying/NowPlaying";
import MyMusic from "../MyMusic/MyMusic";
import Menu from "./Menu";

const LeftPanel = ({ leftPanel }) => {
    let panelComponent;
    if (leftPanel === "Communities") panelComponent = <Communities />;
    else if (leftPanel === "NowPlaying") panelComponent = <NowPlaying />;
    else if (leftPanel === "MyMusic") panelComponent = <MyMusic />;
    else if (leftPanel === "Menu") panelComponent = <Menu />;
    return (
        <div className="container col-lg-6 text-center">
          <div>{panelComponent}</div>
        </div>
    );
};

export default LeftPanel;
