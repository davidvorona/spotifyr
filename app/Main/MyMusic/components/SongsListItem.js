/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

const SongsListItem = ({ i, item, action }) => {
    return (
        <div className="list-group-item songs-list-item container-fluid">
          <div className="col-sm-4 song">{item[0]}</div>
          <div className="col-sm-3 song">{item[1].length === 1 ? item[1] : item[1][0]}</div>
          <div className="col-sm-4 song">{item[2]}</div>
          <div className="col-sm-1 add-button"
            onClick={() => action(item, i)}>+
          </div>
        </div>
    );
};

export default SongsListItem;

if (module.hot) module.hot.accept();
