/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

import musicImg from "../../../public/music.png";
import communitiesImg from "../../../public/communities.png";

const Menu = ({ changePanel }) => {
    return (
        <div className="container-fluid widget-container">
          <h3>Menu</h3>
          <div className="menu-container">
            <div className="list-group-item menu-item" onClick={() => changePanel("MyMusic")}>
              <h2>My Music</h2>
              <div className="icon-background center-block">
                <img className="icon" src={musicImg} />
              </div>
            </div>
            <div className="list-group-item menu-item" onClick={() => changePanel("Communities")}>
              <h2>Communities</h2>
              <div className="icon-background center-block">
                <img className="icon" src={communitiesImg} />
              </div>
            </div>
          </div>
        </div>
    );
};

export default Menu;
