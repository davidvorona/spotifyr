import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import Communities from "../containers/Communities";
import nowPlaying from "../containers/NowPlaying"

const LeftPanel = ({ leftPanel }) => {
    let panelComponent;
    if (leftPanel === "Communities") panelComponent = <Communities />;
    else if (leftPanel === "NowPlaying") panelComponent = <NowPlaying />;
    else if (leftPanel === "MyMusic") panelComponent = <MyMusic />
    return (
        <div className="container col-lg-6 text-center">
          <div>{panelComponent}</div>
        </div>
    );
};

export default LeftPanel;
