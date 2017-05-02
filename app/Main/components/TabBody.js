/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

import PanelList from "./PanelList";
import refresh from "../../../public/refresh.png";

const TabBody = ({ props, ListComponent, CustomComponent, action, actionAll }) => {
    const activeTab = props.activeTab[0];
    const type = props.activeTab[1];
    const isRefresh = props.activeTab[2];
    const tabData = props[activeTab];

    return (
        <div className="content-container">
          {type === "list" ? <ListComponent list={tabData} action={action} /> : <CustomComponent data={tabData}/>}
          {isRefresh === true ? <button className="clear-image-button" onClick={() => { actionAll(); }}>
            <img src={refresh} className="refresh spin-div"/>
          </button> : null }
        </div>
    );
};

export default TabBody;

if (module.hot) module.hot.accept();
