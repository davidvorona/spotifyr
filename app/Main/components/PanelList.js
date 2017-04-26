/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

import ListItem from "./ListItem";

const PanelList = ({ list, fetch }) => {
    return (
        <div className="list-group">
          {list.map((item, i) => <ListItem key={i} i={i} item={item} fetch={fetch} />)}
        </div>
    );
};

export default PanelList;
