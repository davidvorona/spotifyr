/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

const PlaylistItem = ({ item, fetch }) => {
    return (
        <div
          className="list-group-item panel-list-item add-button container-fluid"
          onClick={() => fetch(item[2])}
        >
          <div className="col-sm-8 text-left">{item[0]}</div>
          <div className="col-sm-4">{item[1]}</div>
        </div>
    );
};

export default PlaylistItem;

if (module.hot) module.hot.accept();
