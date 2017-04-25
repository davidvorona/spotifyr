/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

import Communities from "../containers/Communities";
import NowPlaying from "../containers/NowPlaying";

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
