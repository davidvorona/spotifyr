/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

import Communities from "../Communities/Communities";
import NowPlaying from "../NowPlaying/NowPlaying";
import MyMusic from "../MyMusic/MyMusic";

const RightPanel = ({ rightPanel }) => {
    let panelComponent;
    if (rightPanel === "Communities") panelComponent = <Communities />;
    else if (rightPanel === "NowPlaying") panelComponent = <NowPlaying />;
    else if (rightPanel === "MyMusic") panelComponent = <MyMusic />;
    return (
        <div className="container col-lg-6 text-center">
          <div>{panelComponent}</div>
        </div>
    );
};

export default RightPanel;
