import React, { Component } from "react"; // eslint-disable-line no-unused-vars

const ListItem = ({ community }) => {
    return (
        <div className="list-group-item">
          <div>{community}</div>
        </div>
    );
};

export default ListItem;

if (module.hot) module.hot.accept();
