import React, { Component } from "react"; // eslint-disable-line no-unused-vars

import ListItem from "./ListItem";

const newCommunities = ["Changed", "the", "Communities"];

const PanelTab = ({ communities }) => {
    return (
        <div className="list-group">
          {communities.map((community, i) => <ListItem key={i} i={i} community={community} />)}
        </div>
    );
};

export default PanelTab;

if (module.hot) module.hot.accept();
