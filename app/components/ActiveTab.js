import React, { Component } from "react"; // eslint-disable-line no-unused-vars

const ActiveTab = ({ name, isActive, type, display }) => {
    return (
        <button
          className=
          {`col-md-4 btn btn-group left-border right-border ${isActive ? "active" : "inactive"}`}
          onClick={() => display(type[0], type[1], type[2])}>
          {name}
        </button>
    );
};

export default ActiveTab;
