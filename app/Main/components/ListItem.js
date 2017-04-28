/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

const ListItem = ({ item, fetch }) => {
    return (
        <div className="list-group-item panel-list-item container-fluid">
          <div className="col-lg-4">
            <b className="pull-left">{item[0]}</b>
          </div>
          <div className="col-lg-6 container-fluid">
              <div className="pull-left col-md-12">{`${item[1]} by ${item[2]}`}</div>
              <div className="pull-left col-md-12">{`Listeners: ${item[3]}`}</div>
          </div>
          <button className="col-lg-2 list-button btn"
            onClick={() => fetch(item[0])}>Tune In
          </button>
        </div>
    );
};

export default ListItem;

if (module.hot) module.hot.accept();
