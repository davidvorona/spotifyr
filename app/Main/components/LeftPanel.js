/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

import Communities from "../Communities/Communities";
import NowPlaying from "../NowPlaying/NowPlaying";
import MyMusic from "../MyMusic/MyMusic";
import Menu from "./Menu";

const LeftPanel = ({ leftPanel, changeLeftPanel }) => {
    let panelComponent;
    switch (leftPanel) {
    case "Communities":
        panelComponent = <Communities />;
        break;
    case "NowPlaying":
        panelComponent = <NowPlaying />;
        break;
    case "MyMusic":
        panelComponent = <MyMusic />;
        break;
    case "Menu":
        panelComponent = <Menu changePanel={changeLeftPanel} />;
        break;
    default:
        panelComponent = <Menu changePanel={changeLeftPanel} />;
        break;
    }
    return (
        <div className="container col-lg-6 text-center">
          <div>{panelComponent}</div>
        </div>
    );
};

export default LeftPanel;
