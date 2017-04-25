import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import Communities from "../containers/Communities";
import NowPlaying from "../containers/NowPlaying";
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
